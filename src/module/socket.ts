import CONSTANTS from './constants';
import API from './api';
import { debug } from './lib/lib';
import { setSocket } from '../grit-and-glory';

export const SOCKET_HANDLERS = {

  CALL_HOOK: 'callHook',

};

export let gritAndGlorySocket;

export function registerSocket() {
  debug('Registered gritAndGlorySocket');
  if (gritAndGlorySocket) {
    return gritAndGlorySocket;
  }
  //@ts-ignore
  gritAndGlorySocket = socketlib.registerModule(CONSTANTS.MODULE_NAME);

  /**
   * Generic socket
   */
  gritAndGlorySocket.register(SOCKET_HANDLERS.CALL_HOOK, (hook, ...args) => callHook(hook, ...args));

  // TODO

  setSocket(gritAndGlorySocket);
  return gritAndGlorySocket;
}

async function callHook(inHookName, ...args) {
  const newArgs: any[] = [];
  for (let arg of args) {
    if (typeof arg === 'string') {
      const testArg = await fromUuid(arg);
      if (testArg) {
        arg = testArg;
      }
    }
    newArgs.push(arg);
  }
  return Hooks.callAll(inHookName, ...newArgs);
}

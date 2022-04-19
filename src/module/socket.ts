import CONSTANTS from './constants';
import API from './api';
import { debug } from './lib/lib';
import { setSocket } from '../main';

export const SOCKET_HANDLERS = {
  CALL_HOOK: 'callHook',
};

export let ropesSocket;

export function registerSocket() {
  debug('Registered ropesSocket');
  if (ropesSocket) {
    return ropesSocket;
  }
  //@ts-ignore
  ropesSocket = socketlib.registerModule(CONSTANTS.MODULE_NAME);

  /**
   * Generic socket
   */
  ropesSocket.register(SOCKET_HANDLERS.CALL_HOOK, (hook, ...args) => callHook(hook, ...args));

  // TODO

  setSocket(ropesSocket);
  return ropesSocket;
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

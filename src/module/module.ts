import { registerSocket } from './socket';

import CONSTANTS from './constants';
import API from './api';
import { setApi } from '../main';
import { Tether, TetherNode } from './tether';

export const initHooks = (): void => {
  // registerSettings();
  // registerLibwrappers();

  Hooks.once('socketlib.ready', registerSocket);

  // if (game.settings.get(CONSTANTS.MODULE_NAME, 'debugHooks')) {
  //   for (const hook of Object.values(HOOKS)) {
  //     if (typeof hook === 'string') {
  //       Hooks.on(hook, (...args) => debug(`Hook called: ${hook}`, ...args));
  //       debug(`Registered hook: ${hook}`);
  //     } else {
  //       for (const innerHook of Object.values(hook)) {
  //         Hooks.on(<string>innerHook, (...args) => debug(`Hook called: ${innerHook}`, ...args));
  //         debug(`Registered hook: ${innerHook}`);
  //       }
  //     }
  //   }
  // }
};

export const setupHooks = (): void => {
  setApi(API);
};

export const readyHooks = (): void => {
  // checkSystem();
  // registerHotkeys();
  // Hooks.callAll(HOOKS.READY);

  //@ts-ignore
  libWrapper.register(CONSTANTS.MODULE_NAME, "Token.prototype._onMovementFrame", (wrapped, ...args) => {
    wrapped(...args)
    Hooks.callAll("onMovementFrame",args[1][0].parent.id);
  });

  Hooks.on("canvasReady", () => {
    const tetherFlag:TetherNode[] = <TetherNode[]>canvas.scene?.getFlag(CONSTANTS.MODULE_NAME, "tethers") || [];
    for (const tether of tetherFlag) {
      const rope = Tether.CreateFromFlag(tether);
      rope.render(true);
    }
  });

  Hooks.on("updateScene", (scene, updates) => {
    if (!updates.flags.ropes) return;
    const tetherFlag:TetherNode[] = <TetherNode[]>canvas.scene?.getFlag(CONSTANTS.MODULE_NAME, "tethers") || [];
    Tether.clearAll();
    for (const tether of tetherFlag) {
      const rope = Tether.CreateFromFlag(tether);
      rope.render(true);
    }
  });
};

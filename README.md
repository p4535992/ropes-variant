#  Ropes & Tethers (Variant)

![Latest Release Download Count](https://img.shields.io/github/downloads/p4535992/foundryvtt-automated-polymorpher/latest/module.zip?color=2b82fc&label=DOWNLOADS&style=for-the-badge) 

[![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fautomated-polymorpher&colorB=006400&style=for-the-badge)](https://forge-vtt.com/bazaar#package=automated-polymorpher)

![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fp4535992%2Ffoundryvtt-automated-polymorpher%2Fmaster%2Fsrc%2Fmodule.json&label=Foundry%20Version&query=$.compatibleCoreVersion&colorB=orange&style=for-the-badge)

![Latest Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fp4535992%2Ffoundryvtt-automated-polymorpher%2Fmaster%2Fsrc%2Fmodule.json&label=Latest%20Release&prefix=v&query=$.version&colorB=red&style=for-the-badge)

[![Foundry Hub Endorsements](https://img.shields.io/endpoint?logoColor=white&url=https%3A%2F%2Fwww.foundryvtt-hub.com%2Fwp-json%2Fhubapi%2Fv1%2Fpackage%2Fautomated-polymorpher%2Fshield%2Fendorsements&style=for-the-badge)](https://www.foundryvtt-hub.com/package/automated-polymorpher/)

### If you want to buy me a coffee [![alt-text](https://img.shields.io/badge/-Patreon-%23ff424d?style=for-the-badge)](https://www.patreon.com/p4535992)

Create ropes and tethers between tokens, walls templates etc...

Ever wished you had that rope beein visualized in some manner? Or maybe a spell that tethers to someone else? now you can!

**Note: This is module is inspired from the  wonderful work done by [theRipper93](https://github.com/theripper93) with its [ropes](https://github.com/theripper93/ropes) module.
If you want to support more modules of this kind, I invite you to go and support his patreon**

[![alt-text](https://img.shields.io/badge/-Patreon-%23ff424d?style=for-the-badge)](https://www.patreon.com/theripper93) [![alt-text](https://img.shields.io/badge/-Discord-%235662f6?style=for-the-badge)](https://discord.gg/F53gBjR97G)

# Ropes & Tethers

## Create ropes and tethers between tokens, walls templates etc...

Ever wished you had that rope beein visualized in some manner? Or maybe a spell that tethers to someone else? now you can!

<img src="https://github.com/theripper93/ropes/raw/master/ropesdemo.gif" width="400">

## How to use:

Ropes & Tethers currently works via macros, there are some included in the macro compendium wich cover the basic applications

First import Start Rope, Add to Rope, End Rope macros

Then Run the start rope macro.
Now select anything (a token, a drawing, a template etc..) and run the Add to Rope macro
When you added the elements you want run the End Rope Macro

## NOTE: If you are a javascript developer and not a typescript developer, you can just use the javascript files under the dist folder

## Known issue/Limitation

## Installation

It's always easiest to install modules from the in game add-on browser.

To install this module manually:
1.  Inside the Foundry "Configuration and Setup" screen, click "Add-on Modules"
2.  Click "Install Module"
3.  In the "Manifest URL" field, paste the following url:
`https://raw.githubusercontent.com/p4535992/ropes-variant/master/src/module.json`
4.  Click 'Install' and wait for installation to complete
5.  Don't forget to enable the module in game using the "Manage Module" button


### warpgate

This module uses the [warpgate](https://github.com/trioderegion/warpgate) library. It is a mandatory dependency and it is recommended for the best experience and compatibility with other modules.

### socketlib

This module uses the [socketlib](https://github.com/manuelVo/foundryvtt-socketlib) library for wrapping core methods. It is a hard dependency and it is recommended for the best experience and compatibility with other modules.

## Features 

# API

###  async game.modules.get('ropse').invokePolymorpherManager(sourceTokenId: string, removePolymorpher = false, ordered = false, random = false, animationExternal:{ sequence:Sequence, timeToWait:number }|undefined = undefined) ⇒ <code>Promise.&lt;void&gt;</code>

Invoke the polymorpher manager feature from macro

**Returns**: <code>Promise.&lt;void&gt;</code> - A empty promise

| Param | Type | Description | Default |
| --- | --- | --- | --- |
| sourceTokenIdOrName | <code>string</code> | The id or the name of the token (not the actor) | <code>undefined</code> |
| removePolymorpher | <code>boolean</code> | This action should revert the polymorpher if the current token is polymorphed | <code>false</code> |
| ordered | <code>boolean</code> | The 'ordered' feature is enabled for this polymorphing | <code>false</code> |
| random | <code>boolean</code> | The 'random' feature is enabled for this polymorphing | <code>0</code> |
| animationExternal | <code>{ sequence:Sequence, timeToWait:number }</code> | Advanced: Use your personal sequence animation and the time needed to wait before the polymorph action, checkout the [Sequencer module](https://github.com/fantasycalendar/FoundryVTT-Sequencer) for more information  | <code>undefined</code> |

**Examples**:

`game.modules.get('automated-polymorpher').api.invokePolymorpherManager('Zruggig Widebrain')`

`game.modules.get('automated-polymorpher').api.invokePolymorpherManager('Zruggig Widebrain', true)`

`game.modules.get('automated-polymorpher').api.invokePolymorpherManager('Zruggig Widebrain', false, false)`

`game.modules.get('automated-polymorpher').api.invokePolymorpherManager('Zruggig Widebrain', false, false, false)`

## Integration with socketLib

working in progresso...

# Build

## Install all packages

```bash
npm install
```
## npm build scripts

### build

will build the code and copy all necessary assets into the dist folder and make a symlink to install the result into your foundry data; create a
`foundryconfig.json` file with your Foundry Data path.

```json
{
  "dataPath": "~/.local/share/FoundryVTT/"
}
```

`build` will build and set up a symlink between `dist` and your `dataPath`.

```bash
npm run-script build
```

### NOTE:

You don't need to build the `foundryconfig.json` file you can just copy the content of the `dist` folder on the module folder under `modules` of Foundry

### build:watch

`build:watch` will build and watch for changes, rebuilding automatically.

```bash
npm run-script build:watch
```

### clean

`clean` will remove all contents in the dist folder (but keeps the link from build:install).

```bash
npm run-script clean
```
### lint and lintfix

`lint` launch the eslint process based on the configuration [here](./.eslintrc)

```bash
npm run-script lint
```

`lintfix` launch the eslint process with the fix argument

```bash
npm run-script lintfix
```

### prettier-format

`prettier-format` launch the prettier plugin based on the configuration [here](./.prettierrc)

```bash
npm run-script prettier-format
```

### package

`package` generates a zip file containing the contents of the dist folder generated previously with the `build` command. Useful for those who want to manually load the module or want to create their own release

```bash
npm run-script package
```

## [Changelog](./changelog.md)

## Issues

Any issues, bugs, or feature requests are always welcome to be reported directly to the [Issue Tracker](https://github.com/p4535992/foundryvtt-automated-polymorpher/issues ), or using the [Bug Reporter Module](https://foundryvtt.com/packages/bug-reporter/).

## License

- **Jack Kerouac's**: [GPL-3.0 License](https://github.com/jackkerouac/animated-tokens/blob/main/LICENSE)

- **JB2A**: [CC BY-NC-SA 4.0](https://github.com/Jules-Bens-Aa/JB2A_DnD5e/blob/main/License.txt)

- **Sequencer**: [Mit License](https://github.com/fantasycalendar/FoundryVTT-Sequencer/blob/master/LICENSE)

- **Warpgate**: [GPL-3.0 License](https://github.com/trioderegion/warpgate/blob/master/LICENSE)

- **Automated Evocations**: ???

- **Game Icons**: [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)

This package is under an [GPL-3.0 License](LICENSE) and the [Foundry Virtual Tabletop Limited License Agreement for module development](https://foundryvtt.com/article/license/).

## Credits

- **Jack Kerouac's**: The Fire, Air, Lightning, Water, Energy, Magic, Heart, Crescendo, Four Elements animations assets are from Jack Kerouac's amazing https://github.com/jackkerouac/animated-spell-effects-cartoon module. (used with permission)

- **JB2A**: The  Chord, Darkness, Ice, Conjuration, Storm animations assets are courtesy of JB2A (Free animated assets), i strongly reccomend checking out their patreon for many more amazing animations and variations. (used with permission) https://discord.gg/A59GAZwB9M https://www.patreon.com/JB2A

- **Sequencer**: This module is used to play the animations https://github.com/fantasycalendar/FoundryVTT-Sequencer

- **Warpgate**: This module is used for the spawning https://github.com/trioderegion/warpgate

- **Automated Evocations**: This module is used for the inspiration and base functionality https://github.com/theripper93/automated-evocations

- **Game Icons**: Some images used are from https://game-icons.net/

## Acknowledgements

Bootstrapped with League of Extraordinary FoundryVTT Developers  [foundry-vtt-types](https://github.com/League-of-Foundry-Developers/foundry-vtt-types).

Mad props to the 'League of Extraordinary FoundryVTT Developers' community which helped me figure out a lot.

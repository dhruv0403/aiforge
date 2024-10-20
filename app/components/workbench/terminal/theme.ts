import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--aiforge-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--aiforge-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--aiforge-elements-terminal-textColor'),
    background: cssVar('--aiforge-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--aiforge-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--aiforge-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--aiforge-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--aiforge-elements-terminal-color-black'),
    red: cssVar('--aiforge-elements-terminal-color-red'),
    green: cssVar('--aiforge-elements-terminal-color-green'),
    yellow: cssVar('--aiforge-elements-terminal-color-yellow'),
    blue: cssVar('--aiforge-elements-terminal-color-blue'),
    magenta: cssVar('--aiforge-elements-terminal-color-magenta'),
    cyan: cssVar('--aiforge-elements-terminal-color-cyan'),
    white: cssVar('--aiforge-elements-terminal-color-white'),
    brightBlack: cssVar('--aiforge-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--aiforge-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--aiforge-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--aiforge-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--aiforge-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--aiforge-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--aiforge-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--aiforge-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}

import type { TetherNode } from "./tether";

export class Theters{
  id: string;
  nodes: TetherNode[];
  texture: string;
  options: {
    length: number,
    break: boolean,
    stretchmark: boolean,
    width: number,
  };
}


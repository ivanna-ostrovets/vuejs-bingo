export interface Tile {
  id: string;
  value: number;
}

export interface BoardColumn {
  [key: number]: Tile;
}

export type Board = BoardColumn[];

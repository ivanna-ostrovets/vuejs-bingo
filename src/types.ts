export interface Tile {
  id: string;
  value: number;
}

export interface BoardColumn {
  [key: number]: {
    value: number;
  };
}

export type Board = [
  BoardColumn,
  BoardColumn,
  BoardColumn,
  BoardColumn,
  BoardColumn,
];

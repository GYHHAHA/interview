export type ArrNode = {
  type: "heading" | "text";
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  content: string;
};

export type Tree = {
  root: TreeNode[];
};

export type TreeNode = {
  key: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  content: string;
  children?: TreeNode[];
};
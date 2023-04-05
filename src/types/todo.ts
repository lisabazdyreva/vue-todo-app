export type Todo = {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  timeless: boolean;
  createdTime: string;
  dates?: {
    dateFrom: string;
    dateTo: string | null;
  };
  isFavorite: boolean;
};

export type Todos = Todo[];

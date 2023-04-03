export type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  timeless: boolean;
  createdTime: string;
  dates?: {
    dateFrom: string;
    dateTo: string | null;
  };
};

export type Todos = Todo[];

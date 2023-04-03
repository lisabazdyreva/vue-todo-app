export const TODOS_PER_PAGE = 6;

export const Route = {
  Home: '/',
  Todos: '/todos',
  Login: '/login',
  About: '/about',
  Settings: '/settings',
} as const;

export const SortingValue = {
  Default: 'default',
  Alphabet: 'alphabet',
  Oldest: 'oldest',
  Latest: 'latest',
} as const;

export const FilterValue = {
  Done: 'done',
  Planned: 'planned',
  Today: 'today',
  Continuous: 'continuous',
} as const;

export const TodoListView = {
  BrieflyList: 'briefly-list',
  Cards: 'cards',
} as const;

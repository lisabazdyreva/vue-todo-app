export const TODOS_PER_PAGE = 6;

export const Route = {
  Home: '/',
  Todos: '/todos',
  Login: '/login',
  About: '/about',
  Settings: '/settings',
  Favorites: '/favorites',
  TodoDetailed: '/todo/',
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

export const FavoriteValue = {
  Add: 'add',
  Remove: 'remove',
} as const;

export const CompleteValue = {
  Completed: 'completed',
  InProgress: 'in-progress',
} as const;

export const dateTimeOptions: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

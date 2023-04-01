export const Route = {
  Home: '/',
  Todos: '/todos',
  Login: '/login',
  About: '/about',
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

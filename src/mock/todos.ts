import type { Todos } from '../types/todo';

export const todosData: Todos = [
  {
    id: 1,
    title: 'Do something nice for someone I care about',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam consequuntur doloremque, eaque esse eveniet harum illum laboriosam magnam maiores, modi nemo officiis quibusdam, quos saepe sint tempore unde voluptatem?',
    completed: true,
    timeless: false,
    createdTime: '2014-03-12T13:37:27+00:00',
    dates: {
      dateFrom: '2014-03-12T13:37:27+00:00',
      dateTo: '2014-03-12T13:37:27+00:00',
    },
  },
  {
    id: 2,
    title: 'Memorize the fifty states and their capitals',
    description: 'lorem',
    completed: false,
    timeless: false,
    createdTime: '2020-03-12T13:37:27+00:00',
    dates: {
      dateFrom: '2020-03-12T13:37:27+00:00',
      dateTo: null,
    },
  },
  {
    id: 3,
    title: 'Watch a classic movie',
    description: 'lorem',
    completed: false,
    timeless: true,
    createdTime: '2019-03-12T13:37:27+00:00',
  },
  {
    id: 4,
    title: 'Contribute code or a monetary donation to an open-source software project',
    description: 'lorem',
    completed: false,
    timeless: true,
    createdTime: '2022-03-12T13:37:27+00:00',
  },
  {
    id: 5,
    title: "Solve a Rubik's cube",
    description: 'lorem',
    completed: false,
    timeless: true,
    createdTime: '2021-03-12T13:37:27+00:00',
  },
];

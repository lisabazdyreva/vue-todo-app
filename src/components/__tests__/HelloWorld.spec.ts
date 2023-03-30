import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import HelloWorld from '../todo/todo-list.vue';

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } });
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});

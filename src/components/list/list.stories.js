import List from './list.vue';

export default {
  title: 'UI Components/List',
  component: List,
  args: {
    listType: 'info',
    listItems: ['List item one', 'List item two'],
  },
  argTypes: {
    listType: {
      control: { type: 'select', options: ['info', 'positive', 'error'] },
    },
    listItems: { control: 'array' },
  },
};

const Template = args => ({
  components: { List },
  setup() {
    return { args };
  },
  template: `<List :listType="args.listType" :listItems="args.listItems" />`,
});

export const Normal = Template.bind({});
Normal.args = {
  listType: 'info',
  listItems: ['List item one', 'List item two'],
};

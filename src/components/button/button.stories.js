import Button from './button.vue';

export default {
  title: 'UI Components/Button',
  component: Button,
  args: {
    label: 'text',
  },
};

const Template = args => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `<Button :label="args.label"/>`,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary button',
};

export const Secondary = Template.bind({});
Secondary.args = { label: 'Secondary button' };

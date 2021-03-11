// Import the global styles to Storybook
import '!style-loader!css-loader!sass-loader!../src/assets/styles/main.scss';

export const parameters = {
  options: {
    storySort: {
      order: [
        'Introduction',
        ['Welcome'],
        'Styles',
        ['Colors', 'Spacing', 'Icons', 'Elevation', 'Typography'],
        'UI Components',
      ],
    },
  },
};

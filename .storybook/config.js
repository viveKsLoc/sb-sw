import { configure } from '@storybook/react';
import '@storybook/addon-console';

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);

import React from 'react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import CountryFlag from '../CountryFlag';

// export default {
//     title: 'CountryFlag',
// }

// export const countryFlag = () => <CountryFlag />

setAddon(JSXAddon);

const stories = storiesOf('CountryFlag', module);

stories.addDecorator(withKnobs);

stories.addWithJSX('Default', () => <CountryFlag />)
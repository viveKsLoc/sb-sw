import React from 'react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { setAddon, storiesOf, addParameters } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import CountryFlag from '../CountryFlag';

// export default {
//     title: 'CountryFlag',
// }

// export const countryFlag = () => <CountryFlag />

setAddon(JSXAddon);

const stories = storiesOf('CountryFlag', module);

stories.addDecorator(withKnobs);

stories.addWithJSX('Default', () => <CountryFlag />)
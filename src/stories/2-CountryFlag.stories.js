import React from 'react';
import JSXAddon from 'storybook-addon-jsx';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import CountryFlag from '../components/CountryFlag';

setAddon(JSXAddon);

const stories = storiesOf('CountryFlag', module);

stories.addDecorator(withKnobs);

stories.addWithJSX('Default', () => <CountryFlag />);
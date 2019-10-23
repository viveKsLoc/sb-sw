import React from 'react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { setAddon, storiesOf, addParameters } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import CountryFlagGlobal from '../CountryFlagGlobal.jsx';

setAddon(JSXAddon);

const stories = storiesOf('CountryFlagGlobal', module);

stories.addDecorator(withKnobs);

stories.addWithJSX('Default', () => <CountryFlagGlobal />);
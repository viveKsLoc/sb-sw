import React from 'react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { setAddon, storiesOf, addParameters } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import ImageOverlay from '../ImageOverlay.jsx';

setAddon(JSXAddon);

const stories = storiesOf('ImageOverlay', module);

stories.addDecorator(withKnobs);

stories.addWithJSX('Default', () => <ImageOverlay />)
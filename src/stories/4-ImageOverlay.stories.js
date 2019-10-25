import React from 'react';
import JSXAddon from 'storybook-addon-jsx';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs} from '@storybook/addon-knobs';

import ImageOverlay from '../components/ImageOverlay.jsx';

setAddon(JSXAddon);

const stories = storiesOf('ImageOverlay', module);

stories.addDecorator(withKnobs);

stories.addWithJSX('Default', () => <ImageOverlay />);
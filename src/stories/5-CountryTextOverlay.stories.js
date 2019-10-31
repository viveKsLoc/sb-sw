import React from 'react';
import JSXAddon from 'storybook-addon-jsx';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import CountryTextOverlay from '../components/CountryTextOverlay.jsx';

setAddon(JSXAddon);

const stories = storiesOf('CountryTextOverlay', module);

stories.addDecorator(withKnobs);

stories.addWithJSX('Default', () => {
    const disabled = boolean('Disabled?');

    return (
        <CountryTextOverlay
            disabled={disabled}
        />
    )
});
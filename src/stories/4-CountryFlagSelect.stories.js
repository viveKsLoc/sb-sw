import React from 'react';
import JSXAddon from 'storybook-addon-jsx';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import CountryFlagSelect from '../components/CountryFlagSelect.jsx';

setAddon(JSXAddon);

const stories = storiesOf('CountryFlagSelect', module);

stories.addDecorator(withKnobs);

stories.addWithJSX('Default', () => {
    const disabled = boolean('Disabled?');

    return (
        <CountryFlagSelect
            disabled={disabled}
        />
    )
});
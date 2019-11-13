import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import CustomCountryFlag from '../components/CustomCountryFlag';

setAddon(JSXAddon);

const stories = storiesOf('CustomCountryFlag', module);

stories.addDecorator(withKnobs);

stories.addWithJSX('Default', () => {
    const disabled = boolean('Disabled?');

    return <CustomCountryFlag
        disabled={disabled}
    />
});
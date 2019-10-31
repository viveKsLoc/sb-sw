import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import CountryLanguageSelect from '../components/CountryLanguageSelect';

setAddon(JSXAddon);

const stories = storiesOf('CountryLanguageSelect', module);

stories.addDecorator(withKnobs);

stories.addWithJSX('Default', () => {
    const disabled = boolean('Disabled?');

    return <CountryLanguageSelect
        disabled={disabled}
    />
});
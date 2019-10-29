import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import LanguageSelect from '../components/LanguageSelect';

setAddon(JSXAddon);

const stories = storiesOf('LanguageSelect', module);

stories.addDecorator(withKnobs);

stories.addWithJSX('Default', () => {
    const disabled = boolean('Disabled?');

    return <LanguageSelect
        disabled={disabled}
    />
});
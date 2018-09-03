import React from 'react';
import { storiesOf } from '@storybook/react';

import Caption from '../../components/atomics/Caption';

storiesOf('Caption')
    .add('empty', () => <Caption />)
    .add('with text', () => <Caption text="Caption" />)
    .add('with lots of text', () => <Caption text="A slightly longer caption for testing"/>);

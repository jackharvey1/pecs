import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from '../../components/atomics/Image';

storiesOf('Image')
    .add('with image', () => <Image src="https://via.placeholder.com/300x200" />);

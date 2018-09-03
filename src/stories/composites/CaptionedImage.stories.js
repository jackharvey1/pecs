import React from 'react';
import { storiesOf } from '@storybook/react';

import CaptionedImage from '../../components/composites/CaptionedImage';

storiesOf('CaptionedImage')
    .add('empty', () => <CaptionedImage />)
    .add('with image', () => <CaptionedImage src="https://via.placeholder.com/300x200" />)
    .add('with text', () => <CaptionedImage text="CaptionedImage" />)
    .add('with image and text', () => (
        <CaptionedImage
            src="https://via.placeholder.com/300x200"
            text="CaptionedImage"
        />
    ));

import React from 'react';
import { storiesOf } from '@storybook/react';

import PictureBoard from '../../components/composites/PictureBoard';

storiesOf('PictureBoard')
    .add('empty', () => <PictureBoard />)
    .add('with one image', () => (<PictureBoard data={[
        {
            text: 'Caption',
            src: 'https://via.placeholder.com/300x200',
        },
    ]} />))
    .add('with multiple images', () => (<PictureBoard data={[
        {
            text: 'Caption',
            src: 'https://via.placeholder.com/300x200',
        }, {
            text: 'Caption2',
            src: 'https://via.placeholder.com/300x200',
        }, {
            text: 'Caption3',
            src: 'https://via.placeholder.com/300x200',
        },
    ]} />));

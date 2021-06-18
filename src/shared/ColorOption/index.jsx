import React from 'react';

import {ColorItem} from './styles';

function ColorOption({bgColor}) {
    return (
        <ColorItem bgColor={bgColor}></ColorItem>
    )
}

export default ColorOption;
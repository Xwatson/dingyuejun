/**
 * Created by xwatson on 2016/12/13.
 */

import React from 'react';
import { PixelRatio } from 'react-native';
import Dimensions from 'Dimensions';

const Util = {
    ratio: PixelRatio.get(),
    pixel: 1 / PixelRatio.get(),
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    key: 'BDKHFSDKJFHSDKFHWEFH-REACT-NATIVE',
};


export default Util;
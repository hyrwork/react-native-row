import React from 'react';
import { View, Platform, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import shorthandStyles from './shorthandStyles'

const Row = (props) => {

    const {
        dial = 0,
        spaceBetween,
        spaceAround,
        stretch,
        margin,
        padding,
        style,
        pos,
        reverse,
        ...otherProps,
    } = props;

    const _dial = dial > 0 && dial < 10 ? dial : 0;

    const _shorthandStyles = shorthandStyles(margin, padding, pos)

    const justifyContent = spaceBetween ? 'space-between' : spaceAround ? 'space-around' : _dial === 0 ? null : _dial % 3 === 0 ? 'flex-end' :
            _dial % 3 === 2 ? 'center' : 'flex-start';

    const alignItems = stretch ? 'stretch' : _dial === 0 ? null : _dial > 6 ? 'flex-end' :
            _dial > 3 ? 'center' : 'flex-start';

    const flexDirection = reverse ? 'row-reverse' : 'row';

    const position = typeof pos === 'number' || Array.isArray(pos) ? 'absolute' : null

    const Component = !otherProps.onPress
        ? View
        : Platform.OS === 'android'
            ? TouchableNativeFeedback
            : TouchableHighlight

    const _style = {
        flexDirection,
        justifyContent,
        alignItems,
        position,
    };

    return(
        <Component style={[_style, _shorthandStyles, style]} {...otherProps} >
            {props.children}
        </Component>
    );

};

export default Row

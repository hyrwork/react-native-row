import React from 'react';
import RN, {Platform, TouchableNativeFeedback, TouchableHighlight} from 'react-native';
import shorthandStyles from './shorthandStyles'
const RNView = RN.View;

const View = (props) => {

    const {
        dial = 0,
        flex: _flex,
        style,
        spaceBetween,
        spaceAround,
        stretch,
        margin,
        padding,
        pos,
        reverse,
        ...otherProps,
    } = props;

    const _dial = dial > 0 && dial < 10 ? dial : 0;

    const flex = typeof(_flex) === "number" ? _flex : !_flex ? -1 : 1

    const _shorthandStyles = shorthandStyles(margin, padding, pos)

    const justifyContent = spaceBetween ? 'space-between' : spaceAround ? 'space-around' : _dial === 0 ? null : _dial > 6 ? 'flex-end' :
            _dial > 3 ? 'center' : 'flex-start';

    const alignItems = stretch ? 'stretch' : _dial === 0 ? null : _dial % 3 === 0 ? 'flex-end' :
            _dial % 3 === 2 ? 'center' : 'flex-start';

    const flexDirection = reverse ? 'column-reverse' : 'column';

    const position = typeof pos === 'number' || Array.isArray(pos) ? 'absolute' : null

    const Component = !otherProps.onPress
        ? RNView
        : Platform.OS === 'android'
            ? TouchableNativeFeedback
            : TouchableHighlight

    const _style = {
        flex,
        flexDirection,
        justifyContent,
        alignItems,
        position,
    }

    return (
        <Component style={[_style, _shorthandStyles, style]} {...otherProps} >
            {props.children}
        </Component>
    );
};

export default View

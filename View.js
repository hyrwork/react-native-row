import React from 'react';
import RN from 'react-native';
import shorthandStyles from './shorthandStyles'


const RNView = RN.View;

const View = (props) => {

    const {
        dial = 0,
        flex: _flex,
        style,
        ...otherProps,
    } = props;

    const _dial = dial > 0 && dial < 10 ? dial : 0;
    const flex = typeof(_flex) === "number" ? _flex : !_flex ? null : 1

    const _shorthandStyles = shorthandStyles(margin, padding)

    const justifyContent = _dial === 0 ? null : _dial > 6 ? 'flex-end' :
            _dial > 3 ? 'center' : 'flex-start';

    const alignItems = _dial === 0 ? null : _dial % 3 === 0 ? 'flex-end' :
            _dial % 3 === 2 ? 'center' : 'flex-start';

    return (
        <RNView style={[{justifyContent, alignItems, flex}, _shorthandStyles, style]} {...otherProps} >
            {props.children}
        </RNView>
    );
};

export default View
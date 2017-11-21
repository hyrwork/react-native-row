import React from 'react';
import { View, StyleSheet } from 'react-native';
import shorthandStyles from './shorthandStyles'

class Row extends React.Component {
    
    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps)
    }

    render() {

        const {
            dial = 0,
            flex: _flex,
            spaceBetween,
            spaceAround,
            stretch,
            margin,
            padding,
            reverse,
            style,
            ...otherProps,
        } = this.props;

        const _dial = dial > 0 && dial < 10 ? dial : 0;
        const flex = typeof(_flex) === "number" ? _flex : !_flex ? -1 : 1

        const _shorthandStyles = shorthandStyles(margin, padding)

        const justifyContent = spaceBetween ? 'space-between' : spaceAround ? 'space-around' : _dial % 3 === 0 ? 'flex-end' :
                        _dial % 3 === 2 ? 'center' : 'flex-start';

        const alignItems = stretch ? 'stretch' : _dial > 6 ? 'flex-end' :
                    _dial > 3 ? 'center' : 'flex-start';

        const flexDirection = reverse ? 'row-reverse' : 'row';

        // memoize the cached styles
        // const index = JSON.stringify(fixedStyles)
        // let cachedStyleNumber = null
        // if (index in cachedStyles) {
        //     cachedStyleNumber = cachedStyles[index]
        // }
        // else {
        const toBeCachedStyle = {
            flexDirection,
            justifyContent,
            alignItems,
            flex,
            ..._shorthandStyles,
        }
        cachedStyleNumber = StyleSheet.create({style: toBeCachedStyle}).style

        return (
            <View style={[cachedStyleNumber, style]} {...otherProps} >
                {this.props.children}
            </View>
        );
    };
}

export default Row

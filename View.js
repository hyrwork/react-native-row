import React from 'react';
import RN, { StyleSheet } from 'react-native';
import shorthandStyles from './shorthandStyles'
const RNView = RN.View;

class View extends React.Component {

    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps)
    }

    render() {

        const {
            dial = 0,
            flex: _flex,
            style,
            spaceBetween,
            spaceAround,
            stretch,
            margin,
            padding,
            reverse,
            ...otherProps,
        } = this.props;

        const _dial = dial > 0 && dial < 10 ? dial : 0;
        const flex = typeof(_flex) === "number" ? _flex : !_flex ? -1 : 1

        const _shorthandStyles = shorthandStyles(margin, padding)

        const justifyContent = spaceBetween ? 'space-between' : spaceAround ? 'space-around' : _dial > 6 ? 'flex-end' :
                _dial > 3 ? 'center' : 'flex-start';

        const alignItems = stretch ? 'stretch' : _dial % 3 === 0 ? 'flex-end' :
                _dial % 3 === 2 ? 'center' : 'flex-start';

        const flexDirection = reverse ? 'column-reverse' : 'column';

        const toBeCachedStyle = {
            flexDirection,
            justifyContent,
            alignItems,
            flex,
            ..._shorthandStyles,
        }
        cachedStyleNumber = StyleSheet.create({style: toBeCachedStyle}).style        

        return (
            <RNView style={[cachedStyleNumber, style]} {...otherProps} >
                {this.props.children}
            </RNView>
        );
    }
};

export default View

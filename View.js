import React from 'react';
import RN from 'react-native';

const RNView = RN.View;

const View = (props) => {

    const { dial = 0, style, ...otherProps } = props;

    const justifyContent = dial === 0 ? null : dial > 6 ? 'flex-end' :
            dial > 3 ? 'center' : 'flex-start';

    const alignItems = dial === 0 ? null : dial % 3 === 0 ? 'flex-end' :
            dial % 3 === 2 ? 'center' : 'flex-start';

    return (
        <RNView style={[{justifyContent, alignItems}, style]} {...otherProps} >
            {props.children}
        </RNView>
    );
};

export default View
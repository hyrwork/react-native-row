import React from 'react';
import View from './View';
import Row from './Row';
import {
    Image,
    ListView,
    ScrollView,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native'


let Styled = {}

const StyledComponent = (Component) => (styles) => (props) => {
    const {
        styles: inlineStyles,
        children,
        ...otherProps,
    } = props
    return(
        <Component style={[styles, inlineStyles]} {...otherProps}>
            {children}
        </Component>
    )
};

Styled.View = StyledComponent(View)
Styled.Row = StyledComponent(Row)
Styled.Image = StyledComponent(Image)
Styled.ListView = StyledComponent(ListView)
Styled.ScrollView = StyledComponent(ScrollView)
Styled.Text = StyledComponent(Text)
Styled.TouchableHighlight = StyledComponent(TouchableHighlight)
Styled.TouchableNativeFeedback = StyledComponent(TouchableNativeFeedback)
Styled.TouchableOpacity = StyledComponent(TouchableOpacity)
Styled.TouchableWithoutFeedback = StyledComponent(TouchableWithoutFeedback)

export default Styled
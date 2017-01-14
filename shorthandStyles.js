const shorthandStyles = (margin, padding) => {

    let s = {}
    
    if (typeof margin === "number") { s['margin'] = margin }
    else if (Array.isArray(margin)){
        switch (margin.length) {
            case 1: 
                s['marginVertical'] = margin[0]
            case 2:
                s['marginVertical'] = margin[0]
                s['marginHorizontal'] = margin[1]
            case 3:
                s['marginTop'] = margin[0]
                s['marginHorizontal'] = margin[1]
                s['marginBottom'] = margin[2]
            case 4:
                s['marginTop'] = margin[0]
                s['marginRight'] = margin[1]
                s['marginBottom'] = margin[2]
                s['marginLeft'] = margin[3]
        }
    }
    
    if (typeof padding === "number") { s['padding'] = padding }
    else if (Array.isArray(padding)){
        switch (padding.length) {
            case 1:
                s['paddingVertical'] = padding[0]
            case 2:
                s['paddingVertical'] = padding[0]
                s['paddingHorizontal'] = padding[1]
            case 3:
                s['paddingTop'] = padding[0]
                s['paddingHorizontal'] = padding[1]
                s['paddingBottom'] = padding[2]
            case 4:
                s['paddingTop'] = padding[0]
                s['paddingRight'] = padding[1]
                s['paddingBottom'] = padding[2]
                s['paddingLeft'] = padding[3]
        }
    }
    
    return s
}

export default shorthandStyles
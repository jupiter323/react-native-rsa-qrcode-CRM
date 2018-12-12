import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window');
const styles = {
    container: {
        flex: 1,
        width:'100%',       
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        flex: 1,
        width: width,
        height: height
    },
    logoimg: {
        resizeMode: 'contain'
    },
    btn: {
  
    },
    btnText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    },
}

export default styles;
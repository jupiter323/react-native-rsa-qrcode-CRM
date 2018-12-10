import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window');
const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background:{
        flex:1,
        width:width,
        height:height
    },
    logoimg: {
        resizeMode: 'contain',
        marginTop: height / 3,
        marginBottom: height / 50,
    },
    btn:{
        width:width*1/2,
        backgroundColor:'rgba(255, 78, 0, 1)',
        borderRadius:25,
        marginVertical:height/15,
        paddingVertical:height/50
    },
    btnText: {
        fontSize:30,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    },
}

export default styles;
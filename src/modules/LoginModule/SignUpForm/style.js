import {Dimensions, StatusBar} from 'react-native'

const {height, width} = Dimensions.get('window');
const styles =  {
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    background:{
        flex:1,
        width:width,
        height:height
    },
    logoimg: {
        alignSelf: 'center',
        height: height/4, 
        resizeMode: 'contain',
        marginTop: height/80,
        marginBottom: height/20,
    },
    textcontainStyle: {
        // flex: 1,
        flexDirection: 'row',
        borderColor: 'white',
        borderRadius: 15,
        borderWidth: 2,
        width: width * 17 / 20,
        // height: height * 3 / 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: height / 40,
    },
    iconstyle: {
        marginLeft: width / 15,
        color:'white'
    },
    inputStyle: {
        marginLeft: width / 25,
        color: 'white',
        height: height / 40 * 3,
        paddingBottom: 0,
        paddingTop: 0,
        width:width * 15 / 20,
        fontSize:20
    },
    gobuttonStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFC015',
        borderRadius: 15,
        width: width * 17 / 20,
        height: height * 3 / 40,
        marginTop: height / 40,
    },
    buttonStyle: {
        // marginTop: dimens.margin_medium,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6B00',
        borderRadius: 15,
        width: width * 17 / 20,
        height: height * 3 / 40,
    },
    gobuttonTextStyle: {
        color: 'white',
        fontSize: 20,
    },
    goiconStyle: {
        position: 'absolute',
        right: 15,
        width: width * 1.2 / 22.58,
    },
    buttonTextStyle: {
        marginLeft: width / 25,
        color: 'white',
        fontSize: 20,
    },
    iconStyle: {
        height: 25,
        // resizeMode: 'contain'
    },
    altsignup: {
        color: 'white',
        marginTop: height  / 20,
        marginBottom: height / 70,
        fontSize: 20,
    },
}

export default styles;
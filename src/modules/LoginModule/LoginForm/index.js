import React, { Component } from 'react'
import { View, TextInput, Text, Image, TouchableHighlight, TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
import { Icon, Container } from "native-base"
import { Button, Content } from "native-base"
import styles from './style'
// import logname from 'assets/images/logoname.png'
import BG from 'assets/images/bg.png'
export default class HomeScreen extends React.Component {
    login() {
        this.props.navigation.navigate('PreScan')
    }
    signup() {
        this.props.navigation.navigate('Signup')
    }
    forgot() {

    }
    render() {
        return (
            <Container>
                 <StatusBar hidden={true}></StatusBar>
                <Content>
                    <ImageBackground
                        style={styles.background}
                        source={BG} >
                        <View style={styles.container}>
                            {/* <Image style={styles.logoimg} source={logname}></Image> */}
                            <View style={styles.logoimg}></View>
                            <View style={styles.textcontainStyle}>
                                <Icon style={styles.iconstyle} type="EvilIcons" name={"envelope"} size={20} />
                                <TextInput style={styles.inputStyle}
                                    placeholder='E-mail'
                                    onChangeText={this.handleTextChange}
                                    secureTextEntry={this.props.secureTextEntry}
                                    placeholderTextColor='white'
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={styles.textcontainStyle}>
                                <Icon style={styles.iconstyle} type="EvilIcons" name={"lock"} size={20} />
                                <TextInput style={styles.inputStyle}
                                    placeholder='Password'
                                    onChangeText={this.handleTextChange}
                                    secureTextEntry={this.props.secureTextEntry}
                                    placeholderTextColor='white'
                                    underlineColorAndroid='transparent'
                                    secureTextEntry={true}
                                />
                            </View>                        
                            <Button
                                style={styles.gobuttonStyle}
                                onPress={() => { this.login() }}>
                                <Text style={styles.gobuttonTextStyle}>{"Login"}</Text>
                                <Icon style={styles.goiconStyle} type='Feather' name="chevrons-right" size={20} />
                            </Button>

                            <Button
                                style={styles.gobuttonStyle}
                                onPress={() => { this.forgot() }}>
                                <Text style={styles.gobuttonTextStyle}>{"Forgot Password"}</Text>
                                <Icon style={styles.goiconStyle} type="EvilIcons" name="lock" size={20} />
                            </Button>

                            <Text style={styles.altsignup}>
                                {"Don't have an account yet?"}
                            </Text>
                            <Button
                                style={styles.buttonStyle}
                                onPress={() => { this.signup() }}>
                                <Icon style={styles.iconStyle} type='Feather' name="user-plus" size={20} />
                                <Text style={styles.buttonTextStyle}>{"Sign Up Now"}</Text>
                            </Button>
                        </View>
                    </ImageBackground>
                </Content>
            </Container>
        );
    }
}
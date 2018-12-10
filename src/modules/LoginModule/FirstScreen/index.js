import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import styles from './style'
import img from 'assets/images/icon.png'
import background_img from 'assets/images/bg.png'


export default class HomeScreen extends React.Component {
    login() {
        this.props.navigation.navigate('Login')
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <ImageBackground
                        style={styles.background}
                        source={background_img} >
                        <View style={styles.container}>
                            <Image
                                style={styles.logoimg}
                                source={img}
                            />
                            <TouchableOpacity style={styles.btn} onPress={() => { this.login() }}>
                                <Text style={styles.btnText}>Get Start</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}
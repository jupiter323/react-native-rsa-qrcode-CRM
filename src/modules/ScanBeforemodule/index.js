import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
import styles from './style'
import capture from 'assets/images/capture.png'
import background_img from 'assets/images/bgbsic.png'


export default class PreScanScreen extends React.Component {
    scan() {
        this.props.navigation.navigate('Scan')
    }
    render() {
        return (
            <View style={styles.container}>              
                    <ImageBackground
                        style={styles.background}
                        source={background_img} >
                        <View style={styles.container}>
                            <TouchableOpacity style={styles.btn} onPress={() => { this.scan() }}>
                                <Image
                                    style={styles.logoimg}
                                    source={capture}
                                />

                            </TouchableOpacity>
                            <Text style={{ fontSize: 20, color: 'white', width: '100%', textAlign: 'center', marginTop: 30 }}>Scan the QR code on the poster and book your product</Text>
                        </View>
                    </ImageBackground>
               
            </View>
        );
    }
}
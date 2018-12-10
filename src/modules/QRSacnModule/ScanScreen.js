import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { Crypt, keyManager, RSA } from 'hybrid-crypto-js';

class ScanScreen extends React.Component {
  crypt;
  rsa;

  publicKey;
  privateKey;

  encrypted;
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    
  }

  initCrypt() {
    // Increase amount of entropy   
    this.crypt = new Crypt();
    this.rsa = new RSA();
  }
  keypairsGenerateBackend() {
    // Generate RSA key pair, defaults on 4096 bit key
    self = this
    this.rsa.generateKeypair(function (keypair) {
      // Callback function receives new keypair as a first argument
      self.publicKey = keypair.publicKey;
      self.privateKey = keypair.privateKey;
    });
  }

  keypairsGenerateFrontend() {
    keyManager.getKeys(function (keypair) {

      // Callback function receives new keypair as a first argument
      this.publicKey = keypair.publicKey;
      this.privateKey = keypair.privateKey;
      console.log(this.privateKey, this.publicKey);
      alert();
    });
  }

  encryption() {
    console.log(this.privateKey, this.publicKey);
    var message = 'Hello world!';
    // Encryption with one public RSA key
    this.encrypted = this.crypt.encrypt(this.publicKey, message);
    console.log(this.encrypted);
  }

  decryption() {
    // Decrypt encryped message with private RSA key
    var decrypted = this.crypt.decrypt(this.privateKey, this.encrypted);
    if(!decrypted) {
      alert("Info is not correct")
      return;
    }
    // Get decrypted message
    var message = decrypted.message;
    console.log("decrypted",JSON.parse(message).productId);
  }


  onSuccess(e) {
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
    alert("Succeed scanning")
    console.log("qrcode result",e.data);
    this.encrypted = e.data;
  }
  pressButton = () => {
    let num = this.state.count + 1;
    this.setState({ count: num })
    console.log(this.state.count)
    this.render();
    
    this.initCrypt();
    // this.encrypted = '{"v":"hybrid-crypto-js_0.1.6","iv":"vAG0VDn+tk0F49tmGi7wgihoP2F9rry47YxEuJvSOyo=","keys":{"b6:77:3c:20:94:e2:08:bf:df:f7:4e:0c:df:41:04:c1:86:30:af:f2":"sKTquKbVcbsrUiQyxnuVulhJ46J5D10uE+5LYhsufh39gmY6fO+P8GXZSVxVP0L9OoQI3TN+lF1gBaDHhtxpRffY15kqu7bQVNE+0cgstWpa+oifP6bnNBzzz2nHvw//nxq9af3gY5nUrGeIcT83ae2rv1FZ0+SXTdjxSCyfZJw="},"cipher":"AeRbKn72qFTgaCiHYLXnXrgejjGgoC9RPfOlXriSHNPCZ/xnjMHkwfPzHw/QtYq/"}'
    this.privateKey = "-----BEGIN RSA PRIVATE KEY-----MIICXQIBAAKBgQDM5i9VoeffeqVpuycoqW5nm72/59gBVdUej45HkPy9VegC7yD48RrByjSM2lfLRvsfaoPCnDcmPfSYGSeE5lz85U5OUH8jDN2CTK7M+87HBS91akX9V8bkMzT93z0Dv1t7FSIYA6WTf7uU7XIq54/5r+dxp+qyWTqSeVJMqAPafwIDAQABAoGBAKFEJksyo+oLgLdH2tkxCTk4pc6t7h+W66ci+6uuHI30WCg/B2eHdDTELjoR+3l9g1bFobCA/RL3PlSbr7P1D4d/P1sDvU9T218sA47odRIsxFlaHi2VdATvh5GhHYcOIEri5Rwg1ViKXDtfKJOSAtU14BlC3LjLnY6mhYReojoRAkEA7VHgmTO3g8t2XfUZlkNCHW+ZGXdM0jVenAK16EqUi/rDocvEeyeLwmG2/nd1luHRUAkqP7pGkYb2jR+a+b5XtwJBAN0HA3TMPbm5lbIIi2EeOCb4rBjdswepj55FcBFazo2JAHOM9u//6/pLLrr2MDFdxlcoFD4v0TVokPBhjQmkw3kCQGli9bky1SjKvoqk4DLxNTf7KeK8LroehyACuCMqk2LB/gQoh90kx5SPbgL8q5RQPXIsT72zC8luRKiQw3JqS2sCQHkZNaCRoqQWdVkU62CrkPJxPsFk/okNMt3xh4RKr27GiFPHASjfnCgHdzQCXMc/bMMl92lXA5Xyk67Qk9ibyGkCQQDEhsFc4JkWFrtdv+TJ7F6VA038TqlYJcVcaz04VpWr9wDQxUbWbpBfuN4mWOOs33Yo7SezmAMt1Wme1+elqHnW-----END RSA PRIVATE KEY-----"
    this.decryption();
  }
  render() {
    return (
      <View style={{ height: '100%' }}>
        <QRCodeScanner
          onRead={this.onSuccess.bind(this)}
          topContent={
            <Text style={styles.centerText}>
              count is<Text style={styles.textBold}>{this.state.count}</Text>
            </Text>
          }
          bottomContent={
            <TouchableOpacity
              onPress={this.pressButton}
              style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: 'white',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default ScanScreen;
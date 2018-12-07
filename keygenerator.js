var RSA = require('hybrid-crypto-js').RSA;
var Crypt = require('hybrid-crypto-js').Crypt;

var rsa = new RSA();
var crypt = new Crypt();
// Generate RSA key pair, defaults on 4096 bit key
rsa.generateKeypair(function(keypair) { 
    // Callback function receives new keypair as a first argument

    // var publicKey = keypair.publicKey;
    // var privateKey = keypair.privateKey;
    
    var publicKey = "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDM5i9VoeffeqVpuycoqW5nm72/59gBVdUej45HkPy9VegC7yD48RrByjSM2lfLRvsfaoPCnDcmPfSYGSeE5lz85U5OUH8jDN2CTK7M+87HBS91akX9V8bkMzT93z0Dv1t7FSIYA6WTf7uU7XIq54/5r+dxp+qyWTqSeVJMqAPafwIDAQAB-----END PUBLIC KEY-----"    
    // console.log(publicKey, privateKey);
    var message = JSON.stringify({productId:"p1", category:"c1"});
    // Encryption with one public RSA key
    var encrypted = crypt.encrypt(publicKey, message);
    console.log(encrypted); //string
},1024);

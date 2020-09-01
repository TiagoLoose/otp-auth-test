const OTPAuth = require('otpauth');
const otpauth = require('./otpauthService')
 
let totp = otpauth.build()

// Generate TOTP token.
let token = totp.generate();
console.log(token) 

// Validate TOTP token.
let delta = totp.validate({
    token: token,
    window: 1
});
console.log(delta)
 
// Convert to Google Authenticator key URI.
//   otpauth://totp/ACME:AzureDiamond?issuer=ACME&secret=NB2W45DFOIZA&algorithm=SHA1&digits=6&period=30
let uri = totp.toString(); // or "OTPAuth.URI.stringify(totp)"
 
// Convert from Google Authenticator key URI.
let parsedTotp = OTPAuth.URI.parse(uri);

console.log(uri)
console.log(parsedTotp)
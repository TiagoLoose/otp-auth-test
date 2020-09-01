const OTPAuth = require('otpauth');
const otpauth = require('./otpauthService')
 
let totp = otpauth.build()

let token = '497623'

// Validate TOTP token.
let delta = totp.validate({
    token: token,
    window: 1
});

console.log(delta)

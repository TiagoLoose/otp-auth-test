const OTPAuth = require('otpauth');

exports.build = function(){
    let totp = new OTPAuth.TOTP({
        issuer: 'mapinguari',
        label: 'Tiago(01444659227)',
        algorithm: 'SHA1',
        digits: 6,
        period: 30
    });

    return totp
}
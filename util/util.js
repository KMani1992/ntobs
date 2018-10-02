const passwordHash = require('password-hash');

exports.hashPassword=(plainPassword)=>{
    const hashedPassword = passwordHash.generate('password123');
    return hashedPassword;
}

exports.verifyPassword=(plainPassword,hashedPassword)=>{
    const verifyStatus = passwordHash.verify(plainPassword,hashedPassword);
    return verifyStatus;
}

exports.generateId = () => {
    let uniqid = Math.floor(Math.random(1000) * 1000).toString();
    const now=new Date();
    
    uniqid += now.getFullYear().toString(); // 2018
    uniqid += (now.getMonth() < 9 ? '0' : '') + now.getMonth().toString(); // JS months are 0-based, so +1 and pad with 0's
    uniqid += (now.getDate() < 10 ? '0' : '') + now.getDate().toString(); // pad with a 0
    uniqid += (now.getHours() < 10 ? '0' : '') + now.getHours().toString();
    uniqid += (now.getMinutes() < 10 ? '0' : '') + now.getMinutes().toString();
    uniqid += (now.getSeconds() < 10 ? '0' : '') + now.getSeconds().toString();
    uniqid += (now.getMilliseconds() < 10 ? '0' : '') + now.getMilliseconds().toString();
    return uniqid;
} 
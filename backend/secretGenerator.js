import crypto from "crypto"
const newSecretKey = crypto.randomBytes(64).toString('hex');
console.log(newSecretKey);
import Crypto from 'crypto-js'

const key = process.env.APP_CRYPTO_KEY ? process.env.APP_CRYPTO_KEY : 'apt123'

export const encrypt = ( plainText: string ) : string => {
    const ciphertext = Crypto.AES.encrypt(plainText, key).toString()
    return ciphertext
}


export const decrypt = ( ciphertext: string ) : string => {
    const bytes = Crypto.AES.decrypt(ciphertext, key)
    const plainText = bytes.toString(Crypto.enc.Utf8)
    return plainText
}
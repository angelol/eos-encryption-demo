# eos-encryption-demo

The purpose of this demo is to show how to encrypt data for specific EOS accounts. This way, a user can encrypt sensitive data on the client side (in the browser) before sending the data to the blockchain. The user can encrypt the data with their own public key so only they can read it. Or the user can encrypt the data with the public key of another EOS account so only this person can read it.

This is inspired by: https://steemit.com/steem/@dantheman/how-to-encrypt-a-memo-when-transferring-steem

Things to be aware of:
* If users rotate their private key, they might lose access to their data. The Dapp should probably advise users to keep old private keys around for this and offer a way to migrate the data to the new key. Another, less user-friendly, way to deal with this would be to let the users register an encryption key with the contract and not use EOS keys at all.
* This method of encryption does not offer any forward secrecy. If the private key gets compromised at some point in the future, unauthorized parties can decrypt all the data.
* This method of encryption is not quantum computing resistant. Should the encryption be broken at some point in the future, the EOS chain can switch to a new encryption methods, but the old data will become compromised.

## Build eosjs-ecc
```
cd eosjs-ecc
npm install
npm run build_browser
```

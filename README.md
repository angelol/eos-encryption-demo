# eos-encryption-demo

The purpose of this demo is to show how to encrypt data for specific EOS accounts. This way, a user can encrypt sensitive data on the client side (in the browser) before sending the data to the blockchain. The user can encrypt the data with their own public key so only they can read it. Or the user can encrypt the data with the public key of another EOS account so only this person can read it.

## Build eosjs-ecc
```
cd eosjs-ecc
```
### Master doesn't seem to be working at the moment, so we're checking out latest release
```
git checkout v3.0.2
npm install
npm run build
```

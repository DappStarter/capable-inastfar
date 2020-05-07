require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note pizza slow inflict permit obscure tornado'; 
let testAccounts = [
"0x7b54d193ec96a4408aeac44c8886e951301af8c0c5c2bd5d4cf6a1abf9d517e6",
"0x0e44709442bd92f3714d18cb66b8a3f5e98d3f717305bfa90fc05c18bb0494fc",
"0x56676f0168482a6a7929c26af5123ea621a33a19a4c918ac17afa3eb00c5962b",
"0xbef45bce9fb367304b5c67ea52e4f134b97858cefb407b5ded3713c78b30f387",
"0xb465e216b4e88ab4b5df80dbd80187dbee8448247ac81b02b950ab57a4f23bfc",
"0x843f04c90ebe5f370d28bebfa5a325b75a532596d15f618094c198a32d84bc2e",
"0x40a1bc301b5779202e375fd221ea830ac7e0e66b8d40291516ad21eb0a1ec121",
"0x922c86c367117797dcd235c23e32a44b21d222bcf2c584727b0cc2dae7777aae",
"0x009f94a0032da5cfa0fb74e3af382ceea3bedd80214d60c9b685a8d0fcee8093",
"0x959bdcafffee4496b77517717fb0778c229f7abd93531359e6baa20994587e18"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area system finish rival noise artist hard light army gasp'; 
let testAccounts = [
"0x1d77decf888175fe276be2134d59eb32cd3a9db3ed78dee55570c4e51766babf",
"0x4bc80aff7adef80046596b87e6599547515d8b200cd2da5081891bd6a0fb68cd",
"0xb9691e678797dad4ab6fa8d16348901b863f50db40f7a9c12966537542662b73",
"0x4d357270e74e2d7b605d795e002c414d966e60e580fc89329d5d858f4a6fd2d1",
"0xc3cd1985a3e6481c010e9386c4aa388ff65b189624dee91a83e1bbf67c576940",
"0xf23609ab4308f7eb9c87ff09e8d3bc6cc70f3d8c7bbbf820ce727f24822eece7",
"0xca8681f1f96a2141393ca2ed876969d3b32a2c528cc74289ad82dee2fdfce38e",
"0x88f742590d85ea3c86e5038cc0d3b4d56968f1d64fd8be08a82d1196b759490d",
"0xeb447d05927d5ba5c7cf0e651c60ca3be657efe038516e5ec1b1ce8ef9395e8c",
"0x8f5e6a7a9d5a3af41d854f959a22dd75046cd0a2b0c7f1d34e47f39e410ead3a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


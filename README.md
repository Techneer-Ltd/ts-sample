# Get Started With TokenScript

## The Techneer Token

### How to Deploy

Install dependencies: `npm install`

Create a `.env` file and supply the two variables:

1. `ALCHEMY_API_KEY`: can obtained at https://www.alchemy.com/
2. `PRIVATE_KEY`: private key of your ethereum account, obtainable from your wallet (e.g., [Metamask](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key))

You can tweak with the [contract](./contracts/Techneer.sol) and the [deployment script](./scripts/deploy.js) before the deployment

Run the deployment script: `npx hardhat run scripts/deploy.js --network goerli`

### Sample Deployment

Network: [Goerli](https://goerli.net/)

Address: [0x0F01A99db01B081BabBf220dE7Aa1D48D29bcF7e](https://goerli.etherscan.io/address/0x0F01A99db01B081BabBf220dE7Aa1D48D29bcF7e)

Supply: 1,000,000,000

Decimal: 18

## Build TokenScript

The TokenScript file is built in [ts](./ts) as [Techneer.canonicalized.xml](./ts/Techneer.canonicalized). The file defines three customized functions: _Approve_, _About_, and  _Hello_.

The script can be built by `make Techneer.canonicalized.xml`.

## View in Wallet

[Import](https://www.tokenscript.org/docs/guides/miniguide-add-token-to-aw/) the token to your AlphaWallet

[Import](https://www.tokenscript.org/docs/quick-start/#Put%20the%20TokenScript%20on%20your%20Smartphone) the TokenScript to your AlphaWallet

Check that custom functions are displayed and can be used

## References

TokenScript Guide: https://www.tokenscript.org/docs/quick-start/

Hardhat Tutorial: https://hardhat.org/tutorial

ERC-20 Implementation: https://docs.openzeppelin.com/contracts/3.x/erc20

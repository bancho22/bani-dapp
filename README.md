# bani-dapp (Crypto Wallet App) - **[Live preview](https://bani-dapp.vercel.app/)**

Integrated with:
**MetaMask** - https://metamask.io/

### Functionality:

- [x] Connects with MetaMask
- Once connected, gathers the following information, nicely presented to the user:
  - [x] The current Address that User uses
  - [x] The Network that the User has selected
  - [x] Ethereum balance of the User
  - [x] Nexo Token balance of the User
  - [ ] Automatically detects any Tokens that the User has and showcase them as well and the Balance of them
- We want the User to have the ability to get more information for the Displayed Tokens.
  - [x] Symbol of the Token
  - [x] Decimals
  - [x] Total Supply
- [x] Add a Warning that tells the User that he has not Selected Mainnet and should switch his network.

### Using:

- ReactJS
- Vite
- @metamask/detect-provider
- ethers.js

### Run locally via:

1. `git clone`
2. `yarn && yarn start`

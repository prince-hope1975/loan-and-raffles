import { WalletConnectWeb3ModalConfig } from "@tronweb3/walletconnect-tron";

interface WalletConnectWalletAdapterConfig {
  network: WalletConnectChainID;
  options: SignClientTypes.Options;
  /**
   * Config for web3Modal constructor.
   * Detailed documentation can be found in WalletConnect page:
   * https://docs.walletconnect.com/2.0/web3modal/options.
   * - `walletConnectVersion` will be ignored and will be set to 2.
   * - `projectId` will be ignored and will be set with `options.projectId`.
   */
  web3ModalConfig?: WalletConnectWeb3ModalConfig;
}
enum WalletConnectChainID {
  Mainnet = "tron:0x2b6653dc",
  Shasta = "tron:0x94a9059e",
  Nile = "tron:0xcd8690dc",
}

import { WalletConnectWallet, WalletConnectChainID } from '@tronweb3/walletconnect-tron';
const wallet = new WalletConnectWallet({
  network: WalletConnectChainID.Mainnet,
  options: {
    relayUrl: 'wss://relay.walletconnect.com',
    projectId: '....',
    metadata: {
      name: 'JustLend',
      description: 'JustLend WalletConnect',
      url: 'https://app.justlend.org/',
      icons: ['https://app.justlend.org/mainLogo.svg']
    }
  },
  web3ModalConfig: {
    themeMode: 'dark',
    themeVariables: {
      '--w3m-z-index': 1000
    },
    /**
     * Recommended Wallets are fetched from WalletConnect explore api:
     * https://walletconnect.com/explorer?type=wallet&version=2.
     * You can copy these ids from the page.
     */ 
    explorerRecommendedWalletIds: [
      '1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369',
      '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0'
    ]
  }
});
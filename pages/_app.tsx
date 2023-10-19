import type { AppProps } from "next/app";
import { ThirdwebProvider, coinbaseWallet, metamaskWallet, walletConnect } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {

  const customMetamaskWallet = metamaskWallet({ recommended: true });
  const customCoinbaseWallet = coinbaseWallet();
  const customWalletConnect = walletConnect();

  customMetamaskWallet.meta.name = "FOX WALLET";
  customMetamaskWallet.meta.iconURL = "/metamaskIcon.png";

  customCoinbaseWallet.meta.name = "COINBASE";
  customCoinbaseWallet.meta.iconURL = "/coinbaseIcon.png";

  customWalletConnect.meta.name = "WALLET CONNECT";
  customWalletConnect.meta.iconURL = "walletconnectIcon.png";


  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[
        customMetamaskWallet,
        customCoinbaseWallet,
        customWalletConnect
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;

# Thirdweb's Custom Connect Wallet Button

This repo is a practice of the titorial from https://youtu.be/lpBdrkjR2eQ, showing how to implement a custom wallet button with Thirdweb in Next,js app.

# Get Started

### Create a Next.js app using TypeScript

```cmd
npx thirdweb create app
```

### Set the Active Chain

```
// pages/_app.tsx

const activeChain = "mumbai";
```

### Add a client ID

```
// pages/.env

NEXT_PUBLIC_TEMPLATE_CLIENT_ID=<FIND_IT_ON_THIRDWEB_API>
```

### Install Tailwind CSS

see [the docs](https://tailwindcss.com/docs/guides/nextjs).

### Add a button: `<ConnectWallet />`

```
// pages/index.tsx

import { ConnectWallet } from "@thirdweb-dev/react";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="bg-zinc-900 h-screen flex justify-center items-center" >
      <div >
        <ConnectWallet />
      </div>
    </main>
  );
};

export default Home;

```

# Customize the button

Customize it on [Thirdweb's UI](https://thirdweb.com/dashboard/wallets/connect) and copy & paste the code, or hardcode it

## Button

In `page/index.tsx` under `<ConnectWallet />`:

- Button title: `btnTitle`
- css style: `className` (not supports tailwind css here)

## Modal

### Theming

In `page/index.tsx` under `<ConnectWallet />`:

```
theme={
    darkTheme({
    fontFamily: "Futura",
    colors: {
      modalBg: "#FFFFFF",
      primaryText: "#333333",
      walletSelectorButtonHoverBg: "#EEEEEE",
      separatorLine: "#EEEEEE",
      borderColor: "#EEEEEE"
    }
  })
}
```

### Custom Wallet

In `page/_app.tsx`:

- recommended
- name
- icon
- supportedWallets

### Title

customize the left side of the modal window

In `page/index.tsx` under `<ConnectWallet />`:

- `modalTitle`
- `modalTitleIconUrl`: can be empty

### Welcome screen

customize the right side of the modal window

In `page/index.tsx` under `<ConnectWallet />`:

- Use Thirdweb UI, or hardcode

```
welcomeScreen={{
            title: "Connect Wallet to claim NFT.",
            subtitle: "Claim your NFT now!",
            img: {
              src: "/white-t-shirt.jpg",
              height: 150,
              width: 150
            }
          }}
```

- Render a component

```
welcomeScreen={() => {
            return (
              <div className="h-60 w-auto mx-auto my-auto">
                <MediaRenderer
                  // IPFS image
                  src={"https://ipfs.io/ipfs/QmYSiTDEwo4W5yAjrDDGkcArk6QRQrtPiHWLkxrQ4oSVXU?filename=treasure.svg"}
                  height="100%"
                  width="auto"
                />
              </div>
            )
          }}
```

- Pull infomation from an existing contract
  - `useContract()`
  - `useActiveClaimCondition()`
  - Render a component

```
welcomeScreen={() => {
            return (
              <div className="
              flex flex-col items-center justify-center p-5
            ">
                <h2>Jacket NFT</h2>
                <MediaRenderer
                  src={"https://ipfs.io/ipfs/QmYSiTDEwo4W5yAjrDDGkcArk6QRQrtPiHWLkxrQ4oSVXU?filename=treasure.svg"}
                />
                <p>Connect your wallet to claim!</p>
                <h3>Only <span className="font-bold">{claimCondition?.availableSupply}</span> left!</h3>
              </div>
            )
          }}
```

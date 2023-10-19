import { ConnectWallet, MediaRenderer, darkTheme, useActiveClaimCondition, useContract } from "@thirdweb-dev/react";
import { NextPage } from "next";

const Home: NextPage = () => {

  const customTheme = darkTheme({
    fontFamily: "Futura",
    colors: {
      modalBg: "#FFFFFF",
      primaryText: "#333333",
      walletSelectorButtonHoverBg: "#EEEEEE",
      separatorLine: "#EEEEEE",
      borderColor: "#EEEEEE"
    }
  })

  const { contract } = useContract("0xF627A2EA6701D9aFeaEDB3dB6e356fC01c83a154");

  const {
    data: claimCondition
  } = useActiveClaimCondition(contract, 0);

  return (
    <main className="bg-zinc-900 h-screen flex justify-center items-center" >
      <div >
        <ConnectWallet
          btnTitle="Login"
          className="bg-zinc-900"

          theme={customTheme}

          modalTitle="Login in with wallet"
          modalTitleIconUrl="/metamaskIcon.png"

          // welcomeScreen={{
          //   title: "Connect Wallet to claim NFT.",
          //   subtitle: "Claim your NFT now!",
          //   img: {
          //     src: "/white-t-shirt.jpg",
          //     height: 150,
          //     width: 150
          //   }
          // }}

          // welcomeScreen={() => {
          //   return (
          //     <div className="h-60 w-auto mx-auto my-auto">
          //       <MediaRenderer
          //         // IPFS image
          //         src={"https://ipfs.io/ipfs/QmYSiTDEwo4W5yAjrDDGkcArk6QRQrtPiHWLkxrQ4oSVXU?filename=treasure.svg"}
          //         height="100%"
          //         width="auto"
          //       />
          //     </div>
          //   )
          // }}

          welcomeScreen={() => {
            return (
              <div className="
              flex flex-col items-center justify-center p-5
            ">
                <h2 className="text-2xl font-bold py-8">Jacket NFT</h2>
                <MediaRenderer
                  src={"https://ipfs.io/ipfs/QmYSiTDEwo4W5yAjrDDGkcArk6QRQrtPiHWLkxrQ4oSVXU?filename=treasure.svg"}
                />
                <p className="text-lg py-4">Connect your wallet to claim!</p>
                <h3>Only <span className="text-2xl font-bold py-8">{claimCondition?.availableSupply ? claimCondition?.availableSupply : 0}</span> left!</h3>
              </div>
            )
          }}

        />
      </div>
    </main>
  );
};

export default Home;

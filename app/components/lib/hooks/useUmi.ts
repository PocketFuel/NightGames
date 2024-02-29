import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters'
import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata'
import { mplCandyMachine } from '@metaplex-foundation/mpl-candy-machine'
import { useWallet } from '@solana/wallet-adapter-react'

const useUmi = () => {
  // Import useWallet hook
  const wallet = useWallet()

  // Create Umi instancex
  const umi = createUmi('https://mainnet.helius-rpc.com/?api-key=b6b97ed4-c507-40f7-ad75-e46051af0379')
    .use(mplTokenMetadata())
    .use(mplCandyMachine())
    // Register Wallet Adapter to Umi
    .use(walletAdapterIdentity(wallet))

  return umi
}

export default useUmi
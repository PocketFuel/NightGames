import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smash? Or Trash!',
  description:
    'A Smash or Pass style NFT Tournament solution on Solana. Play casual and just upload images and vote for fun or vote for NFTs using SPL tokens in place of WAX (Offchain points system powered by DLI). Smash or Trash is the brainchild of DTP Legend NFT Onward and was designed and built probono by CrayHans, the founder of CrayonDAOO.',
  twitter: {
    title: 'Smash? Or Trash!',
    description:
    'A Smash or Pass style NFT Tournament solution on Solana. Play casual and just upload images and vote for fun or vote for NFTs using SPL tokens in place of WAX (Offchain points system powered by DLI). Smash or Trash is the brainchild of DTP Legend NFT Onward and was designed and built probono by CrayHans, the founder of CrayonDAOO.',
    images: 'https://solana-web3-template.nightly.app/preview.png',
    card: 'summary_large_image',
    site: '@nightly_app',
  },
  openGraph: {
    title: 'Smash? Or Trash!',
    description:
    'A Smash or Pass style NFT Tournament solution on Solana. Play casual and just upload images and vote for fun or vote for NFTs using SPL tokens in place of WAX (Offchain points system powered by DLI). Smash or Trash is the brainchild of DTP Legend NFT Onward and was designed and built probono by CrayHans, the founder of CrayonDAOO.',
    images: 'https://solana-web3-template.nightly.app/preview.png',
    url: 'https://smashtrash.xyz',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="bg-black" lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

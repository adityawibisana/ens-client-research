import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import { ThemeProvider } from 'styled-components'
import { ThorinGlobalStyles, lightTheme } from '@ensdomains/thorin'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { publicProvider } from 'wagmi/providers/public'
import PlausibleProvider from 'next-plausible'
import { infuraProvider } from 'wagmi/providers/infura'


const { chains, provider } = configureChains(
  [chain.goerli], // you can add more chains here like chain.mainnet, chain.optimism etc.
  [
    infuraProvider({
      apiKey: 'ec4d297edcf74c2089fe72fb5142b5a4',
    }),
    publicProvider(),
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

const isProdEnv = process.env.NEXT_PUBLIC_VERCEL_ENV == 'production'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <ThorinGlobalStyles />
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <PlausibleProvider
            domain={isProdEnv ? 'ensfairy.xyz' : 'dev.ensfairy.xyz'}
            trackLocalhost={!isProdEnv}
            trackOutboundLinks
          >
            <Component {...pageProps} />
          </PlausibleProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </ThemeProvider>
  )
}

export default App

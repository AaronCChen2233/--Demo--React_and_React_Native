// The `App` component is the top-level component which will be common across all different pages. You can use this `App` Component to keep state when navigating between pages.
import { AppProps } from 'next/app'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

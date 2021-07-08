// Toda a página acessada será carregada por esse arquivos
// portanto toda vez que uma página for carregada, tudo
// que for colocado aqui será recriado (estados, chamadas a api e etc)
// Esse arquivo seria o App.tsx no SPA

import { AppProps } from 'next/app'
import { Header } from 'components/Header'
import { ThemeProvider } from 'styled-components'
import { Provider as NextAuthProvider } from 'next-auth/client'
import { GlobalStyles } from 'styles/GlobalStyles'
import { theme } from 'styles/theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NextAuthProvider session={pageProps.session}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </NextAuthProvider>
    </ThemeProvider>
  )
}

export default MyApp

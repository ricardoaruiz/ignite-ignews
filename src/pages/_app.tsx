// Toda a página acessada será carregada por esse arquivos
// portanto toda vez que uma página for carregada, tudo
// que for colocado aqui será recriado (estados, chamadas a api e etc)
// Esse arquivo seria o App.tsx no SPA

import { AppProps } from 'next/app'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

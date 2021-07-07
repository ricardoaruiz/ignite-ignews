import Head from 'next/head'

import * as S from 'styles/home.styles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | ig news</title>
      </Head>

      <S.Title>
        Hello <span> world</span>
      </S.Title>
    </>
  )
}

import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import * as S from './styles'

type ActiveLinkProps = React.PropsWithChildren<LinkProps>

export const ActiveLink = (props: ActiveLinkProps) => {
  const { asPath } = useRouter()

  return (
    <Link {...props} passHref>
      <S.NavItem isActive={asPath === props.href}>{props.children}</S.NavItem>
    </Link>
  )
}

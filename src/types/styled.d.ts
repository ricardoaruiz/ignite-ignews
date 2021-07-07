/* eslint-disable @typescript-eslint/no-empty-interface */
import {} from 'styled-components'
import { Theme } from 'styles/theme/type'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

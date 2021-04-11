import styled from 'styled-components'

import { COLORS, TABLET_WIDTH } from 'src/constants'

export const PageWrapper = styled.section`
  background-color: ${COLORS.BACKGROUND};
  color: ${COLORS.FONT};
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  
  > * ::-webkit-scrollbar, ::-webkit-scrollbar {
    appearance: none;
    width: 4px;
    height: 4px;
  }
`

export const PageContent = styled.main`
  flex-grow: 1;
  margin: 20px 80px;
  transition: margin 0.4s;
  
  @media (max-width: ${TABLET_WIDTH}px) {
    margin: 20px 10px;
  } 
`

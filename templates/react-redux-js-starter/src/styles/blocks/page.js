/**
 * Provides general styles for the application that are to be inherited by default.
 */
import styled from 'styled-components'

import { COLORS, DESIGN, TABLET_WIDTH } from 'src/constants'

/**
 * Defines transition effects during theme changing.
 */
export const ThemeWrapper = styled.div`
  height: 100%;
  ${props => props.themeChanging && `
    transition: all ${DESIGN.THEME_ANIMATION_LENGTH}s 0s;
  
    * {
      transition: all ${DESIGN.THEME_ANIMATION_LENGTH}s 0s !important;
    }
  `}
`

/**
 * Defines page background, font color, content positioning and restyles page scrollbars.
 */
export const PageWrapper = styled.section`
  background-color: ${COLORS.BACKGROUND};
  color: ${COLORS.FONT};
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  scrollbar-color: ${COLORS.GRAY_DARK} ${COLORS.GRAY_LIGHT};
  scrollbar-width: thin;
  
  > * div {
    scrollbar-width: thin;
  }
  
  > * ::-webkit-scrollbar, ::-webkit-scrollbar {
    appearance: none;
    width: 4px;
    height: 4px;
  }
  
  > * ::-webkit-scrollbar-thumb, ::-webkit-scrollbar-thumb {
    appearance: none;
    background-color: ${COLORS.GRAY_DARK};
    border-radius: 5px;
  }

  > * ::-webkit-scrollbar-track, ::-webkit-scrollbar-track {
    background-color: ${COLORS.GRAY_LIGHT};
  }
  
  > * input:-webkit-autofill {
    background-color: inherit;
  }
`

/**
 * Provides page content with margin and make it always fill-up all free space/
 */
export const PageContent = styled.main`
  flex-grow: 1;
  margin: 85px 80px 20px;
  transition: margin 0.4s;
  
  @media (max-width: ${TABLET_WIDTH}px) {
    margin: 85px 10px 20px;
  } 
`

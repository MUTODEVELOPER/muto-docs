import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import Callout from './components/Callout'

export function useMDXComponents(components) {
  return {
    ...getThemeComponents(),
    Callout,
    ...components
  }
}

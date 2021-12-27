import dynamic from 'next/dynamic'

const ThemeHandler = dynamic(
  () => import('./ThemeHandler'),
  { ssr: false }
)

export default ThemeHandler
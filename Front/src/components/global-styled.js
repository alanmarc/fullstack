import { createGlobalStyle } from 'styled-components'

const DefaultStyles = createGlobalStyle`
  :root {
    --primary: #de98ff;
    --second: #f14290;
    --gray: #f0f0f0;
  }
  body, figure {
    margin: 0;
  }
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
  }
  .form {
    display: grid;
    grid-template-columns: 62px 1fr;
    grid-column-gap: 12px;
  }
  .buttons {
    display: flex;
  }
  .flex {
    display: flex;
  }
  p {
    font-size: 14px
  }
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 20px;
  }
`

export default function GlobalStyles({ theme }) {
  return (
    <DefaultStyles {...theme} />
  )
}

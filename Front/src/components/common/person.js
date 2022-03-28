import styled from "styled-components"

const PersonStyled = styled.figure`
    border-radius: 50%;
    background-color: var(--secondary);
    overflow: hidden;
    padding: 4px;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border: 1px solid var(--primary);
    /* height: auto; */
  img {
    object-fit: cover;
    border-radius: inherit;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
`

function Person({size, url}) {
  return (
    <PersonStyled size={size}>
      <img src={url} alt="person" />
    </PersonStyled>
  )
}

Person.defaultProps = {
  size: '62px',
  url: 'https://coru.com/static/media/CoachImage.7857cca3.png'
}

export default Person

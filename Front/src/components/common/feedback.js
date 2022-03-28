import styled from "styled-components"

const FeedbackStyled = styled.div`
  padding: 4px 8px;
	background-color: ${({ background }) => background};
  border-radius: 2px;
  text-align: center;

`

function Feedback({ children, background }) {
  return (
    <FeedbackStyled background={background}>
      {children}
    </FeedbackStyled>
  )
}

Feedback.defaultProps = {
  background: 'var(--primary)'
}

export default Feedback

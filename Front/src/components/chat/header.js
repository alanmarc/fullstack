import styled from 'styled-components';
import Wrapper from '../common/wrapper';

const HeaderStyled = styled.div`
	padding: 2px 1px;
	background-color: var(--primary);
	position: sticky;
	top: 0;
	z-index: 2;
	
	.progress {
		box-sizing: border-box;
		height: 4px;
		background-color: rgba(0,0,0,.45);
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.porcent {
		width: ${({ size }) => `calc(${size} * 100% / 3)`};
		background-color: var(--second);
		height: inherit;
	}
`

function Header({ step }) {
	return (
		<HeaderStyled size={Number(step) + 1}>
			<Wrapper>
				<h1>Formulario de Registro</h1>
				<h2>En menos de 5 minutos</h2>
			</Wrapper>
			<div className="progress">
				<div className="porcent"></div>
			</div>
		</HeaderStyled>
	)
}

export default Header

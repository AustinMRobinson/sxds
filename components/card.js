import styled from '@emotion/styled'


const StyledCard = styled.div`
    position: relative;
    z-index: 0;
    color: var(--foreground);
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: ${p => p.p ? p.p : '1'}rem;
    background: var(--mediumBackground);
    backdrop-filter: blur(var(--blur2));
    border-top: 1px solid var(--lightestBackground);
    clip-path: polygon(
        0% 0px, 0px 0%, 
        calc(100% - 0px) 0%, 100% 0.75rem, 
        100% calc(100% - 0.75rem), calc(100% - 0.75rem) 100%,
        0px 100%, 0% calc(100% - 0.75rem));
    &:before, &:after {
        content: '';
        position: absolute;
        top: 0;
        z-index: 2;
        bottom: 1rem;
        width: 1px;
        background: linear-gradient(180deg, var(--lightestBackground) 0%, transparent 100%);
    }
    &:before {
        left: 0;
    }
    &:after {
        right: 0;
    }
    @media screen and (max-width: 1200px) {
        padding: calc(${p => p.p ? p.p : '1'}rem / 2);
    }
`

const Card = ({ children, className, p }) => {
    return (
        <StyledCard className="card-wrapper" p={p}>
            {children}
        </StyledCard>
    )
}

export default Card
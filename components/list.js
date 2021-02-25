import styled from '@emotion/styled'


const StyledListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 1rem 0.25rem;
    &:not(:last-of-type) {
        border-bottom: 1px solid var(--lightBackground);
    }
    .leading {
        margin-right: 1rem;
    }
`

export const ListItem = ({ leading, trailing }) => {
    return (
        <StyledListItem>
            <div className="leading">{leading}</div>
            <div className="trailing">{trailing}</div>
        </StyledListItem>
    )
}

const StyledList = styled.ul`
    position: relative;
    z-index: 0;
    color: var(--foreground);
    display: flex;
    flex-direction: column;
    margin: 0;
    min-width: ${p => p.minWidth};
    list-style-type: none;
    padding: 0.125rem 0.75rem;
    background: var(--mediumBackground);
    backdrop-filter: blur(var(--blur2));
    border-top: 1px solid var(--lightestBackground);
    clip-path: polygon(
        0% 0px, 0px 0%, 
        calc(100% - 0px) 0%, 100% 1rem, 
        100% calc(100% - 1rem), calc(100% - 1rem) 100%,
        0px 100%, 0% calc(100% - 1rem));
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
`

export const List = ({ children, minWidth }) => {
    return (
        <StyledList minWidth={minWidth}>
            {children}
        </StyledList>
    )
}
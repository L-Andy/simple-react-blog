import styled from 'styled-components';

export const MainContainer = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    top: ${({ top, theme }) => top ? theme._headerHeight : 0};
    bottom: 0;
    overflow: auto;
    & a {
        text-decoration: none;
    }
`;

export const Container = styled.div.attrs({ className: 'w3-row w3-mobile' })`
    background-color: ${({ theme, dark }) => dark ? theme.colorGrey25 : theme.colorWhite} !important;
    width: 100%;
    height: auto;
`
import styled from 'styled-components'

export const Button = styled.button`
    padding: 12px 30px;
    background: ${({ theme }) => theme.colorBlue};
    color: ${({ theme }) => theme.colorWhite};
    border-radius: 8px;
    border: none;
    cursor: pointer;
`
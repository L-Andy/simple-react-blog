import styled from 'styled-components'

export const Body = styled.p`
    text-transform: ${({ capitalize, upperCase }) => (capitalize ? 'capitalize' : upperCase ? 'uppercase' : undefined)};
    ${({ type }) => type === 'bodyHeading1' ? `
        font-size: 20px;
        font-weight: regular;
    ` :
        type === 'bodyHeading2' ? `
        font-size: 18px;
        font-weight: regular;
    ` :
            type === 'bodyHeading3' ? `
        font-size: 16px;
        font-weight: 600;
    ` :
                type === 'bodyHeading4' ? `
        font-size: 14px;
        font-weight: regular;
    ` : null}
`

export const Heading = styled.h1`
    font-weight: bold;
    text-transform: ${({ capitalize, upperCase }) => (capitalize ? 'capitalize' : upperCase ? 'uppercase' : undefined)};
    ${({ type }) => type === 'heading1' ? `
        font-size: 64px;
    ` :
        type === 'subHeading1' ? `
        font-size: 24px;
    ` :
            type === 'subHeading2' ? `
        font-size: 20px;
    ` : null}
`
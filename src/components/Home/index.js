import styled from 'styled-components';
import { Container } from 'components/layout';
import { Body } from 'components/typography';

export const SubscribeSection = styled.div`
display: flex;
flex-direction: row;
margin-top: 40px;
& input {
    width: 70%;
    margin-right: 10px;
}
`

export const CategoryList = ({ children, dark, title }) => {
    return <Container className='w3-padding-32 w3-mobile' dark={dark}>
        <div className='w3-col l1 w3-hide-medium w3-hide-small'>.</div>
        <div className='w3-col l10 m12 s12'>
            <div className='w3-row-padding w3-mobile'>
                <div className='w3-padding-12'>
                    <Body type='bodyHeading1' capitalize>{title}</Body>
                </div>
                {children}
            </div>
        </div>
        <div className='w3-col l1 w3-hide-medium w3-hide-small'>.</div>
    </Container>
}
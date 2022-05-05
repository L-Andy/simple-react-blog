import React from 'react';
import styled from 'styled-components';
import Logo from 'assets/icons/Logo.svg';
import { Body } from 'components/typography/index';
import { SearchInput } from 'components/inputs';
import { Button } from 'components/buttons/index';
import Coffee from 'assets/icons/coffee.svg'

const _Header = styled.div.attrs({
    className: 'w3-card s4 w3-row'
})`
    height: ${({ theme }) => theme._headerHeight};
    background: ${({ theme }) => theme.colorWhite};
    & > div:nth-child(2n) {
        height: 100%;
        & > div {
            height: 100%;
        }
        & > div:first-child {
            display: flex;
            align-items: center;
            & img {
                height: 60%;
            }
        }
        & > div:last-child {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            & p:hover {
                cursor: pointer;
                color : ${({ theme }) => theme.colorBlue};
            }
        }
    }
`

const Header = () => {
    return (
        <_Header>
            <div className='w3-col l1 w3-hide-medium w3-hide-small'>.</div>
            <div className='w3-col l10 m12 s12 w3-row w3-container'>
                <div className='w3-col l3 s12 w3-hide-medium'>
                    <img src={Logo} />
                </div>
                <div className='w3-col l9 w3-hide-small m12'>
                    {
                        ['home', 'category', 'about me'].map((f, index) => <Body key={index} type='bodyHeading2' capitalize>{f}</Body>)
                    }
                    <SearchInput />
                    <Button><img src={Coffee} />Buy me coffee</Button>
                </div>
            </div>
            <div className='w3-col l1 w3-hide-medium w3-hide-small'>.</div>
        </_Header>
    );
}

export default Header;

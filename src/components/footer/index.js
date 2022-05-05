import React from 'react';
import styled from 'styled-components';
import Logo from 'assets/icons/Logo.svg';
import Medium from 'assets/icons/medium.svg';
import Twitter from 'assets/icons/twitter.svg';
import Instagram from 'assets/icons/instagram.svg';
import LinkedIn from 'assets/icons/linekdin.svg';
import { Body, Heading } from 'components/typography/index';

const StyledFooter = styled.div.attrs({ className: 'w3-row' })`
    background-color: ${({ theme }) => theme.colorGrey50};
    padding: 40px 0;
    & > div:nth-child(2n) {
        & > div:first-child {
            & > div {
                margin-bottom: 25px;
            }
            display: flex;
            flex-direction: column;
            & img {
                height: 40px;
            }
            & > div:last-child {
                & img {
                    height: 20px;
                    width: 20px;
                    margin-right: 10px;
                }
            }
        }
        & p:hover {
                    cursor: pointer;
                    color: ${({ theme }) => theme.colorBlue};
                }
    }
`
const Footer = () => {
    const footerData = [
        {
            title: 'category',
            subTitles: ['css', 'javascript', 'tailwinds', 'react JS', 'more category']
        },
        {
            title: 'about me',
            subTitles: ['about me', 'projects', 'achievement']
        },
        {
            title: 'get in touch',
            subTitles: ['+256 783 120484', 'demo@awesoft.net']
        },
        {
            title: 'follow us',
            subTitles: ['medium', 'instagram', 'twitter', 'facebook']
        },
    ]
    return (
        <StyledFooter>
            <div className='w3-col l1 w3-hide-small w3-hide-medium w3-text-white'>.</div>
            <div className='w3-col l10 s12 w3-row w3-container'>
                <div className='w3-col l4 m6 s12'>
                    <div>
                        <img src={Logo} />
                    </div>
                    <div>
                        <Body type='bodyHeading2' as='label' capitalize>software development company</Body>
                    </div>
                    <div>
                        <img src={Medium} />
                        <img src={Twitter} />
                        <img src={Instagram} />
                        <img src={LinkedIn} />
                    </div>
                </div>
                {
                    footerData.map((f, index) => <div key={index} className='w3-col l2 m6 s12'>
                        <Body type='bodyHeading3' upperCase>{f.title}</Body>
                        <div className='w3-section'>
                            {
                                f.subTitles.map((g, index) => <Body key={index} type='bodyHeading2' capitalize>{g}</Body>)
                            }
                        </div>
                    </div>)
                }
            </div>
            <div className='w3-col w3-hide-small w3-hide-medium l1 w3-text-white'>.</div>
        </StyledFooter>
    );
}

export default Footer;

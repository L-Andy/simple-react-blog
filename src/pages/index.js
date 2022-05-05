import React from 'react';
import Header from 'components/header';
import { Container, MainContainer } from 'components/layout';
import { Input } from 'components/inputs';
import { Button } from 'components/buttons/index';
import Avatar from 'assets/icons/mine.svg'
import { Body, Heading } from 'components/typography';
import { SubscribeSection, CategoryList } from 'components/Home/index';
import { ArticleCard, CategoryCard } from 'components/cards/index';
import data from 'assets/data';
import ArticleImg from 'assets/Article Image/img2.png'
import Footer from 'components/footer';

const Home = () => {
    return (
        <>
            <Header />
            <MainContainer top>
                <Container dark>
                    <div className='w3-col l1 w3-hide-medium w3-hide-small'>.</div>
                    <div className='w3-col l10 m12 s12 w3-row w3-container w3-padding-64'>
                        <div className='w3-col s12 l6'>
                            <div className='w3-section'>
                                <Heading type='heading1' capitalize>hi, i'm jotham kyeyune a full stack developer</Heading>
                            </div>
                            <div className='w3-panel w3-border-left'>
                                <Body type='bodyheading2'>On this blog i share tips and tricks, frameworks, projects, tutorials, etc. Make sure you subscribe to get the latest updates</Body>
                            </div>
                            <SubscribeSection>
                                <Input placeholder="Enter your email here ..." />
                                <Button>Subscribe</Button>
                            </SubscribeSection>
                        </div>
                        <div className='w3-col s12 l6 w3-center'>
                            <img src={Avatar} style={{height: '100%', width: '100%'}} />
                        </div>
                    </div>
                    <div className='w3-col l1 w3-hide-medium w3-hide-small'>.</div>
                </Container>

                <CategoryList dark={true} title='browse the category'>
                    {
                        [...Array(6).keys()].map((f, index) => <div key={index} className='w3-col l2 m4 s6'>
                            <CategoryCard>
                                <div>
                                    <img src={Avatar} />
                                </div>
                                <div>
                                    <Body type='bodyHeading1'>Javascript</Body>
                                </div>
                            </CategoryCard>
                        </div>)
                    }
                </CategoryList>
                {
                    data.map((f, index) => <CategoryList key={index} dark={false} title={f.categoryName}>
                        {
                            [...Array(4).keys()].map((f, index) => <div key={index} className='w3-col l3 m6 s12'>
                                <ArticleCard className='w3-border w3-border-grey w3-round-medium'>
                                    <div>
                                        <img src={ArticleImg} />
                                    </div>
                                    <div>
                                        <Body type='bodyHeading3'>Javascript</Body>
                                    </div>
                                    <div>
                                        <div>
                                            <img src={Avatar} />
                                        </div>
                                        <div>
                                            <label>Jotham</label>
                                            <label>Jan 10, 2022 - 3 Min Read</label>
                                        </div>
                                    </div>
                                </ArticleCard>
                            </div>)
                        }
                    </CategoryList>)
                }
                <Container className='w3-center w3-padding-24'>
                    <Button>More Articles</Button>
                </Container>
                <Footer />
            </MainContainer>
        </>
    );
}


export default Home;

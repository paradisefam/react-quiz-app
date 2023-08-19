import React from 'react';
import backgroundImage from './assets/images/back.jpg';
import Link from '@mui/material/Link';
import './App.css';
import { Box, Container, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';

export default function Donate() {

    return (
        <Container>
            <Box className='main'>
                <Box textAlign={'center'} pb={3}>
                    <Box id='top-area'>
                        <header>
                            <Container>
                                <Typography sx={{ fontSize: { xs: 16, sm: 120, md: 24 } }}>
                                    <Link href="#" underline="none" color='#fff'>
                                        {'ecryptoG'}
                                    </Link>
                                </Typography>
                            </Container>
                        </header>
                    </Box>
                </Box>

                <Container><img src={backgroundImage} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}></img></Container>

                <Container>
                    <Typography sx={{ fontSize: { xs: 20, sm: 22, md: 24 } }} my={4}>
                        What does ecryptoG do?
                    </Typography>
                    <Typography sx={{ fontSize: { xs: 16, sm: 20, md: 24 } }} textAlign={'center'}>
                        We are an independent comparison community of research companies. We select and promote the best research companies that are looking for new respondents for their research studies. The tasks of the panelists vary from completing (media) surveys, research studies and scanning your groceries!
                        <br /><br />
                        Please note that we only promote external research companies and do not send any research studies ourselves.
                    </Typography>
                </Container>

                <div className='divider'></div>

                <Container>
                    <Typography sx={{ fontSize: { xs: 22, sm: 26, md: 30 } }} fontWeight={'bold'} textAlign={'center'}>
                        Questions & Answers
                    </Typography>
                    <Typography sx={{ fontSize: { xs: 16, sm: 20, md: 24 } }} textAlign={'center'} mb={5}>
                        This is where you can find the questions we see the most!
                    </Typography>
                </Container>

                <footer>
                    <Container>
                        <Box mb={10}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4} className='contact'>
                                    <Box sx={{ display: 'flex' }}>
                                        <Box mb={3}>
                                            <Typography variant='h6' sx={{ marginBottom: 1 }}>
                                                Contact info
                                            </Typography>
                                            <Typography sx={{ fontSize: 13 }} >
                                                Need support or have a question?<br />
                                                Please contact us through Facebook Messenger.
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box sx={{ display: 'flex' }}>
                                            <Box mr={1}>
                                                <HomeIcon sx={{ fontSize: 20 }} />
                                            </Box>
                                            <Box>
                                                <Typography sx={{ fontSize: 13 }}>
                                                    Facebook: <span><Link href="#" underline="hover" color='#ff9'>
                                                        {'SurveyWorld'}
                                                    </Link></span>
                                                </Typography>

                                            </Box>
                                        </Box>
                                        <Box sx={{ display: 'flex' }}>
                                            <Box mr={1}>
                                                <FacebookIcon sx={{ fontSize: 20 }} />
                                            </Box>
                                            <Box>
                                                <Typography sx={{ fontSize: 13 }}>
                                                    Messenger: <span><Link href="#" underline="hover" color='#ff9'>
                                                        {'@SurveyWorld'}
                                                    </Link></span>
                                                </Typography>

                                            </Box>
                                        </Box>
                                        <Box sx={{ display: 'flex' }}>
                                            <Box mr={1}>
                                                <MailIcon sx={{ fontSize: 20 }} />
                                            </Box>
                                            <Box>
                                                <Typography sx={{ fontSize: 13 }}>
                                                    Email: <span><Link href="#" underline="hover" color='#ff9'>
                                                        {'info@surveyworld.me'}
                                                    </Link></span>
                                                </Typography>

                                            </Box>
                                        </Box>
                                    </Box>

                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                    <Box style={{ backgroundColor: '#252525', width: '100%', height: '50px', display: 'flex', alignItems: 'center' }}>
                        <Container>
                            <Box></Box>
                            <Typography sx={{ fontSize: 13 }}>
                                Copyright © ecryptoG
                                <span style={{ marginLeft: '30px' }}><Link href="#" underline="hover" color='#808080'>
                                    {'Privacy Policy'}
                                </Link></span>
                            </Typography>

                        </Container>
                    </Box>
                </footer>
            </Box>
        </Container>

    );
}

import React, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Link from '@mui/material/Link';
// import SendIcon from '@mui/icons-material/Send';
import './App.css';
import { Box, Container, Grid, Typography } from '@mui/material';
import backgroundImage from './assets/images/back.jpg';
import QRImage from './assets/images/QR.png';
import HelpIcon from '@mui/icons-material/Help';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import mailchimp from '@mailchimp/mailchimp_marketing';
// import mailchimp from 'mailchimp-api-v3';
// import axios from 'axios';

export default function App() {

  const [quizs, setQuizs] = useState([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  // const [email, setEmail] = useState('');
  // const [isValidEmail, setIsValidEmail] = useState(true);

  // const apiKey = '38676c6632efac0519daee4dacb2a6c4-us2';
  // const listId = '25a87fb40b';
  // const serverPrefix = 'us2';

  // mailchimp.setConfig({
  //   apiKey: apiKey,
  //   server: serverPrefix,
  // });


  useEffect(() => {
    fetch('quiz.json')
      .then(res => res.json())
      .then(data => setQuizs(data))
  }, []);

  const handleNextButtonClick = () => {
    if (currentQuizIndex < quizs.length) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    }
  };
  const handleBackButtonClick = () => {
    if (currentQuizIndex > 0) {
      setCurrentQuizIndex(currentQuizIndex - 1);
    }
  };
  const [share, setShare] = React.useState(false);
  const [donate, setDonate] = React.useState(false);


  const handleClickShare = () => {
    setShare(true);
  };
  const handleClickDonate = () => {
    setDonate(true);
  };

  const handleClose = () => {
    setShare(false);
    setDonate(false);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(email);
  // };

  // const validateEmail = (email) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  // const subscribeEmail = async () => {
  //   try {
  //     if (!validateEmail(email)) {
  //       setIsValidEmail(false);
  //       return;
  //     }

  //     const response = await mailchimp.lists.addListMember(listId, {
  //       email_address: email,
  //       status: 'subscribed',
  //     });

  //     if (response.statusCode === 200) {
  //       console.log('Email subscribed successfully!');
  //     } else {
  //       console.error('Failed to subscribe email:', response);
  //     }
  //     // console.log({ email });
  //   } catch (error) {
  //     console.error('Failed to subscribe email:', error);
  //   }
  // };

  return (
    <div className='main'>
      <section id='top-area'>
        <header>
          <Container>
            <Typography sx={{ fontSize: { xs: 18, sm: 20, md: 22 } }}>
              <Link href="#" underline="none" color='#fff'>
                {'ecryptoG'}
              </Link>
            </Typography>
          </Container>
        </header>
        <Container>
          <Typography variant='h3' textAlign={'center'} color={"white"} fontWeight={"bold"} my={4}
            sx={{ fontSize: { xs: 30, sm: 34, md: 38 } }}>
            EARN REWORDS WITH ECRYPTOG ROUNDTABLE!
          </Typography>
          <Typography variant='h5' textAlign={'center'} color={"white"} my={4}
            sx={{ fontSize: { xs: 18, sm: 22, md: 26 } }}>
            Receive Rewards, Giftcards and support charities!
          </Typography>
        </Container>
      </section>
      <Container>
        <Box className='quizbox' py={4}>
          {quizs.length > 0 && currentQuizIndex <= quizs.length && (

            <div className='quiz'>
              {currentQuizIndex !== 3 ? (
                <>
                  <Typography variant='h4' my={3}
                    sx={{ fontSize: { xs: 24, sm: 28, md: 32 } }}>
                    Select your favourite
                  </Typography>
                  <Typography variant='h6'
                    sx={{ fontSize: { xs: 12, sm: 16, md: 18 } }}>
                    PROGRESS ({currentQuizIndex}/{quizs.length})
                  </Typography>
                  <ProgressBar currentQuizIndex={currentQuizIndex} totalQuizzes={quizs.length} />
                  <div className='shadow'></div>

                  <div>
                    <Typography variant='h5' mb={2}
                      sx={{ fontSize: { xs: 20, sm: 24, md: 28 } }}>
                      {quizs[currentQuizIndex].question}
                    </Typography>
                    <RadioButtonsGroup options={quizs[currentQuizIndex].options} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-around' }} mt={4}>
                      <Button onClick={handleBackButtonClick} variant='contained'>
                        Back
                      </Button>
                      <Button onClick={handleNextButtonClick} variant='contained'>
                        Next
                      </Button>
                    </Box>
                  </div>
                </>

              ) : (
                <Box className='user-info'>
                  <Box className='donate-box'>

                    <Container><img src={backgroundImage} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }} alt='background'></img></Container>
                    <Container>
                      <Typography variant='h5' sx={{ fontSize: { xs: 18, sm: 22, md: 26 }, color: '#03bafc' }} mt={3}>Congratulations!</Typography>
                      <Typography variant='h4' my={3} sx={{ fontSize: { xs: 18, sm: 22, md: 26 } }}>
                        Be THE Voice In Your Community
                      </Typography>
                      <Typography variant='h4' my={3} sx={{ fontSize: { xs: 14, sm: 16, md: 20 } }}>
                        Youth Development • Nationwide
                      </Typography>
                      <div className='shadow'></div>
                      <Box mt={3} sx={{ display: 'flex', justifyContent: 'space-between', height: '50px' }}>
                        <Button variant="contained" sx={{ width: '49%', backgroundColor: '#03bafc' }} onClick={handleClickShare}>
                          Share
                        </Button>
                        <Dialog
                          open={share}
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <Container>
                            <DialogTitle id="alert-dialog-title" sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }}>
                              {"Share to..."}
                            </DialogTitle>
                            <div className='divider' style={{ margin: 0 }}></div>
                            <Box>
                              <DialogContent>
                                <DialogContentText sx={{ textAlign: 'center' }}>
                                  <Grid container spacing={4} >
                                    <Grid item xs={3} md={3}>
                                      <Link href="https://www.facebook.com/" underline="none">
                                        <Box>
                                          <FacebookIcon sx={{ fontSize: { xs: 32, sm: 36, md: 60 }, color: '#007bff' }} />
                                        </Box>
                                      </Link>
                                    </Grid>
                                    <Grid item xs={3} md={3}>
                                      <Link href="https://www.twitter.com/" underline="none">
                                        <Box>
                                          <TwitterIcon sx={{ fontSize: { xs: 32, sm: 36, md: 60 }, color: '#17a2b8' }} />
                                        </Box>
                                      </Link>
                                    </Grid>
                                    <Grid item xs={3} md={3}>
                                      <Link href="https://mail.google.com/" underline="none">
                                        <Box>
                                          <MailIcon sx={{ fontSize: { xs: 32, sm: 36, md: 60 }, color: '#1DA4EC' }} />
                                        </Box>
                                      </Link>
                                    </Grid>
                                    <Grid item xs={3} md={3}>
                                      <Link href="https://www.whatsapp.com/" underline="none">
                                        <Box>
                                          <WhatsAppIcon sx={{ fontSize: { xs: 32, sm: 36, md: 60 }, color: '#1DA4EC' }} />
                                        </Box>
                                      </Link>
                                    </Grid>
                                  </Grid>
                              </DialogContent>
                            </Box>

                            <DialogActions>
                              <Button onClick={handleClose}>Close</Button>
                            </DialogActions>
                          </Container>

                        </Dialog>

                        <Button variant="contained" sx={{ width: '49%', backgroundColor: '#03bafc' }} onClick={handleClickDonate}>
                          Donate
                        </Button>
                        <Dialog
                          open={donate}
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <Container>

                            <Box>
                              <DialogContent>
                                <img src={QRImage} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }} alt='QRImage'></img>
                              </DialogContent>
                            </Box>

                            <DialogActions>
                              <Button onClick={handleClose}>Close</Button>
                            </DialogActions>
                          </Container>

                        </Dialog>
                      </Box>
                    </Container>

                  </Box>

                  {/* <Typography variant='h5' sx={{ fontSize: { xs: 18, sm: 22, md: 26 } }}>Congratulations!</Typography>
                  <Typography variant='h6' sx={{ fontSize: { xs: 14, sm: 18, md: 22 } }}>Please enter your information</Typography>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Email Address"
                      type="email"
                      style={{ width: '60%' }}
                      variant="standard"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <Stack mt={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Button variant="contained" endIcon={<SendIcon />} sx={{ width: '60%' }} type='submit'>
                        Send
                      </Button>
                    </Stack>
                  </form> */}

                  {/* {!isValidEmail && (
                    <Box style={{ color: 'red' }} sx={{ fontSize: { xs: 10, sm: 12, md: 14 } }}>Invalid Email! Please enter the correct Email..</Box>
                  )} */}

                </Box>
              )}

            </div>
          )}
        </Box>
      </Container>
      <div className='divider'></div>
      {currentQuizIndex !== 3 ? (
        <>
          <Container>
            <Typography sx={{ fontSize: { xs: 22, sm: 26, md: 30 } }} fontWeight={'bold'} textAlign={'center'} my={4}>
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

          <Container>
            <Box mb={10}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ display: 'flex' }}>
                    <Box mr={2}>
                      <HelpIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />
                    </Box>
                    <Box>
                      <Typography variant='h6' sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }} mb={2} fontWeight={'bold'}>
                        I'm having trouble signing up?
                      </Typography>
                      <Typography sx={{ fontSize: { xs: 12, sm: 14, md: 16 } }}>
                        Please contact us through Facebook private message along with the name of the research company. We will try our best to guide you through the signup process.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ display: 'flex' }}>
                    <Box mr={2}>
                      <HelpIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />
                    </Box>
                    <Box>
                      <Typography variant='h6' sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }} mb={2} fontWeight={'bold'}>
                        There seems to be a problem with my account?
                      </Typography>
                      <Typography sx={{ fontSize: { xs: 12, sm: 14, md: 16 } }}>
                        Unfortunately the amount of help we can offer here is limited. Since we're just the comparison website we have no access to your account. We can however guide you to the correct customer service.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ display: 'flex' }}>
                    <Box mr={2}>
                      <HelpIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />
                    </Box>
                    <Box>
                      <Typography variant='h6' sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }} mb={2} fontWeight={'bold'}>
                        I received an error with no more available spots.
                      </Typography>
                      <Typography sx={{ fontSize: { xs: 12, sm: 14, md: 16 } }}>
                        New spots fill up really quickly when they open. We don't want you to miss out on joining a research company. Please feel free to send us a message so we can try to find you a good alternative.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </>

      ) : (
        <Container textAlign={'left'} sx={{ fontSize: { xs: 16, sm: 20, md: 22 } }}>
          <Typography fontWeight={'bold'} my={3}>
            About
          </Typography>
          <Typography>
            Kids’ Declining Mental Health Is the ‘Crisis of Our Time,’ says Surgeon General Dr. Vivek Murthy, and that "we all have a role to play in supporting youth mental health and creating a world where young people thrive."
            <br /><br />
            We couldn't agree more, which is why we’re so passionate about what we're doing at Be THE Voice! Since its inception in 2015, our innovative platform has been teaching students HOW to support their peers, to be a friend to those who are struggling, and to be the "voice" of inclusion by doing what is right – not what is easy.  We provide three age-appropriate levels with peer-to-peer videos and activities designed to foster new friendships as students work together to create a more compassionate school atmosphere.
            <br /><br />
            And, Be THE Voice benefits teachers too! Data we've gathered from the 2022-23 program shows a significant decrease in both in-school and out-of-school suspensions in the Elementary and Middle-School programs, allowing classrooms to run more efficiently!
            <br /><br />
            Be THE Voice can be implemented anywhere in the nation so reach out to <span><Link href="#" underline="hover" color='#007bff'>
              {'admin@be-the-voice.org'}
            </Link></span> to learn more! Deadline to enroll for the 23-24 program cycle is 6/30/23.
          </Typography>
          <Box>
            <Typography fontWeight={'bold'} mt={3}>
              Non Profit
            </Typography>
            <Typography fontWeight={'bold'} sx={{ fontSize: { xs: 14, sm: 14, md: 14 } }}>
              <Link href="#" underline="none" sx={{ color: '#57CCF3', '&:hover': { color: '#007bff' } }}>
                {'@Be THE Voice'}
              </Link>
            </Typography>
          </Box>
          <Typography fontWeight={'bold'} mt={3}>
            Causes
          </Typography>
          <Box sx={{ display: 'flex' }} >
            <Typography fontWeight={'bold'} sx={{ fontSize: { xs: 14, sm: 14, md: 14 } }}>
              <Link href="#" underline="none" sx={{ color: '#57CCF3', '&:hover': { color: '#007bff' } }}>
                {'#Children & Family Services, '}
              </Link>
              <Link href="#" underline="none" sx={{ color: '#57CCF3', '&:hover': { color: '#007bff' } }}>
                {'#Community Development, '}
              </Link>
              <Link href="#" underline="none" sx={{ color: '#57CCF3', '&:hover': { color: '#007bff' } }}>
                {'#Education, '}
              </Link>
              <Link href="#" underline="none" sx={{ color: '#57CCF3', '&:hover': { color: '#007bff' } }}>
                {'#Health & Wellness, '}
              </Link>
              <Link href="#" underline="none" sx={{ color: '#57CCF3', '&:hover': { color: '#007bff' } }}>
                {'#Youth'}
              </Link>
            </Typography>
          </Box>
          <Box style={{ display: 'flex', alignItems: 'center' }} my={2}>
            <Box mr={1}>
              <CalendarMonthIcon sx={{ fontSize: 20 }} />
            </Box>
            <Box>
              <Typography sx={{ fontSize: { xs: 14, sm: 14, md: 14 } }}>
                Start: June 1st, 2023 | End: June 30th, 2024
              </Typography>
            </Box>
          </Box>
          <Box mb={3}>
            <Typography textAlign={'center'} color={"#6c757d"} sx={{ fontSize: { xs: 14, sm: 14, md: 14 } }}>This campaign hasn’t shared any updates yet. Check back soon!</Typography>
          </Box>
        </Container>
      )
      }
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
            <Typography sx={{ fontSize: 13 }}>
              Copyright © ecryptoG
              <span style={{ marginLeft: '30px' }}><Link href="#" underline="hover" color='#808080'>
                {'Privacy Policy'}
              </Link></span>
            </Typography>

          </Container>
        </Box>

      </footer>
    </div >
  );
}

function RadioButtonsGroup({ options }) {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

const ProgressBar = ({ currentQuizIndex, totalQuizzes }) => {
  const progressBarWidth = `${(currentQuizIndex / totalQuizzes) * 100}%`;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: progressBarWidth }}></div>
    </div>
  );
};

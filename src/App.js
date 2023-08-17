import React, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import SendIcon from '@mui/icons-material/Send';
import './App.css';
import { Box, Container, Grid, Typography } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import FacebookIcon from '@mui/icons-material/Facebook';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';

export default function App() {

  const [quizs, setQuizs] = useState([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);


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

  return (
    <div className='main'>
      <section id='top-area'>
        <header>
          <Container>
            <Typography sx={{ fontSize: 22 }}>
              <Link href="#" underline="none" color='#fff'>
                {'ecryptoG'}
              </Link>
            </Typography>
          </Container>
        </header>
        <Container>
          <Typography variant='h3' textAlign={'center'} color={"white"} fontWeight={"bold"} my={4} sx={{ fontSize: 44 }}>
            EARN REWORDS WITH ECRYPTOG ROUNDTABLE!
          </Typography>
          <Typography variant='h5' textAlign={'center'} color={"white"} my={4}>
            Receive Rewards, Giftcards and support charities!
          </Typography>
        </Container>
      </section>
      <Container>
        <Box className='quizbox' py={4}>
          {quizs.length > 0 && currentQuizIndex <= quizs.length && (
            <div className='quiz'>
              <Typography variant='h4' my={3}>
                Select your favourite
              </Typography>
              <Typography variant='h6'>
                PROGRESS ({currentQuizIndex}/{quizs.length})
              </Typography>
              <ProgressBar currentQuizIndex={currentQuizIndex} totalQuizzes={quizs.length} />
              <div className='shadow'></div>
              {currentQuizIndex !== 3 ? (
                <div>
                  <Typography variant='h5' mb={2}>{quizs[currentQuizIndex].question}</Typography>
                  <RadioButtonsGroup options={quizs[currentQuizIndex].options} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-around' }} mt={4}>
                    <Button onClick={handleBackButtonClick} variant='contained' className='back-button'>
                      Back
                    </Button>
                    <Button onClick={handleNextButtonClick} variant='contained' className='next-button'>
                      Next
                    </Button>
                  </Box>
                </div>
              ) : (
                <div className='user-info'>
                  <Typography variant='h5'>Congratulations!</Typography>
                  <Typography variant='h6'>Please enter your information</Typography>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    style={{ width: '60%' }}
                    variant="standard"
                  />
                  <Stack mt={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button variant="contained" endIcon={<SendIcon />} sx={{ width: '60%' }} >
                      Send
                    </Button>
                  </Stack>
                </div>
              )}

            </div>
          )}
        </Box>
      </Container>
      <div className='divider'></div>
      <Container>
        <Typography style={{ fontSize: '32px' }} fontWeight={'bold'} textAlign={'center'}>
          What does ecryptoG do?
        </Typography>
        <Typography style={{ fontSize: '24px' }} textAlign={'center'}>
          We are an independent comparison community of research companies. We select and promote the best research companies that are looking for new respondents for their research studies. The tasks of the panelists vary from completing (media) surveys, research studies and scanning your groceries!
          <br /><br />
          Please note that we only promote external research companies and do not send any research studies ourselves.
        </Typography>
      </Container>

      <div className='divider'></div>

      <Container>
        <Typography style={{ fontSize: '32px' }} fontWeight={'bold'} textAlign={'center'}>
          Questions & Answers
        </Typography>
        <Typography style={{ fontSize: '21px' }} textAlign={'center'} my={3}>
          This is where you can find the questions we see the most!
        </Typography>
      </Container>

      <Container>
        <Box mb={10}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex' }}>
                <Box mr={2}>
                  <HelpIcon sx={{ fontSize: 40 }} />
                </Box>
                <Box>
                  <Typography variant='h6' sx={{ marginBottom: 1 }}>
                    I'm having trouble signing up?
                  </Typography>
                  <Typography>
                    Please contact us through Facebook private message along with the name of the research company. We will try our best to guide you through the signup process.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex' }}>
                <Box mr={2}>
                  <HelpIcon sx={{ fontSize: 40 }} />
                </Box>
                <Box>
                  <Typography variant='h6' sx={{ marginBottom: 1 }}>
                    There seems to be a problem with my account?
                  </Typography>
                  <Typography>
                    Unfortunately the amount of help we can offer here is limited. Since we're just the comparison website we have no access to your account. We can however guide you to the correct customer service.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex' }}>
                <Box mr={2}>
                  <HelpIcon sx={{ fontSize: 40 }} />
                </Box>
                <Box>
                  <Typography variant='h6' sx={{ marginBottom: 1 }}>
                    I received an error with no more available spots.
                  </Typography>
                  <Typography>
                    New spots fill up really quickly when they open. We don't want you to miss out on joining a research company. Please feel free to send us a message so we can try to find you a good alternative.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
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
            <Typography sx={{ fontSize: 13 }}>
              Copyright© SurveyWorld
              <span style={{ marginLeft: '30px' }}><Link href="#" underline="hover" color='#808080'>
                {'Privacy Policy'}
              </Link></span>
            </Typography>

          </Container>
        </Box>

      </footer>
    </div>
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

import React from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BG from '../../resources/hero-background.jpg';

const useStyles = makeStyles({
  container: {
    backgroundImage: `linear-gradient(to right,rgba(255, 255, 255, 0.9) 0% 50%,rgba(255, 255, 255, 0.5)), url(${BG})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    padding: '1em 5em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  contentContainer: {
    width: '50em',
    maxWidth: '100%',
  },

  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  subtitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

interface HeroProps {}

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <Typography color='primary' variant='h2' className={classes.subtitle}>
          Make your day
        </Typography>
        <Typography color='primary' variant='h1' className={classes.title}>
          With Delivery
        </Typography>
        <Box mt={2}>
          <Typography variant='h4' color='primary'>
            Give yourself something to look forward to with Delivery today on
            all your Chipotle faves.
          </Typography>
        </Box>
        <Box mt={5}>
          <Button size='large' color='primary' variant='contained'>
            Order Now
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Hero;

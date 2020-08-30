import React from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    backgroundImage:
      "linear-gradient(to top,rgba(255, 255, 255, 0.5) 0% 70%,rgba(255, 255, 255, 0.8)), url('https://www.chipotle.com/content/dam/poc/order/images/promo-banners/fdm/Vertical-Kitchen-Animation-3c.gif')",
    backgroundSize: 'cover',
    minHeight: '100vh',
    padding: '1em 5em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {},
  contentContainer: {
    width: '50em',
    maxWidth: '100%',
  },
});

interface HeroProps {}
const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <Typography color='primary' variant='h1' className={classes.title}>
          Make your day with delivery
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

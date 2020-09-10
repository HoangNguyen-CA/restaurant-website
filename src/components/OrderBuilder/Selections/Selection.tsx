import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core/';
import { styled, useTheme } from '@material-ui/core/styles';

const StyledImage = styled('img')({
  display: 'block',
  width: '100%',
});

const StyledCard = styled(Card)({
  position: 'relative',
});

const Overlay = styled(({ show, color, ...other }) => <div {...other}></div>)({
  position: 'absolute',
  top: '0',
  right: '0',
  left: '0',
  bottom: '0',
  zIndex: 1,
  backgroundColor: (props: { show: boolean; color: string }) => props.color,
  opacity: (props: { show: boolean; color: string }) =>
    props.show ? '0.3' : '0',
  cursor: 'pointer',
});

type Props<T> = {
  name: string;
  image: string;
  id: T;
};

const Selection = <T extends {}>({ name, image, id }: Props<T>) => {
  const theme = useTheme();
  const [overlay, setOverlay] = useState(false);
  const handleMouseEnter = (e: React.MouseEvent) => {
    setOverlay(true);
  };

  const handleMouseExit = (e: React.MouseEvent) => {
    setOverlay(false);
  };
  return (
    <Grid item xs={3}>
      <StyledCard
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
      >
        <CardContent>
          <Typography align='center' variant='h6'>
            {name}
          </Typography>
        </CardContent>
        <StyledImage src={image} alt=''></StyledImage>
        <Overlay show={overlay} color={theme.palette.primary.light}></Overlay>
      </StyledCard>
    </Grid>
  );
};

export default Selection;

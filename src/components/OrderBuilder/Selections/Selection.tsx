import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core/';
import { styled, useTheme } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const StyledImage = styled('img')({
  display: 'block',
  width: '100%',
});

const StyledCard = styled(Card)({
  position: 'relative',
});

type overlayProps = { noBackground?: boolean; show: boolean; color: string };
const Overlay = styled(({ show, color, noBackground, ...other }) => (
  <div {...other}></div>
))({
  position: 'absolute',
  padding: '1em',
  top: '0',
  right: '0',
  left: '0',
  bottom: '0',
  zIndex: 1,
  backgroundColor: (props: overlayProps) =>
    props.noBackground ? 'rgba(0,0,0,0)' : props.color,
  opacity: (props: overlayProps) =>
    props.show ? (props.noBackground ? '1' : '0.3') : '0',
  cursor: 'pointer',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

const StyledCheckIcon = styled(CheckCircleIcon)({
  filter: 'drop-shadow(1px 1px 8px rgba(255, 255, 255, 0.7))',
});

type Props<T> = {
  name: string;
  image: string;
  id: T;
  select: (e: React.MouseEvent) => void;
  selected: boolean;
};

const Selection = <T extends {}>({
  name,
  image,
  id,
  select,
  selected,
}: Props<T>) => {
  const theme = useTheme();
  const [overlay, setOverlay] = useState(false);
  const handleMouseEnter = (e: React.MouseEvent) => {
    setOverlay(true);
  };

  const handleMouseExit = (e: React.MouseEvent) => {
    setOverlay(false);
  };
  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <StyledCard
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
        onClick={select}
      >
        <CardContent>
          <Typography align='center' variant='h6'>
            {name}
          </Typography>
        </CardContent>
        <StyledImage src={image} alt=''></StyledImage>
        <Overlay show={overlay} color={theme.palette.primary.light}></Overlay>
        <Overlay
          show={selected}
          color={theme.palette.primary.light}
          noBackground
        >
          {selected ? (
            <StyledCheckIcon color='primary' fontSize='large'></StyledCheckIcon>
          ) : null}
        </Overlay>
      </StyledCard>
    </Grid>
  );
};

export default Selection;

import React from 'react';
import Selection from '../Selections/Selection';

import { Container, Typography, Box, Grid } from '@material-ui/core';

type Props<T> = {
  title: string;
  ingredients: {
    [name: string]: { image: string; id: T };
  };
};

const Selections = <T extends {}>({ ingredients, title }: Props<T>) => {
  let content = [];
  for (let i in ingredients) {
    let id = ingredients[i].id;
    content.push(
      <Selection<T> image={ingredients[i].image} id={id} name={i}></Selection>
    );
  }
  return (
    <Container>
      <Box my={3}>
        <Typography variant='h4'>{title}</Typography>
      </Box>
      <Grid
        direction='row'
        spacing={3}
        justify='flex-start'
        alignItems='center'
        container
      >
        {content}
      </Grid>
    </Container>
  );
};

export default Selections;

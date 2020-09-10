import React from 'react';
import Selection from '../Selections/Selection';

import { Container, Typography, Box, Grid } from '@material-ui/core';

/*

TODO: Ingredients has any type, find a way for it to be type enforced if possible. Types are hacked together but should have no errors.

*/

type Props<T> = {
  title: string;
  ingredients: any;
  setSelected: (id: T) => void;
  selected: any;
};

const Selections = <T extends {}>({
  ingredients,
  title,
  setSelected,
  selected,
}: Props<T>) => {
  let content = [];
  for (let i in ingredients) {
    let ing = ingredients[i];
    content.push(
      <Selection<T>
        image={ing.image}
        name={ing.name}
        id={(i as unknown) as T}
        select={(e: React.MouseEvent) => setSelected((i as unknown) as T)}
        selected={selected[i]}
      ></Selection>
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

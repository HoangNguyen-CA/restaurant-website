import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core/';
import { styled } from '@material-ui/core/styles';

const StyledCard = styled(Card)({});

type Props<T> = {
  name: string;
  image: string;
  id: T;
};

const Selection = <T extends {}>({ name, image, id }: Props<T>) => {
  return (
    <Grid item xs={3}>
      <Card>
        <CardContent>
          <Typography>{name}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Selection;

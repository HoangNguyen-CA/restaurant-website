import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core/';
import { styled } from '@material-ui/core/styles';

type Props<T> = {
  name: string;
  image: string;
  id: T;
};

const Selection = <T extends {}>({ name, image, id }: Props<T>) => {
  return (
    <Card>
      <CardContent>
        <Typography>{name}</Typography>
      </CardContent>
    </Card>
  );
};

export default Selection;

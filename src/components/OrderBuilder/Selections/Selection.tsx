import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core/';
import { styled } from '@material-ui/core/styles';

type Props = {
  name: string;
  image: string;
};

const Selection = ({ name, image }: Props) => {
  return (
    <Card>
      <CardContent>
        <Typography>{name}</Typography>
      </CardContent>
    </Card>
  );
};

export default Selection;

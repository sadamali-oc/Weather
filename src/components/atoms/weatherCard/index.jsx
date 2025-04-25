import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';

const WeatherCard = ({ children, title }) => (
  <Card sx={{ maxWidth: 1000, margin: 2 }}>
    {title && <CardHeader title={title} />}
    <CardContent>{children}</CardContent>
  </Card>
);

export default WeatherCard;

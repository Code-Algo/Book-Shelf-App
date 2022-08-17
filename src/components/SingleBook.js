import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345, mx: 'auto'}}>
      <CardMedia
        component="img"
        height="140"
        image="https://cdn.vox-cdn.com/thumbor/RWW3gFgz1zWHRBCNgG6XHTWnvWs=/0x0:1089x1600/1200x800/filters:focal(458x713:632x887)/cdn.vox-cdn.com/uploads/chorus_image/image/62788940/Catcher-in-the-rye-2.0.jpg"
        alt="Rye"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Catcher in the Rye
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Catcher in the Rye, novel by J.D. Salinger published in 1951. The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
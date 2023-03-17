import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';


function EntryCard() {
  return (
    <Card sx={{marginBottom: 1}}>
      <CardActionArea>
        <CardContent>
          <Typography >Esto es la descripcion</Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'end', paddingRight: 2}}>
          <Typography variant='body2'>hace 30min</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

export default EntryCard;
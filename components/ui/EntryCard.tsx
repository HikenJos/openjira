import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { Entry } from '../../interfaces';

interface Props {
  entry: Entry
}

function EntryCard({entry}: Props) {
  return (
    <Card sx={{marginBottom: 1}}>
      <CardActionArea>
        <CardContent>
          <Typography>{entry.description}</Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'end', paddingRight: 2}}>
          <Typography variant='body2'>hace 30min</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

export default EntryCard;
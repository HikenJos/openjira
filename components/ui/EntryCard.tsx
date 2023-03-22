import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { useContext } from 'react';
import { UIContext } from '../../context';
import { Entry } from '../../interfaces';

interface Props {
  entry: Entry
}

function EntryCard({entry}: Props) {

  const { startDragging, endDragging } = useContext(UIContext);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', entry._id);
    startDragging();
  };

  const onDragEnd= (e: React.DragEvent<HTMLDivElement>) => {
    endDragging();
  };

  return (
    <Card 
      sx={{marginBottom: 1}} 
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}>
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
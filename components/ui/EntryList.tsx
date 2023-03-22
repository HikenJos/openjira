import { List, Paper } from '@mui/material';
import { Fragment, useContext, useMemo } from 'react';
import { UIContext } from '../../context';
import { EntriesContext } from '../../context/entries';
import { EntryStatus } from '../../interfaces';
import EntryCard from './EntryCard';
import styles from './EntryList.module.css';

interface Props {
  status: EntryStatus
}

function EntryList({status}: Props) {
  const {entries} = useContext(EntriesContext);
  const {isDragging} = useContext(UIContext);

  const entriesByStatus = useMemo(() => entries.filter( entry => entry.status === status) , [entries]);

  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDropEntry = (e: React.DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData('text');
    
  };

  return (
    <div 
      onDrop={onDropEntry} 
      onDragOver={allowDrop} 
      className={`${isDragging && styles['dragging']}`}>
      <Paper sx={{
        height: 'calc(100vh - 180px)', 
        overflow: 'scroll', 
        backgroundColor: 'transparent',
        padding: '1px 5px'}}>
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all 0.3s'}}>
          {
            entriesByStatus.map(entry => (
              <Fragment key={entry._id}>
                <EntryCard entry={entry}/>
              </Fragment>
            ))
          }
        </List>
      </Paper>
    </div>
  );
}

export default EntryList;
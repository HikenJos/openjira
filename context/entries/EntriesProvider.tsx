import { useReducer } from 'react';
import { Entry } from '../../interfaces/entriy';
import { EntriesContext } from './EntriesContext';
import { EntriesReducer } from './EntriesReducer';
import { v4 as uuidv4} from 'uuid';


export interface EntriesState {
  entries: Entry[]
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id:  uuidv4(),
      description: 'Pendiente: Lorem Ipsum',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      _id:  uuidv4(),
      description: 'En Progreso - Lorem Ipsum2',
      status: 'in-progress',
      createdAt: Date.now()
    },
    {
      _id:  uuidv4(),
      description: 'Finalizada: Lorem Ipsum3',
      status: 'finished',
      createdAt: Date.now()
    }
  ]
};

function EntriesProvider( {children}: Props ) {
  const [state, dispatch] = useReducer(EntriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      status: 'pending',
      createdAt: Date.now()
    };

    dispatch({type: 'Entry - Add-Entry', payload: newEntry});
  };

  const updateEntry = (entry: Entry) => {
    dispatch({type: 'Entry Entry-Updated', payload: entry});
  };

  return (
    <EntriesContext.Provider value={{
      ...state,
      addNewEntry,
      updateEntry
    }}>
      {children}
    </EntriesContext.Provider>
  );
}

export default EntriesProvider;
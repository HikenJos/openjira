import { EntriesState } from './EntriesProvider';
import { Entry } from '../../interfaces';

type EntriesDispatchType = 
| { type: 'Entry - Add-Entry', payload: Entry }
| { type: 'Entry Entry-Updated', payload: Entry }

export const EntriesReducer = ( state: EntriesState, dispatch: EntriesDispatchType): EntriesState => {

  switch (dispatch.type) {
  case 'Entry - Add-Entry':
    return {
      ...state,
      entries: [...state.entries, dispatch.payload]
    };

  case 'Entry Entry-Updated':
    return {
      ...state,
      entries: state.entries.map( entry => {
        if(entry._id === dispatch.payload._id){
          entry.status = dispatch.payload.status;
          entry.description = dispatch.payload.description;
        }
        return entry;
      })
    };

  default:
    return state;
  }
};
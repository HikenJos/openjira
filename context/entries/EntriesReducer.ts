import { EntriesState } from './EntriesProvider';
import { Entry } from '../../interfaces';

type EntriesDispatchType = 
| { type: 'Entry - Add-Entry', payload: Entry }
| { type: 'Entries - Holi' }

export const EntriesReducer = ( state: EntriesState, dispatch: EntriesDispatchType): EntriesState => {

  switch (dispatch.type) {
  case 'Entry - Add-Entry':
    return {
      ...state,
      entries: [...state.entries, dispatch.payload]
    };

  default:
    return state;
  }
};
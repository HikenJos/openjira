import { EntriesState } from './EntriesProvider';

type EntriesDispatchType = 
| { type: 'Entries - UI' }
| { type: 'Entries - Holi' }

export const EntriesReducer = ( state: EntriesState, dispatch: EntriesDispatchType): EntriesState => {

  switch (dispatch.type) {
  case 'Entries - UI':
    return {
      ...state,
    };

  default:
    return state;
  }
};
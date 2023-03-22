import { UIState } from './UIProvider';

type UIDispatchType = 
| { type: 'UI - Open Sidebar' }
| { type: 'UI - Close Sidebar' }
| { type: 'UI - Set isAddingEntry', payload: boolean}
| { type: 'UI - Start Dragging' }
| { type: 'UI - End Dragging'}

export const uiReducer = ( state: UIState, dispatch: UIDispatchType): UIState => {

  switch (dispatch.type) {
  case 'UI - Open Sidebar':
    return {
      ...state,
      sideMenuOpen: true
    };

  case 'UI - Close Sidebar':
    return {
      ...state,
      sideMenuOpen: false
    };

  case 'UI - Set isAddingEntry':
    return {
      ...state,
      isAdding: dispatch.payload
    };
  
  case 'UI - Start Dragging':
    return {
      ...state,
      isDragging: true
    };

  case 'UI - End Dragging':
    return {
      ...state,
      isDragging: false
    };

  default:
    return state;
  }
};
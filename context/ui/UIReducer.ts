import { UIState } from './UIProvider';

type UIDispatchType = 
| { type: 'UI - Open Sidebar' }
| { type: 'UI - Close Sidebar' }

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

  default:
    return state;
  }
};
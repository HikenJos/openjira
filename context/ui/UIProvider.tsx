import { useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './UIReducer';

export interface UIState {
  sideMenuOpen: boolean
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false
};

function UIProvider( {children}: Props ) {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({type: 'UI - Open Sidebar'});
  };

  const closeSideMenu = () => {
    dispatch({type: 'UI - Close Sidebar'});
  };
  return (
    <UIContext.Provider value={{
      ...state,
      //Methods
      openSideMenu,
      closeSideMenu
    }}>
      {children}
    </UIContext.Provider>
  );
}

export default UIProvider;
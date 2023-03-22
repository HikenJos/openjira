import { useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './UIReducer';

export interface UIState {
  sideMenuOpen: boolean,
  isAdding: boolean
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAdding: false
};

function UIProvider( {children}: Props ) {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({type: 'UI - Open Sidebar'});
  };

  const closeSideMenu = () => {
    dispatch({type: 'UI - Close Sidebar'});
  };

  const setIsAdding = (state: boolean) => {
    dispatch({type: 'UI - Set isAddingEntry', payload: state});
  };
  
  return (
    <UIContext.Provider value={{
      ...state,
      //Methods
      openSideMenu,
      closeSideMenu,
      setIsAdding
    }}>
      {children}
    </UIContext.Provider>
  );
}

export default UIProvider;
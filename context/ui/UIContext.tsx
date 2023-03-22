import { createContext } from 'react';


export interface ContextProps {
  sideMenuOpen: boolean,
  openSideMenu: () => void,
  closeSideMenu: () => void,
  isAdding: boolean,
  setIsAdding: (state: boolean) => void
}

export const UIContext = createContext({} as ContextProps );
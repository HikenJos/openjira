import { createContext } from 'react';


export interface ContextProps {
  sideMenuOpen: boolean,
  isAdding: boolean,
  isDragging: boolean
  openSideMenu: () => void,
  closeSideMenu: () => void,
  setIsAdding: (state: boolean) => void,
  startDragging: () => void,
  endDragging: () => void,
}

export const UIContext = createContext({} as ContextProps );
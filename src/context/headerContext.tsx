'use client';

import { createContext, useContext, useState } from 'react';
import { HeaderContextType } from '@/types/types';

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function HeaderProvider({ children }: any) {
  const [headerStyle, setHeaderStyle] = useState<boolean>(false)
  
  return <HeaderContext.Provider value={{headerStyle,setHeaderStyle}}>{children}</HeaderContext.Provider>;
}

export function useHeaderContext(): any {
  const context = useContext(HeaderContext);
  if (context === null) {
    throw new Error('useHeaderContext must be used within a HeaderProvider');
  }
  return context;
}

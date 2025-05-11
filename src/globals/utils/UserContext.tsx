'use client';

import { createContext, useContext, ReactNode } from 'react';

export type User = {
   fosterCares: any;
   uuid: string;
   name: string;
   email: string;
};

type UserContextType = {
   user: User;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({
   children,
   user,
}: {
   children: ReactNode;
   user: User;
}) => {
   return (
      <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
   );
};

export const useUser = (): UserContextType => {
   const context = useContext(UserContext);
   if (!context) {
      throw new Error('useUser must be used within a UserProvider');
   }
   return context;
};

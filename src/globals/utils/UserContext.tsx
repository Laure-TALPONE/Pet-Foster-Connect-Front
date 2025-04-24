// context/UserContext.tsx
'use client';

import {
   createContext,
   useContext,
   useEffect,
   useState,
   ReactNode,
} from 'react';

export type User = {
   id: string;
   name: string;
   email: string;
};

type UserContextType = {
   user: User | null;
   setUser: (user: User | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
   const [user, setUserState] = useState<User | null>(null);

   // Charger depuis localStorage au 1er rendu
   useEffect(() => {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
         setUserState(JSON.parse(savedUser));
      }
   }, []);

   // Sauvegarder dans localStorage à chaque changement
   const setUser = (user: User | null) => {
      if (user) {
         localStorage.setItem('user', JSON.stringify(user));
      } else {
         localStorage.removeItem('user');
      }
      setUserState(user);
   };

   return (
      <UserContext.Provider value={{ user, setUser }}>
         {children}
      </UserContext.Provider>
   );
};

export const useUser = (): UserContextType => {
   const context = useContext(UserContext);
   if (!context) {
      throw new Error('useUser must be used within a UserProvider');
   }
   return context;
};

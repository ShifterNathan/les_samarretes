import React, { createContext, useState, useEffect } from "react";

// Define the shape of your context data for TypeScript
interface UserContextType {
  isAuthenticated: boolean;
  toggleAuth: () => void;
}

// Create a context with a default value
const UserContext = createContext<UserContextType>({
  isAuthenticated: false, // default value
  toggleAuth: () => {}, // a noop function as a placeholder
});

export function UserProvider(props: any) {
  const { children } = props;

  // Initialize state from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem('isAuthenticated') ?? 'false')
  );

  // Update localStorage when isAuthenticated changes
  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <UserContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {children}
    </UserContext.Provider>
  );
}

// Hook to use authentication status in any component
export function useAuth() {
  return React.useContext(UserContext);
}

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface AppContextType {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  searchDialogState: boolean;
  setSearchDialogState: React.Dispatch<React.SetStateAction<boolean>>;
  handleSearchDialog: () => void;
}

// Initialize the context with default values
const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [searchDialogState, setSearchDialogState] = useState<boolean>(false);
  const [active, setActive] = useState<number>(0);

  const handleSearchDialog = () => {
    setSearchDialogState(!searchDialogState);
  };

  useEffect(() => {
    if (localStorage.getItem("tabIndex")) {
      setActive(JSON.parse(localStorage.getItem("tabIndex") as string));
    } else {
      localStorage.setItem("tabIndex", JSON.stringify(active));
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        active,
        setActive,
        searchDialogState,
        setSearchDialogState,
        handleSearchDialog,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

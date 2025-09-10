import React, { createContext, ReactNode } from 'react';
import { useContactPopup } from '../hooks/useContactPopup';

export interface ContactPopupContextType {
  isVisible: boolean;
  hasShown: boolean;
  showPopup: () => void;
  hidePopup: () => void;
  resetPopup: () => void;
}

export const ContactPopupContext = createContext<ContactPopupContextType | undefined>(undefined);

interface ContactPopupProviderProps {
  children: ReactNode;
  autoShow?: boolean;
  showDelay?: number;
  showOnExit?: boolean;
}

export const ContactPopupProvider: React.FC<ContactPopupProviderProps> = ({
  children,
  autoShow = true,
  showDelay = 10000,
  showOnExit = true
}) => {
  const popupState = useContactPopup({
    autoShow,
    showDelay,
    showOnExit
  });

  return (
    <ContactPopupContext.Provider value={popupState}>
      {children}
    </ContactPopupContext.Provider>
  );
};

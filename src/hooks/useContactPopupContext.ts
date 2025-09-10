import { useContext } from 'react';
import { ContactPopupContext } from '../contexts/ContactPopupContext';

export const useContactPopupContext = () => {
  const context = useContext(ContactPopupContext);
  if (context === undefined) {
    throw new Error('useContactPopupContext must be used within a ContactPopupProvider');
  }
  return context;
};

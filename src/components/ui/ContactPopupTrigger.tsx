import React from 'react';
import { Button } from './button';
import { useContactPopupContext } from '../../hooks/useContactPopupContext';

interface ContactPopupTriggerProps {
  children?: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

const ContactPopupTrigger: React.FC<ContactPopupTriggerProps> = ({
  children = 'Get Started',
  variant = 'default',
  size = 'default',
  className = ''
}) => {
  const { showPopup } = useContactPopupContext();

  return (
    <Button
      onClick={showPopup}
      variant={variant}
      size={size}
      className={className}
    >
      {children}
    </Button>
  );
};

export default ContactPopupTrigger;

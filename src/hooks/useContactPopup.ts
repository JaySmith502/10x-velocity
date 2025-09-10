import { useState, useEffect } from 'react';

interface UseContactPopupOptions {
  autoShow?: boolean;
  showDelay?: number;
  showOnExit?: boolean;
}

export const useContactPopup = (options: UseContactPopupOptions = {}) => {
  const {
    autoShow = false,
    showDelay = 5000, // 5 seconds default
    showOnExit = false
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  // Auto show popup after delay
  useEffect(() => {
    if (autoShow && !hasShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
      }, showDelay);

      return () => clearTimeout(timer);
    }
  }, [autoShow, showDelay, hasShown]);

  // Show popup on exit intent
  useEffect(() => {
    if (!showOnExit || hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showOnExit, hasShown]);

  const showPopup = () => {
    setIsVisible(true);
    setHasShown(true);
  };

  const hidePopup = () => {
    setIsVisible(false);
  };

  const resetPopup = () => {
    setHasShown(false);
    setIsVisible(false);
  };

  return {
    isVisible,
    hasShown,
    showPopup,
    hidePopup,
    resetPopup
  };
};

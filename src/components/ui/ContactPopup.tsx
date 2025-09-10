import React, { useEffect, useRef } from 'react';

interface ContactPopupProps {
  isVisible?: boolean;
  onClose?: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ 
  isVisible = true, 
  onClose 
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Load the external script only once
    if (!scriptLoadedRef.current) {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      document.head.appendChild(script);
      scriptLoadedRef.current = true;

      // Cleanup function to remove script when component unmounts
      return () => {
        const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, []);

  useEffect(() => {
    // Handle iframe visibility
    if (iframeRef.current) {
      iframeRef.current.style.display = isVisible ? 'block' : 'none';
    }
  }, [isVisible]);

  // Handle form submission events (if needed)
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Listen for messages from the iframe (form submission, close events, etc.)
      if (event.origin === 'https://api.leadconnectorhq.com') {
        if (event.data?.type === 'form_submitted' || event.data?.type === 'form_closed') {
          onClose?.();
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Popup Container */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-2 right-2 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
            aria-label="Close popup"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        {/* Iframe Container */}
        <div className="w-full h-[439px]">
          <iframe
            ref={iframeRef}
            src="https://api.leadconnectorhq.com/widget/form/mYtM8nnkSBtAzcDroeEO"
            className="w-full h-full border-none rounded-lg"
            id="popup-mYtM8nnkSBtAzcDroeEO"
            data-layout="{'id':'POPUP'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="leadCollected"
            data-deactivation-value=""
            data-form-name="10XVelocity Contact Intake Form - Popup"
            data-height="439"
            data-layout-iframe-id="popup-mYtM8nnkSBtAzcDroeEO"
            data-form-id="mYtM8nnkSBtAzcDroeEO"
            title="10XVelocity Contact Intake Form - Popup"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;

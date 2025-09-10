# Contact Popup Integration

## Overview
The Contact Popup system provides a seamless way to display LeadConnector forms throughout your React application. It includes automatic triggers, manual controls, and proper TypeScript integration.

## Components

### 1. ContactPopup
The main popup component that displays the LeadConnector form in a modal overlay.

**Props:**
- `isVisible?: boolean` - Controls popup visibility
- `onClose?: () => void` - Callback when popup is closed

### 2. ContactPopupTrigger
A button component that triggers the popup when clicked.

**Props:**
- `children?: React.ReactNode` - Button content (default: "Get Started")
- `variant?: string` - Button variant from shadcn/ui
- `size?: string` - Button size
- `className?: string` - Additional CSS classes

### 3. ContactPopupProvider
Context provider that manages popup state across the application.

**Props:**
- `autoShow?: boolean` - Auto-show popup after delay (default: true)
- `showDelay?: number` - Delay in milliseconds (default: 10000)
- `showOnExit?: boolean` - Show on exit intent (default: true)

## Usage Examples

### Basic Manual Trigger
```tsx
import ContactPopupTrigger from '@/components/ui/ContactPopupTrigger';

const MyComponent = () => (
  <ContactPopupTrigger variant="outline" size="lg">
    Contact Us Now
  </ContactPopupTrigger>
);
```

### Custom Implementation
```tsx
import { useContactPopupContext } from '@/hooks/useContactPopupContext';

const CustomComponent = () => {
  const { showPopup, isVisible, hasShown } = useContactPopupContext();
  
  return (
    <div>
      {!hasShown && (
        <button onClick={showPopup}>
          Get Free Consultation
        </button>
      )}
    </div>
  );
};
```

### Conditional Display
```tsx
import { useContactPopupContext } from '@/hooks/useContactPopupContext';

const LandingPage = () => {
  const { showPopup } = useContactPopupContext();
  
  const handleCTAClick = () => {
    // Show popup instead of navigating to contact page
    showPopup();
  };
  
  return (
    <section>
      <h1>Transform Your Business</h1>
      <button onClick={handleCTAClick}>
        Start Your Journey
      </button>
    </section>
  );
};
```

## Configuration

The popup is configured in `App.tsx` with the following settings:
- **Auto Show**: Enabled after 10 seconds
- **Exit Intent**: Triggers when user moves cursor to leave page
- **One-time Display**: Won't show again after being dismissed

## Features

### Automatic Triggers
- **Time-based**: Shows after specified delay
- **Exit Intent**: Detects when user is about to leave
- **Smart Display**: Only shows once per session

### User Experience
- **Responsive Design**: Works on all screen sizes
- **Accessible**: Proper ARIA labels and keyboard navigation
- **Non-intrusive**: Easy to close with backdrop click or X button

### Technical Features
- **TypeScript Support**: Full type safety
- **Context Management**: Global state management
- **Script Loading**: Automatic LeadConnector script injection
- **Memory Management**: Proper cleanup on unmount

## Integration Notes

1. The popup is already integrated into your main App.tsx
2. The LeadConnector form ID is: `mYtM8nnkSBtAzcDroeEO`
3. Form submissions are handled by LeadConnector's system
4. The popup will automatically hide after form submission

## Customization

To modify the popup behavior:
1. Update the `ContactPopupProvider` props in `App.tsx`
2. Customize the styling in `ContactPopup.tsx`
3. Modify trigger conditions in `useContactPopup.ts`

## Best Practices

1. Use `ContactPopupTrigger` for standard call-to-action buttons
2. Use the context hook for custom implementations
3. Consider user experience when setting auto-show delays
4. Test exit intent functionality across different browsers
5. Monitor form submission rates and adjust timing accordingly

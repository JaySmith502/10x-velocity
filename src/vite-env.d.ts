
/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'needle-widget': {
      'client-key'?: string;
      'collection-id'?: string;
    };
  }
}

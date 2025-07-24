/// <reference types="vite/client" />

/**
 * JSX type extensions for custom web components
 * Defines the needle-embedded-widget custom element with its expected attributes
 */
declare namespace JSX {
  interface IntrinsicElements {
    'needle-embedded-widget': {
      'client-key'?: string;
      'collection-id'?: string;
    };
  }
}

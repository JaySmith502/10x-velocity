import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

/**
 * Cookie consent banner (vanilla-cookieconsent v3), forced dark theme.
 *
 * Consent model is opt-in for everything except strictly-necessary, with an
 * equally-weighted "Reject all" button - this satisfies both GDPR (prior
 * consent) and US state laws (CCPA/CPRA opt-out). Non-necessary categories are
 * disabled by default and only activate after the user accepts.
 *
 * To gate a script behind consent, give it type="text/plain" and
 * data-category="analytics" (or "functional"); the library activates it on
 * consent. See onConsentChange below for the programmatic hook.
 */
const CATEGORY_NECESSARY = "necessary";
const CATEGORY_ANALYTICS = "analytics";
const CATEGORY_FUNCTIONAL = "functional";

const CookieConsentBanner = () => {
  useEffect(() => {
    // Banner uses its own dark palette regardless of the site theme toggle.
    // Scoped to the plugin's #cc-main, so it does not dark-mode the page.
    document.documentElement.classList.add("cc--darkmode");

    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: "box wide",
          position: "bottom left",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },

      categories: {
        [CATEGORY_NECESSARY]: {
          enabled: true,
          readOnly: true,
        },
        [CATEGORY_ANALYTICS]: {
          enabled: false,
          autoClear: {
            cookies: [{ name: /^_ga/ }, { name: "_gid" }],
          },
        },
        [CATEGORY_FUNCTIONAL]: {
          enabled: false,
        },
      },

      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We value your privacy",
              description:
                "We use cookies to keep the site running and, with your consent, to understand how it is used so we can improve it. You can accept all, reject non-essential cookies, or choose what to allow.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              showPreferencesBtn: "Manage preferences",
              footer:
                '<a href="/privacy-policy">Privacy Policy</a>',
            },
            preferencesModal: {
              title: "Manage cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Save preferences",
              closeIconLabel: "Close",
              sections: [
                {
                  title: "Your privacy choices",
                  description:
                    "Strictly necessary cookies are always on. For everything else, choose what you are comfortable with. You can change these choices at any time.",
                },
                {
                  title: "Strictly necessary",
                  description:
                    "Required for the website to function (security, load balancing, and remembering your consent choices). These cannot be switched off.",
                  linkedCategory: CATEGORY_NECESSARY,
                },
                {
                  title: "Analytics",
                  description:
                    "Help us understand how visitors use the site so we can improve it. All data is aggregated and anonymous.",
                  linkedCategory: CATEGORY_ANALYTICS,
                },
                {
                  title: "Functional",
                  description:
                    "Enable enhanced features such as the AI chat assistant and remembering preferences like your theme.",
                  linkedCategory: CATEGORY_FUNCTIONAL,
                },
                {
                  title: "More information",
                  description:
                    'For questions about how we use cookies, see our <a href="/privacy-policy">Privacy Policy</a> or <a href="/contact">contact us</a>.',
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
};

export default CookieConsentBanner;

export type Language = 'en' | 'fr';

export const IMAGE_ROUTES = {
  logo: "",

/*mobile*/
  mobile1: '/images/mobil1.png',
  mobile2: '/images/mobil2.png',
  mobile3: '/images/mobil3.png',
  mobile4: '/images/mobil4.png',
  mobile5: '/images/mobil5.png',
  mobile6: '/images/mobil6.png',
  mobile7: '/images/mobil7.png',
  mobile8: '/images/mobil8.png',
  mobile9: '/images/mobil9.png',
  mobile10: '/images/mobil10.png',
  mobile11: '/images/mobil11.png',
  mobile12: '/images/mobil12.png',

/*tablet*/
  tab01: '/images/tablet1.png',
  tab02: '/images/tablet2.png',
  tab03: '/images/tablet3.png',
  tab04: '/images/tablet4.png',
  /*tab05: '/images/tablet5.png',*/
  tab06: '/images/tablet6.png',
  tab07: '/images/tablet7.png',
  tab08: '/images/tablet8.png',
  tab09: '/images/tablet9.png',
  tab10: '/images/tablet10.png',
  tab11: '/images/tablet11.png',
  tab12: '/images/tablet12.png',

/*desktop*/
  desk01: '/images/desk1.PNG',
  desk02: '/images/desk2.png',
  desk03: '/images/desk3.png',
  desk04: '/images/desk4.png',
  desk05: '/images/desk5.png',
  desk06: '/images/desk6.png',
  desk07: '/images/desk7.png',
  desk08: '/images/desk8.png',
  desk09: '/images/desk9.png',
  desk10: '/images/desk10.png',
  /*desk11: '/images/desk11.png',*/
  desk12: '/images/desk12.png',


  staircase: '/images/photo_spiral_staircase_1794531461953.jpg',
  botanical: '/images/photo_botanical_shadow_1794531461017.jpg',
  exhibition: '/images/photo_gallery_exhibition_1794531462472.jpg',
} as const;

export interface TranslationContent {
  seo: {
    title: string;
    description: string;
  };
  a11y: {
    skipToContent: string;
    primaryNav: string;
    languageGroup: string;
    switchToEnglish: string;
    switchToFrench: string;
    toggleDarkMode: string;
    switchToLight: string;
    switchToDark: string;
    openMenu: string;
    closeMenu: string;
    previousSlide: string;
    nextSlide: string;
    goToSlide: (index: number, total: number) => string;
    slideAnnouncement: (index: number, total: number, title: string) => string;
    inspectSlide: (title: string) => string;
    closeLightbox: string;
    lightboxTitle: string;
    loadingPage: string;
  };
  nav: {
    brand: string;
    logo: string;
    service: string;
    mobile: string;
    tablet: string;
    desktop: string;
    contact: string;
  };
  hero: {
    kicker: string;
    headline: string;
    description: string;
    secondaryDescription: string;
    primaryCta: string;
    secondaryCta: string;
    featuredCaption: string;
    featuredMeta: string;
    specs: Array<{
      value: string;
      label: string;
    }>;
  };
  sections: {
    mobile: {
      number: string;
      title: string;
      subtitle: string;
      carouselAria: string;
    };
    tablet: {
      number: string;
      title: string;
      subtitle: string;
      carouselAria: string;
    };
    desktop: {
      number: string;
      title: string;
      subtitle: string;
      carouselAria: string;
    };
  };
  inspectLabel: string;
  images: {
    mobile: {
      mob01: string;
      mob001: string;
      mob002: string;
      mob03: string;
      mob04: string;
      mob05: string;
      mob06: string;
      mob07: string;
      mob08: string;
      mob09: string;
      mob10: string;
      mob11: string;
    };
    tablet: {
      tab01: string;
      tab02: string;
      tab03: string;
      tab04: string;
      /*tab05: string;*/
      tab06: string;
      tab07: string;
      tab08: string;
      tab09: string;
      tab10: string;
      tab11: string;
      tab12: string;
    };
    desktop: {
      desk01: string;
      desk02: string;
      desk03: string;
      desk04: string;
      desk05: string;
      desk06: string;
      desk07: string;
      desk08: string;
      desk09: string;
      desk10: string;
      desk11: string;
      desk12: string;
    };
  };
  pricing: {
    number: string;
    title: string;
    subtitle: string;
    headers: {
      zone: string;
      price: string;
    };
    rows: Array<{
      zone: string;
      price: string;
    }>;
  };
  footer: {
    title: string;
    subtitle: string;
    instagram: {
      label: string;
      handle: string;
      href: string;
    };
    youtube: {
      label: string;
      handle: string;
      href: string;
      pendingLabel: string;
    };
    email: {
      label: string;
      address: string;
    };
    whatsapp: {
      label: string;
      number: string;
      href: string;
    };
    backToTop: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    seo: {
      title: 'A website for Web Designers and UI/UX Designers',
      description:
        'Just contact us to get your version of the website.',
    },
    a11y: {
      skipToContent: 'Skip to main content',
      primaryNav: 'Primary navigation',
      languageGroup: 'Language selection',
      switchToEnglish: 'Switch language to English',
      switchToFrench: 'Passer la langue en français',
      toggleDarkMode: 'Toggle color theme',
      switchToLight: 'Switch to light mode',
      switchToDark: 'Switch to dark mode',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      previousSlide: 'Previous slide',
      nextSlide: 'Next slide',
      goToSlide: (index, total) => `View slide ${index} of ${total}`,
      slideAnnouncement: (index, total, title) => `Slide ${index} of ${total}: ${title}`,
      inspectSlide: (title) => `Inspect ${title} in fullscreen viewer`,
      closeLightbox: 'Close fullscreen viewer',
      lightboxTitle: 'Fullscreen Preview Inspection',
      loadingPage: 'Loading photo gallery showcase',
    },
    nav: {
      brand: 'Cadre',
      logo: IMAGE_ROUTES.logo,
      service: 'Service',
      mobile: 'Mobile',
      tablet: 'Tablet',
      desktop: 'Desktop',
      contact: 'Contact',
    },
    hero: {
      kicker: 'Web Design & Photography Systems',
      headline: 'A website for Web Designers and UI/UX Designers',
      description:
        'Just contact us to get your version of the website and then you can subscribe and unsubscribe whenever you want.',
      secondaryDescription:
        'Below, preview the exact responsive gallery edition available for acquisition—presented sequentially across mobile, tablet, and widescreen desktop viewports.',
      primaryCta: 'Explore Mobile Preview',
      secondaryCta: 'Request Acquisition',
      featuredCaption: 'Plate 01 · Pavilion in Afternoon Light',
      featuredMeta: 'Full-bleed editorial framing · Lazy-decoded assets · Zero layout shift',
      specs: [
        { value: '< 0.5s', label: 'First Contentful Paint' },
        { value: '3', label: 'Calibrated Breakpoints' },
        { value: 'EN / FR', label: 'Bilingual Architecture' },
        { value: 'WCAG AA', label: 'Keyboard & Screen Reader' },
      ],
    },
    sections: {
      mobile: {
        number: '01.',
        title: 'Mobile Version',
        subtitle:
          'Thumb-friendly vertical cadence, crisp edge-to-edge portraits, and distraction-free lightbox controls engineered for 390px viewports.',
        carouselAria: 'Mobile website version preview carousel',
      },
      tablet: {
        number: '02.',
        title: 'Tablet Version',
        subtitle:
          'Balanced two-column editorial grids and spacious typographic margins designed for portrait and landscape tablet reading.',
        carouselAria: 'Tablet website version preview carousel',
      },
      desktop: {
        number: '03.',
        title: 'Desktop Version',
        subtitle:
          'Expansive 1440px gallery layouts pairing asymmetrical visual rhythm with unobtrusive metadata and rapid keyboard navigation.',
        carouselAria: 'Desktop website version preview carousel',
      },
    },
    inspectLabel: 'Inspect',
    images: {
      mobile: {
        mob01: IMAGE_ROUTES.mobile1,
        mob001: IMAGE_ROUTES.mobile2,
        mob002: IMAGE_ROUTES.mobile3,
        mob03: IMAGE_ROUTES.mobile4,
        mob04: IMAGE_ROUTES.mobile5,
        mob05: IMAGE_ROUTES.mobile6,
        mob06: IMAGE_ROUTES.mobile7,
        mob07: IMAGE_ROUTES.mobile8,
        mob08: IMAGE_ROUTES.mobile9,
        mob09: IMAGE_ROUTES.mobile10,
        mob10: IMAGE_ROUTES.mobile11,
        mob11: IMAGE_ROUTES.mobile12,
      },
      tablet: {
        tab01: IMAGE_ROUTES.tab01,
        tab02: IMAGE_ROUTES.tab02,
        tab03: IMAGE_ROUTES.tab03,
        tab04: IMAGE_ROUTES.tab04,
        /*tab05: IMAGE_ROUTES.tab05,*/
        tab06: IMAGE_ROUTES.tab06,
        tab07: IMAGE_ROUTES.tab07,
        tab08: IMAGE_ROUTES.tab08,
        tab09: IMAGE_ROUTES.tab09,
        tab10: IMAGE_ROUTES.tab10,
        tab11: IMAGE_ROUTES.tab11,
        tab12: IMAGE_ROUTES.tab12,
      },
      desktop: {
        desk01: IMAGE_ROUTES.desk01,
        desk02: IMAGE_ROUTES.desk02,
        desk03: IMAGE_ROUTES.desk03,
        desk04: IMAGE_ROUTES.desk04,
        desk05: IMAGE_ROUTES.desk05,
        desk06: IMAGE_ROUTES.desk06,
        desk07: IMAGE_ROUTES.desk07,
        desk08: IMAGE_ROUTES.desk08,
        desk09: IMAGE_ROUTES.desk09,
        desk10: IMAGE_ROUTES.desk10,
        /*desk11: IMAGE_ROUTES.desk11,*/
        desk12: IMAGE_ROUTES.desk12,
      },
    },
    pricing: {
      number: '04.',
      title: 'Pricing Table',
      subtitle: 'Transparent licensing rates organized by client region.',
      headers: {
        zone: 'Zone',
        price: 'Price',
      },
      rows: [
        { zone: 'Algeria', price: '3000DA + 500DA per month' },
        { zone: 'Middle East', price: '20$ + 5$ per month' },
        { zone: 'Europe', price: '18€ + 4€ per month' },
        { zone: 'Other', price: '20$ + 5$ per month' },
      ],
    },
    footer: {
      title: 'Contact',
      subtitle: 'Reach out directly to get your version of the website.',
      instagram: {
        label: 'Instagram',
        handle: '@web_pro_portfolio',
        href: 'https://www.instagram.com/web_pro_portfolio/',
      },
      youtube: {
        label: 'YouTube',
        handle: 'YouTube Channel',
        href: '',
        pendingLabel: 'Coming soon',
      },
      email: {
        label: 'Email',
        address: 'web2ismail8@gmail.com',
      },
      whatsapp: {
        label: 'WhatsApp',
        number: '+213799009981',
        href: 'https://wa.me/213799009981',
      },
      backToTop: 'Back to top',
      copyright: '© 2026 Web pro. All rights reserved.',
    },
  },
  fr: {
    seo: {
      title: 'Le site dédié aux webdesigners et designers UI/UX',
      description:
        'Découvrez Cadre, un modèle de site galerie photo léger, accessible et rapide, présenté en aperçus mobile, tablette et ordinateur.',
    },
    a11y: {
      skipToContent: 'Aller au contenu principal',
      primaryNav: 'Navigation principale',
      languageGroup: 'Choix de la langue',
      switchToEnglish: 'Switch language to English',
      switchToFrench: 'Passer la langue en français',
      toggleDarkMode: 'Basculer le thème clair ou sombre',
      switchToLight: 'Passer en mode clair',
      switchToDark: 'Passer en mode sombre',
      openMenu: 'Ouvrir le menu de navigation',
      closeMenu: 'Fermer le menu de navigation',
      previousSlide: 'Diapositive précédente',
      nextSlide: 'Diapositive suivante',
      goToSlide: (index, total) => `Voir la diapositive ${index} sur ${total}`,
      slideAnnouncement: (index, total, title) => `Diapositive ${index} sur ${total} : ${title}`,
      inspectSlide: (title) => `Inspecter ${title} en plein écran`,
      closeLightbox: 'Fermer la visionneuse plein écran',
      lightboxTitle: 'Inspection plein écran',
      loadingPage: 'Chargement de la galerie photo',
    },
    nav: {
      brand: 'Cadre',
      logo: IMAGE_ROUTES.logo,
      service: 'Service',
      mobile: 'Mobile',
      tablet: 'Tablette',
      desktop: 'Bureau',
      contact: 'Contact',
    },
    hero: {
      kicker: 'Design Web & Systèmes Photographiques',
      headline: 'Le site dédié aux webdesigners et designers UI/UX',
      description:
        'Il vous suffit de nous contacter pour obtenir votre propre version du site et puis vous pouvez vous abonner et vous désabonner quand vous voulez.',
      secondaryDescription:
        'Parcourez ci-dessous l’édition complète du site galerie disponible à la vente, présentée successivement sur mobile, tablette et écran de bureau.',
      primaryCta: 'Voir l’aperçu mobile',
      secondaryCta: 'Demander une licence',
      featuredCaption: 'Planche 01 · Pavillon en lumière d’après-midi',
      featuredMeta: 'Cadrage éditorial plein format · Chargement différé · Zéro décalage de mise en page',
      specs: [
        { value: '< 0,5s', label: 'Premier affichage' },
        { value: '3', label: 'Formats calibrés' },
        { value: 'EN / FR', label: 'Architecture bilingue' },
        { value: 'WCAG AA', label: 'Clavier & lecteur d’écran' },
      ],
    },
    sections: {
      mobile: {
        number: '01.',
        title: 'Version Mobile',
        subtitle:
          'Rythme vertical fluide, portraits bord à bord et visionneuse tactile épurée calibrés pour les écrans de 390 px.',
        carouselAria: 'Carrousel d’aperçus de la version mobile du site',
      },
      tablet: {
        number: '02.',
        title: 'Version Tablette',
        subtitle:
          'Grilles éditoriales équilibrées à deux colonnes et marges typographiques généreuses adaptées à la lecture sur tablette.',
        carouselAria: 'Carrousel d’aperçus de la version tablette du site',
      },
      desktop: {
        number: '03.',
        title: 'Version Bureau',
        subtitle:
          'Mises en page grand format en 1440 px associant rythme asymétrique, métadonnées discrètes et navigation clavier rapide.',
        carouselAria: 'Carrousel d’aperçus de la version bureau du site',
      },
    },
    inspectLabel: 'Agrandir',
    images: {
      mobile: {
        mob01: IMAGE_ROUTES.mobile1,
        mob001: IMAGE_ROUTES.mobile2,
        mob002: IMAGE_ROUTES.mobile3,
        mob03: IMAGE_ROUTES.mobile4,
        mob04: IMAGE_ROUTES.mobile5,
        mob05: IMAGE_ROUTES.mobile6,
        mob06: IMAGE_ROUTES.mobile7,
        mob07: IMAGE_ROUTES.mobile8,
        mob08: IMAGE_ROUTES.mobile9,
        mob09: IMAGE_ROUTES.mobile10,
        mob10: IMAGE_ROUTES.mobile11,
        mob11: IMAGE_ROUTES.mobile12,
      },
      tablet: {
        tab01: IMAGE_ROUTES.tab01,
        tab02: IMAGE_ROUTES.tab02,
        tab03: IMAGE_ROUTES.tab03,
        tab04: IMAGE_ROUTES.tab04,
        /*tab05: IMAGE_ROUTES.tab05,*/
        tab06: IMAGE_ROUTES.tab06,
        tab07: IMAGE_ROUTES.tab07,
        tab08: IMAGE_ROUTES.tab08,
        tab09: IMAGE_ROUTES.tab09,
        tab10: IMAGE_ROUTES.tab10,
        tab11: IMAGE_ROUTES.tab11,
        tab12: IMAGE_ROUTES.tab12,
      },
      desktop: {
        desk01: IMAGE_ROUTES.desk01,
        desk02: IMAGE_ROUTES.desk02,
        desk03: IMAGE_ROUTES.desk03,
        desk04: IMAGE_ROUTES.desk04,
        desk05: IMAGE_ROUTES.desk05,
        desk06: IMAGE_ROUTES.desk06,
        desk07: IMAGE_ROUTES.desk07,
        desk08: IMAGE_ROUTES.desk08,
        desk09: IMAGE_ROUTES.desk09,
        desk10: IMAGE_ROUTES.desk10,
        /*desk11: IMAGE_ROUTES.desk11,*/
        desk12: IMAGE_ROUTES.desk12,
      },
    },
    pricing: {
      number: '04.',
      title: 'Grille Tarifaire',
      subtitle: 'Tarifs de licence transparents selon votre zone géographique.',
      headers: {
        zone: 'Zone',
        price: 'Tarif',
      },
      rows: [
        { zone: 'Algérie', price: '3000DA + 500DA par mois' },
        { zone: 'Moyen-Orient', price: '20$ + 5$ par mois' },
        { zone: 'Europe', price: '18€ + 4€ par mois' },
        { zone: 'Autres', price: '20$ + 5$ par mois' },
      ],
    },
    footer: {
      title: 'Contact',
      subtitle: 'Contactez-nous directement pour obtenir votre version du site.',
      instagram: {
        label: 'Instagram',
        handle: '@web_pro_portfolio',
        href: 'https://www.instagram.com/web_pro_portfolio/',
      },
      youtube: {
        label: 'YouTube',
        handle: 'Chaîne YouTube',
        href: '',
        pendingLabel: 'Bientôt disponible',
      },
      email: {
        label: 'E-mail',
        address: 'web2ismail8@gmail.com',
      },
      whatsapp: {
        label: 'WhatsApp',
        number: '+213799009981',
        href: 'https://wa.me/213799009981',
      },
      backToTop: 'Haut de page',
      copyright: '© 2026 Cadre Studio. Tous droits réservés.',
    },
  },
};

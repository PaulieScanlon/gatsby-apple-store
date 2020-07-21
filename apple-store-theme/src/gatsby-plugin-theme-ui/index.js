import codeTheme from '@theme-ui/prism/presets/oceanic-next.json'

export default {
  colors: {
    text: '#24292E',
    background: '#ffffff',
    primary: '#00B0FF',
    secondary: '#FF4081',
    muted: '#f7f7f7',
    highlight: '#fbd0df', // secondary mid scale
    gray: '#a0a0a0',
    accent: '#FDD835',
    darken: '#8B5E3C',
    primaryLight: '#e6f7ff',
    primaryMid: '#b3e7ff',
    primaryDark: '#b3e7ff',
  },
  fonts: {
    body: 'Ruda',
    heading: 'Roboto Slab',
    monospace: 'monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
    light: 200,
  },
  lineHeights: {
    body: 2.2,
    heading: 1.2,
    text: 1.6,
  },
  fontSizes: [14, 16, 18, 28, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 48, 64, 96, 128, 256],
  zIndices: {
    header: '999',
  },
  radii: [8],
  shadows: [
    '0px 0px 25px -10px rgba(0,0,0,0.20)',
    '0px 0px 50px -10px rgba(0,0,0,0.20)',
  ],

  sizes: {
    hero: 400,
    container: 960,
  },
  layout: {
    container: {
      px: 4,
    },
  },
  text: {
    default: {
      fontFamily: 'body',
      lineHeight: 'body',
    },
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      m: 0,
    },
  },
  breakpoints: ['540px', '720px', '960px', '1140px'],
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 0,
      lineHeight: 'body',
    },
    h1: { variant: 'text.heading', fontSize: [5, 6] },
    h2: { variant: 'text.heading', fontSize: [4, 5] },
    h3: { variant: 'text.heading', fontSize: 3 },
    h4: { variant: 'text.heading', fontSize: 2 },
    h5: { variant: 'text.heading', fontSize: 1 },
    h6: { variant: 'text.heading', fontSize: 0 },
    a: {
      color: 'secondary',
      fontFamily: 'body',
      ':focus': {
        outlineColor: 'accent',
      },
    },
    p: {
      fontFamily: 'body',
      fontSize: 0,
      code: {
        px: 0,
        whiteSpace: 'pre-wrap',
        ...codeTheme,
      },
    },
    pre: {
      p: 3,
      whiteSpace: 'pre-wrap',
      ...codeTheme,
    },
    hr: {
      default: {
        my: 4,
        borderStyle: 'solid',
        borderColor: 'muted',
      },
      variant: 'styles.hr.default',
    },
    spacer: {
      sm: {
        borderStyle: 'none',
        borderColor: 'transparent',
        my: 1,
      },
      md: {
        borderStyle: 'none',
        borderColor: 'transparent',
        my: 2,
      },
      lg: {
        borderStyle: 'none',
        borderColor: 'transparent',
        my: 3,
      },
    },
    donut: {
      secondary: {
        stroke: 'secondary',
      },
    },
    progress: {
      secondary: {
        color: 'secondary',
      },
    },
    spinner: {
      secondary: {
        color: 'secondary',
      },
    },
    header: {
      position: 'fixed',
      mx: 'auto',
      pt: 3,
      px: 3,
      width: '100%',
      zIndex: 'header',
    },
    footer: {
      mb: 3,
      mx: 'auto',
      px: 3,
    },
  },
  links: {
    nav: {
      fontSize: 1,
      fontWeight: 'bold',
      ':focus': {
        outlineColor: 'highlight',
      },
    },
  },
  alerts: {
    secondary: {
      backgroundColor: 'secondary',
    },
  },
  badges: {
    default: {
      px: 2,
    },
    primary: {
      variant: 'badges.default',
    },
    secondary: {
      variant: 'badges.default',
      backgroundColor: 'secondary',
    },
  },
  cards: {
    default: {
      borderRadius: 0,
      boxShadow: 1,
      p: 3,
      minHeight: '100%',
    },
    primary: {
      color: 'text',
      backgroundColor: 'background',
      variant: 'cards.default',
    },
    secondary: {
      color: 'background',
      backgroundColor: 'text',
      variant: 'cards.default',
    },
  },
  messages: {
    primary: {
      borderLeftColor: 'primary',
      backgroundColor: 'primaryMid',
    },
    secondary: {
      borderLeftColor: 'secondary',
      backgroundColor: 'highlight',
    },
  },
  buttons: {
    default: {
      cursor: 'pointer',
      borderRadius: 0,
      display: 'inline-flex',
      placeItems: 'center',
      textTransform: 'uppercase',
      ':focus': {
        outlineColor: 'highlight',
      },
    },
    primary: {
      variant: 'buttons.default',
    },
    secondary: {
      variant: 'buttons.default',
      backgroundColor: 'secondary',
    },
    icon: {
      variant: 'buttons.default',
    },
    menu: {
      variant: 'buttons.default',
    },
    close: {
      variant: 'buttons.default',
    },
  },
  forms: {
    input: {
      ':focus': {
        outlineColor: 'highlight',
      },
    },
    select: {
      ':focus': {
        outlineColor: 'highlight',
      },
    },
    textarea: {
      ':focus': {
        outlineColor: 'highlight',
      },
    },
    label: {
      cursor: 'pointer',
    },
    slider: {
      color: 'gray',
      backgroundColor: 'muted',
      ':focus': {
        color: 'primary',
      },
    },
  },
}

import { lighten } from '@theme-ui/color'
import codeTheme from '@theme-ui/prism/presets/oceanic-next.json'

export default {
  colors: {
    text: '#24292E',
    background: '#ffffff',
    primary: '#00B0FF',
    secondary: '#2b3252',
    muted: '#f7f7f7',
    highlight: '#B3E5FC',
    gray: '#a0a0a0',
    accent: '#FDD835',
    darken: '#444444',
    primaryLight: '#fef7f7',
    primaryMid: '#ffefef',
    primaryDarK: '#fee6e6',
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
  },
  lineHeights: {
    body: 2.2,
    heading: 1.1,
  },
  fontSizes: [12, 16, 18, 28, 32, 64],
  space: [0, 4, 8, 16, 32, 48, 64, 96, 128],
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
    h1: { variant: 'text.heading', fontSize: 5 },
    h2: { variant: 'text.heading', fontSize: 4 },
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
      my: 4,
      borderStyle: 'solid',
      borderColor: 'muted',
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
      backgroundColor: lighten('primary', 0.3),
    },
    secondary: {
      borderLeftColor: 'secondary',
      backgroundColor: lighten('secondary', 0.68),
    },
  },
  buttons: {
    default: {
      cursor: 'pointer',
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

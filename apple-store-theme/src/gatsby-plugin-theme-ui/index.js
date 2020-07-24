import codeTheme from '@theme-ui/prism/presets/oceanic-next.json'

export default {
  colors: {
    text: '#24292E',
    background: '#ffffff',
    primary: '#00B0FF',
    secondary: '#FF4081',
    muted: '#f7f7f7',
    highlight: '#fbd0df', // secondary mid scale
    grayLight: '#F7F7F7',
    grayMid: '#CCCCCC',
    grayDark: '#A0A0A0',
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
  fontSizes: [14, 16, 18, 28, 32, 44, 64],
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
    minWidth: 320,
    maxWidth: 1140,
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
      textTransform: 'capitalize',
      m: 0,
      textShadow: '1px 1px rgba(255,255,255,1)',
    },
  },
  breakpoints: ['540px', '720px', '960px', '1140px'],
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 0,
      lineHeight: 'body',
      minWidth: 'minWidth',
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
      minWidth: 'minWidth',
    },
    footer: {
      mb: 3,
      mx: 'auto',
      px: 3,
      minWidth: 'minWidth',
    },
  },
  links: {
    nav: {
      alignItems: 'center',
      display: 'inline-flex',
      fontFamily: 'heading',
      fontWeight: 'body',
      fontSize: 1,
      textTransform: 'capitalize',
      px: 1,
      transition: '.2s linear color',
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
      display: 'flex',
      flexDirection: 'column',
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
      backgroundColor: 'primaryMid',
    },
    secondary: {
      borderLeftColor: 'secondary',
      backgroundColor: 'highlight',
    },
  },
  buttons: {
    disabled: {
      cursor: 'not-allowed',
      backgroundColor: 'grayMid',
    },
    default: {
      cursor: 'pointer',
      display: 'inline-flex',
      placeItems: 'center',
      textTransform: 'uppercase',
      justifyContent: 'center',
      fontWeight: 'bold',
      ':focus': {
        outlineColor: 'highlight',
      },
    },
    primary: {
      variant: 'buttons.default',
      '&:disabled': {
        variant: 'buttons.disabled',
      },
    },
    secondary: {
      variant: 'buttons.default',
      backgroundColor: 'secondary',
      '&:disabled': {
        variant: 'buttons.disabled',
      },
    },
    accent: {
      color: 'text',
      display: 'flex',
      flex: '1 1 auto',
      variant: 'buttons.default',
      backgroundColor: 'accent',
      '&:disabled': {
        color: 'grayLight',
        variant: 'buttons.disabled',
      },
    },
    icon: {
      variant: 'buttons.default',
    },
    menu: {
      variant: 'buttons.default',
    },
    close: {
      variant: 'buttons.default',
      width: 24,
      height: 24,
    },
  },
  forms: {
    radio: {
      color: 'grayMid',
    },
    checkbox: {
      color: 'grayMid',
    },
    input: {
      borderColor: 'grayMid',
      py: 1,
      px: 2,
      ':focus': {
        outlineColor: 'highlight',
      },
    },
    select: {
      borderColor: 'grayMid',
      py: 1,
      px: 2,
      ':focus': {
        outlineColor: 'highlight',
      },
    },
    textarea: {
      borderColor: 'grayMid',
      py: 1,
      px: 2,
      ':focus': {
        outlineColor: 'highlight',
      },
    },
    label: {
      cursor: 'pointer',
    },
    slider: {
      color: 'grayLight',
      backgroundColor: 'muted',
      ':focus': {
        color: 'primary',
      },
    },
  },
}

import codeTheme from '@theme-ui/prism/presets/oceanic-next.json'

export default {
  colors: {
    text: '#24292E',
    background: '#FFFFFF',
    primary: '#34D058',
    secondary: '#0366D6',
    muted: '#CCCCCC',
    highlight: '#BBFFCD',
    gray: '#808080',
    accent: '#cee5ff',
    darken: '#444444',
  },
  fonts: {
    heading: 'Ruda',
    body: 'Roboto Slab',
    monospace: 'monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.125,
  },
  fontSizes: [12, 16, 18, 28, 32, 64],
  space: [2, 4, 8, 16, 32, 48, 64],

  sizes: {
    container: 640,
  },
  layout: {
    container: {
      p: [2, 4],
    },
  },

  text: {
    default: {
      fontFamily: 'body',
    },
  },
  breakpoints: [540, 720, 960, 1140],

  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 0,
      lineHeight: 'body',
    },
    h1: { fontFamily: 'heading', fontSize: 5 },
    h2: { fontFamily: 'heading', fontSize: 4 },
    h3: { fontFamily: 'heading', fontSize: 3 },
    h4: { fontFamily: 'heading', fontSize: 2 },
    h5: { fontFamily: 'heading', fontSize: 1 },
    h6: { fontFamily: 'heading', fontSize: 0 },
    p: {
      fontFamily: 'body',
      fontSize: 0,
      code: {
        px: 0,
        ...codeTheme,
      },
    },
    pre: {
      p: 3,
      ...codeTheme,
    },
  },
}

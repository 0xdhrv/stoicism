export default {
  useCustomProperties: true,
  initialColorMode: 'light',
  colors: {
    text: '#2c1608',
    background: '#f9e6c3',
    primary: '#3D2314',
    secondary: '#5A3825',
    muted: '#CC9966',
    highlight: '#9f9f9f',
    gray: '#212121',
    accent: '#3D2314',
    modes: {
      dark: {
        text: '#f9e6c3',
        background: '#23120b',
        primary: '#d2d2d2',
        secondary: '#b2b2b2',
        muted: '#191919',
        highlight: '#3c3c3c',
        gray: '#999',
        accent: '#e0e0e0',
      },
    },
  },
  images: {
    avatar: {
      width: 64,
      height: 64,
      borderRadius: 99999,
    },
  },
  fonts: {
    body: 'Spectral',
    heading: 'Spectral',
    monospace: 'Silom, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 300,
    heading: 400,
    display: 400,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.5,
  },
  textStyles: {
    heading: {
      primary: {
        fontFamily: 'heading',
        fontWeight: 'heading',
        lineHeight: 'heading',
      },
      light: {
        fontFamily: 'heading',
        fontWeight: 'body',
        lineHeight: 'heading',
      },
    },
    display: {
      variant: 'textStyles.heading',
      fontSize: [5, 6],
      fontWeight: 'display',
      letterSpacing: '-0.03em',
      mt: 3,
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 8,
      border: '1px solid',
      borderColor: 'muted',
      boxShadow: '0 0 16px rgba(0, 0, 0, 0.125)',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
  styles: {
    root: {
      Container: {
        p: 3,
        maxWidth: 1024,
      },
      h1: {
        variant: 'textStyles.display',
        fontSize: [4, 4, 4],
      },
      h2: {
        variant: 'textStyles.heading',
        fontSize: [4, 4, 4],
      },
      h3: {
        variant: 'textStyles.heading',
        fontSize: [3, 3, 3],
      },
      h4: {
        variant: 'textStyles.heading',
        fontSize: [3, 2, 3],
      },
      h5: {
        variant: 'textStyles.heading',
        fontSize: 2,
      },
      h6: {
        variant: 'textStyles.heading',
        fontSize: 2,
      },
      p: {
        fontFamily: 'body',
        fontSize: [1, 2, 2],
        lineHeight: 2,
      },
      a: {
        fontWeight: 'display',
        color: 'secondary',
        textDecoration: 'none',
        transition: '0.25s',
        transitionTimingFunction: 'ease-in',
        cursor: 'pointer',
        '&:hover': {
          color: 'primary',
        },
      },
      pre: {
        fontFamily: 'Roboto Mono, monospace',
        fontSize: 1,
        p: 3,
        color: 'text',
        bg: 'background',
        borderColor: 'muted',
        borderStyle: 'solid',
        borderWidth: 1,
        overflow: 'auto',
        '.comment': {
          color: 'gray',
        },
        string: {
          color: 'blue',
        },
        code: {
          fontFamily: 'Roboto Mono, monospace',
          fontSize: 1,
          color: 'text',
          bg: 'background',
          overflow: 'auto',
        },
      },
      code: {
        fontFamily: 'Roboto Mono, monospace',
        fontSize: 1,
        color: 'text',
        bg: 'muted',
        // borderColor: 'muted',
        // borderStyle: 'solid',
        // borderWidth: 1,
        overflow: 'auto',
      },
      inlineCode: {
        fontFamily: 'Roboto Mono, monospace',
        color: 'secondary',
        bg: 'muted',
        px: 2,
      },
      ul: {
        listStyleType: 'square',
        p: 1,
        pl: 3,
        fontSize: 1,
      },
      ol: {
        p: 2,
        pl: 3,
        fontSize: 1,
      },
      li: {
        p: 2,
      },
      table: {
        width: '100%',
        my: 4,
        borderCollapse: 'separate',
        borderSpacing: 0,
        background: 'secondary',
        'th,td': {
          textAlign: 'center',
          py: '4px',
          pr: '4px',
          pl: 0,
          borderTopWidth: 0,
          borderWidth: 1,
          borderColor: 'muted',
          borderStyle: 'solid',
        },
      },
      th: {
        backgroundColor: 'muted',
        verticalAlign: 'middle',
        borderTopWidth: 0,
        borderWidth: 1,
      },
      td: {
        verticalAlign: 'middle',
        borderTopWidth: 0,
        borderWidth: 1,
      },
      hr: {
        border: 0,
        borderBottom: '1px solid',
        borderColor: 'text',
      },
    },
  },
}

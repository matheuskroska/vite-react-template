import { createStitches, globalCss } from '@stitches/react';
import { reset } from 'stitches-reset';

import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  violet,
  blackA,
  purple,
  mauve,
  indigo,
} from '@radix-ui/colors';

interface createStyledProps {
  prefix?: string;
  value?: string;
}

const createPrefix = (componentRef: string, prefix: string) => {
  return componentRef + '_' + prefix;
};

const createStyled = (prefix?: createStyledProps['prefix']) =>
  createStitches({
    prefix,
    theme: {
      colors: {
        hiContrast: 'hsl(206,10%,5%)',
        loContrast: 'white',
        ...violet,
        ...blackA,
        ...purple,
        ...mauve,
        ...indigo,
        ...gray,
        ...blue,
        ...red,
        ...green,
        ...grayDark,
        ...blueDark,
        ...redDark,
        ...greenDark,
      },
      space: {
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '25px',
        6: '35px',
      },
      sizes: {
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '25px',
        6: '35px',
      },
      fontSizes: {
        1: '12px',
        2: '13px',
        3: '15px',
        4: '17px',
        5: '19px',
        6: '21px',
      },
      fonts: {
        system: 'system-ui',
      },
      shadows: {
        ...blackA,
      },
    },
    utils: {
      marginX: (value: createStyledProps['value']) => ({
        marginLeft: value,
        marginRight: value,
      }),
      marginY: (value: createStyledProps['value']) => ({
        marginTop: value,
        marginBottom: value,
      }),
      paddingX: (value: createStyledProps['value']) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      paddingY: (value: createStyledProps['value']) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
    },
    media: {
      bp1: '@media (min-width: 520px)',
      bp2: '@media (min-width: 900px)',
    },
  });

const resetCss = globalCss(reset);
const globalStyles = globalCss({
  body: {
    fontFamily: 'Untitled Sans, -apple-system, system-ui, sans-serif;',
    backgroundColor: 'hsl(0deg 0% 0% / 1%);',
  },
  '*': { boxSizing: 'border-box', margin: '0', padding: '0' },
});

resetCss();
globalStyles();

export { createStyled, createPrefix };
export const { styled } = createStyled();

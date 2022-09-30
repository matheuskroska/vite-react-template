import { createStyled, createPrefix } from '../../stitches.config';

const baseButton = {
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 10px',
  cursor: 'pointer',
  borderRadius: '5px',
  border: 'none',
  outline: 'none',
};

const componentRef = 'button';

export const StyledButton = createStyled(
  createPrefix(componentRef, 'StyledButton')
).styled('button', {
  ...baseButton,
  variants: {
    variant: {
      primary: {
        backgroundColor: '$violet11',
        color: 'white',
        '&:hover': {
          backgroundColor: '$violet12',
        },
      },
      secondary: {
        backgroundColor: '$mauve11',
        color: 'white',
        '&:hover': {
          backgroundColor: '$mauve12',
        },
      },
      tertiary: {
        backgroundColor: '$blue11',
        color: 'white',
        '&:hover': {
          backgroundColor: '$blue10',
        },
      },
    },
  },
});

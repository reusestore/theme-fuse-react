import { ThemeProvider } from '@mui/material/styles';
import { memo, useEffect, useLayoutEffect } from 'react';

const useEnhancedEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

function FuseTheme(props) {
  const { direction, theme } = props;

  useEnhancedEffect(() => {
    document.body.dir = direction;
  }, [direction]);

  // console.warn('FuseTheme:: rendered',mainTheme);
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default memo(FuseTheme);

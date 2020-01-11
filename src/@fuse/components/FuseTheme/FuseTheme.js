import React, {useEffect, useLayoutEffect} from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {useSelector} from 'react-redux';

const useEnhancedEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

function FuseTheme(props)
{
    const mainTheme = useSelector(({fuse}) => fuse.settings.mainTheme);
    const direction = useSelector(({fuse}) => fuse.settings.defaults.direction);

    useEnhancedEffect(() => {
        document.body.dir = direction;
    }, [direction]);

    // console.warn('FuseTheme:: rendered',mainTheme);
    return (
        <ThemeProvider theme={mainTheme}>
            {props.children}
        </ThemeProvider>
    )
}

export default React.memo(FuseTheme);

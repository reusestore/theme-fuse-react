import {useEffect, useMemo, useRef} from 'react';
import _ from '@lodash';

function useDebounce(func, wait, options)
{
    const fnRef = useRef(_.debounce(func, wait, options));

    useEffect(() => {
        return () => {
            fnRef.current.cancel();
        }
    }, []);

    useMemo(() => {
        if ( fnRef.current )
        {
            // only call when update
            fnRef.current.cancel();
        }
        fnRef.current = _.debounce(func, wait, options);
    }, [func, wait, options]);

    return fnRef.current;
}

export default useDebounce;

import {useEffect, useRef} from 'react';
import _ from '@lodash';

function useDebounce(func, wait, options)
{
    const fnRef = useRef(_.debounce(func, wait, options));

    useEffect(() => {
        return () => {
            fnRef.current.cancel();
        }
    }, []);

    return fnRef.current;
}

export default useDebounce;

import React, {createRef, useEffect, useRef} from 'react';
import {makeStyles} from '@material-ui/styles';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import {connect} from 'react-redux';
import MobileDetect from 'mobile-detect';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const handlerNameByEvent = {
    'ps-scroll-y'     : 'onScrollY',
    'ps-scroll-x'     : 'onScrollX',
    'ps-scroll-up'    : 'onScrollUp',
    'ps-scroll-down'  : 'onScrollDown',
    'ps-scroll-left'  : 'onScrollLeft',
    'ps-scroll-right' : 'onScrollRight',
    'ps-y-reach-start': 'onYReachStart',
    'ps-y-reach-end'  : 'onYReachEnd',
    'ps-x-reach-start': 'onXReachStart',
    'ps-x-reach-end'  : 'onXReachEnd'
};
Object.freeze(handlerNameByEvent);

const useStyles = makeStyles(theme => ({
    root: {}
}));

const FuseScrollbars = React.forwardRef(function FuseScrollbars(props, ref) {
    ref = ref || createRef();
    const ps = useRef(null);
    const handlerByEvent = useRef(new Map());
    const classes = useStyles();

    useEffect(() => {
        props.customScrollbars ? createPs() : destroyPs();
    }, [props.customScrollbars]);

    useEffect(() => {
        updatePs();
    });

    useEffect(() => {
        if ( props.scrollToTopOnChildChange )
        {
            scrollToTop();
        }
    }, [props.children]);

    useEffect(() => {
        return () => {
            destroyPs();
        }
    }, []);

    function updatePs()
    {
        if ( !ps.current )
        {
            return;
        }
        ps.current.update();
    }

    function destroyPs()
    {
        // console.info("destroy::ps");

        unHookUpEvents();

        if ( !ps.current )
        {
            return;
        }
        ps.current.destroy();
        ps.current = null;
    }

    function createPs()
    {
        // console.info("create::ps");

        if ( isMobile || !ref || ps.current )
        {
            return;
        }

        ps.current = new PerfectScrollbar(ref.current, props.option);

        hookUpEvents();
    }

    function hookUpEvents()
    {
        Object.keys(handlerNameByEvent).forEach((key) => {
            const callback = props[handlerNameByEvent[key]];
            if ( callback )
            {
                const handler = () => callback(ref.current);
                handlerByEvent.current.set(key, handler);
                ref.current.addEventListener(key, handler, false);
            }
        });
    }

    function unHookUpEvents()
    {
        Object.keys(handlerByEvent.current).forEach((value, key) => {
            ref.current.removeEventListener(key, value, false);
        });
        handlerByEvent.current.clear();
    }

    function scrollToTop()
    {
        ref.current.scrollTop = 0;
    }

    // console.info('render::ps');
    return (
        <div
            id={props.id}
            className={classNames(classes.root, props.className)}
            style={
                (props.customScrollbars && (props.enable || true) && !isMobile) ?
                    {
                        position: 'relative',
                        overflow: 'hidden'
                    } : {}
            }
            ref={ref}
        >
            {props.children}
        </div>
    );
});

function mapStateToProps({fuse})
{
    return {
        customScrollbars: fuse.settings.current.customScrollbars
    }
}

FuseScrollbars.propTypes = {
    onScrollY               : PropTypes.func,
    onScrollX               : PropTypes.func,
    onScrollUp              : PropTypes.func,
    onScrollDown            : PropTypes.func,
    onScrollLeft            : PropTypes.func,
    onScrollRight           : PropTypes.func,
    onYReachStart           : PropTypes.func,
    onYReachEnd             : PropTypes.func,
    onXReachStart           : PropTypes.func,
    onXReachEnd             : PropTypes.func,
    scrollToTopOnChildChange: PropTypes.bool,
};

FuseScrollbars.defaultProps = {
    className               : '',
    enable                  : true,
    scrollToTopOnChildChange: false,
    option                  : {
        wheelPropagation: true
    },
    ref                     : undefined,
    onScrollY               : undefined,
    onScrollX               : undefined,
    onScrollUp              : undefined,
    onScrollDown            : undefined,
    onScrollLeft            : undefined,
    onScrollRight           : undefined,
    onYReachStart           : undefined,
    onYReachEnd             : undefined,
    onXReachStart           : undefined,
    onXReachEnd             : undefined
};

export default connect(mapStateToProps, null, null, {forwardRef: true})(React.memo(FuseScrollbars));

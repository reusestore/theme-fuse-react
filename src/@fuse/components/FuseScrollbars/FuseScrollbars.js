import React, {Component} from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import {bindActionCreators} from 'redux';
import {withStyles} from 'material-ui/styles/index';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

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

const styles = theme => ({
    root: {}
});

class FuseScrollbars extends Component {
    constructor(props)
    {
        super(props);
        this._handlerByEvent = new Map();
    }

    componentDidMount()
    {
        this.createPs();
        // console.info('componentDidMount: create Ps');
    }

    componentWillReceiveProps(nextProps)
    {
        if ( nextProps.customScrollbars )
        {
            // console.info('componentWillReceiveProps: create Ps');
            setTimeout(() => {
                this.createPs();
            });
        }
        else
        {
            // console.info('componentWillReceiveProps: destroy Ps');
            setTimeout(() => {
                this.destroyPs();
            });
        }
    }

    componentDidUpdate()
    {
        this.updatePs();
    }

    componentWillUnmount()
    {
        // console.info('componentWillUnmount: destroy Ps');
        this.destroyPs();
    }

    updatePs = () => {
        if ( !this._ps )
        {
            return;
        }
        this._ps.update();
    };

    destroyPs = () => {
        // console.info('destroy Ps');
        if ( !this._ps )
        {
            return;
        }
        // unhook up evens
        Object.keys(this._handlerByEvent).forEach((value, key) => {
            this._container.removeEventListener(key, value, false);
        });
        this._handlerByEvent.clear();
        this._ps.destroy();
        this._ps = null;
    };

    createPs = () => {
        // console.info('create Ps');
        if ( !this._container || this._ps )
        {
            return;
        }

        this._ps = new PerfectScrollbar(this._container, this.props.option);

        // hook up events
        Object.keys(handlerNameByEvent).forEach((key) => {
            const callback = this.props[handlerNameByEvent[key]];
            if ( callback )
            {
                const handler = () => callback(this._container);
                this._handlerByEvent.set(key, handler);
                this._container.addEventListener(key, handler, false);
            }
        });
    };

    handleRef = (ref) => {
        this._container = ref;
        this.props.containerRef(ref);
    };

    render()
    {
        const {children, className, customScrollbars, enable} = this.props;

        return (
            customScrollbars && enable ?
                <div className={className}
                     style={{
                         position: 'relative',
                         overflow: 'hidden'
                     }}
                     ref={this.handleRef}>
                    {children}
                </div>
                :
                <div className={this.props.className}>
                    {this.props.children}
                </div>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({}, dispatch);
}

function mapStateToProps({fuse})
{
    return {
        customScrollbars: fuse.settings.customScrollbars
    }
}

FuseScrollbars.defaultProps = {
    className    : '',
    enable       : true,
    option       : undefined,
    containerRef : () => {
    },
    onScrollY    : undefined,
    onScrollX    : undefined,
    onScrollUp   : undefined,
    onScrollDown : undefined,
    onScrollLeft : undefined,
    onScrollRight: undefined,
    onYReachStart: undefined,
    onYReachEnd  : undefined,
    onXReachStart: undefined,
    onXReachEnd  : undefined
};

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(FuseScrollbars)));

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {withStyles} from 'material-ui/styles/index';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {DemoContent} from '@fuse';

const styles = theme => ({});

class DemoApp2 extends Component {

    componentWillMount()
    {
        console.info('will mount');

    }

    componentDidMount()
    {
        console.info('did mount');
    }

    componentWillReceiveProps(nextProps)
    {
        console.info('ReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        console.info('shouldComponentUpdate');

        return true;
    }

    componentWillUpdate(nextProps, nextState)
    {

    }

    componentDidUpdate(prevProps, prevState)
    {

    }

    componentWillUnmount()
    {

    }

    render()
    {
        return (
            <div className="p-24">
                <h1>Demo 2</h1>
                <DemoContent/>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
    }, dispatch);
}

function mapStateToProps()
{
    return {
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(DemoApp2)));

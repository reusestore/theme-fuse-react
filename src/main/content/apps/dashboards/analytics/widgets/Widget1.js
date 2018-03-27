import React, {Component} from 'react';
import {FuseThemes} from '@fuse';
import blue from 'material-ui/es/colors/blue';
import {Button, MuiThemeProvider, Typography} from 'material-ui';
import {Line} from 'react-chartjs-2';
import {withStyles} from 'material-ui/styles/index';
import _ from 'lodash';

const styles = theme => ({
    root: {}
});

class Widget1 extends Component {
    state = {
        dataset: '2017'
    };

    setDataSet = (dataset) => {
        this.setState({dataset});
    };

    render()
    {
        const {classes, data: dataRaw} = this.props;
        const {dataset} = this.state;
        const data = _.merge({}, dataRaw);

        return (
            <MuiThemeProvider theme={FuseThemes.darkTheme}>
                <div style={{backgroundColor: blue[600]}} className={classes.root}>

                    <div className="relative p-24 flex flex-row justify-between items-center">
                        <div className="flex-col">
                            <Typography className="h2">Visitors</Typography>
                            <Typography className="h5" color="textSecondary">Unique visitors by month</Typography>
                        </div>
                        <div className="flex flex-row items-center">
                            {Object.keys(data.datasets).map((key) => (
                                <Button key={key} className="py-8 px-12" size="small"
                                        onClick={() => this.setDataSet(key)} disabled={key === dataset}>
                                    {key}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-256 pb-16">
                        <Line data={{
                            labels  : data.labels,
                            datasets: data.datasets[dataset]
                        }} options={data.options}/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Widget1);

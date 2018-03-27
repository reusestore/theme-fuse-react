import React, {Component} from 'react';
import {Button, Card, Typography} from 'material-ui';
import {Line} from 'react-chartjs-2';
import {withStyles} from 'material-ui/styles/index';
import classNames from 'classnames';
import _ from 'lodash';

const styles = theme => ({
    root: {}
});

class Widget5 extends Component {

    state = {
        dataset: 'today'
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
            <Card className={classNames(classes.root, "w-full")}>
                <div className="relative p-24 flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                        <Typography className="h2">Visitors & Page views</Typography>
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

                <Typography className="relative h-320 pb-16">
                    <Line data={{
                        labels  : data.labels,
                        datasets: data.datasets[dataset]
                    }} options={data.options}/>
                </Typography>
            </Card>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Widget5);

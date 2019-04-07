import React, {useState} from 'react';
import {Button, Typography} from '@material-ui/core';
import {makeStyles, useTheme, ThemeProvider} from '@material-ui/styles';
import {FuseAnimate} from '@fuse';
import {Line} from 'react-chartjs-2';
import _ from '@lodash';
import connect from 'react-redux/es/connect/connect';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + theme.palette.primary.main + ' 100%)',
    }
}));

function Widget1(props)
{
    const classes = useStyles(props);
    const theme = useTheme();
    const [dataset, setDataset] = useState('2017');
    const data = _.merge({}, props.data);

    return (
        <ThemeProvider theme={props.mainThemeDark}>
            <div className={classes.root}>
                <div className="container relative p-16 sm:p-24 flex flex-row justify-between items-center">

                    <FuseAnimate delay={100}>
                        <div className="flex-col">
                            <Typography className="h2">Visitors</Typography>
                            <Typography className="h5" color="textSecondary">Unique visitors by month</Typography>
                        </div>
                    </FuseAnimate>

                    <div className="flex flex-row items-center">
                        {Object.keys(data.datasets).map((key) => (
                            <Button
                                key={key}
                                className="py-8 px-12"
                                size="small"
                                onClick={() => setDataset(key)}
                                disabled={key === dataset}
                            >
                                {key}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="container relative h-200 sm:h-256 pb-16">
                    <Line
                        data={{
                            labels  : data.labels,
                            datasets: data.datasets[dataset].map(obj => ({
                                ...obj,
                                borderColor              : theme.palette.secondary.main,
                                backgroundColor          : theme.palette.secondary.main,
                                pointBackgroundColor     : theme.palette.secondary.dark,
                                pointHoverBackgroundColor: theme.palette.secondary.main,
                                pointBorderColor         : theme.palette.secondary.contrastText,
                                pointHoverBorderColor    : theme.palette.secondary.contrastText
                            }))
                        }}
                        options={data.options}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
}

function mapStateToProps({fuse})
{
    return {
        mainThemeDark: fuse.settings.mainThemeDark
    }
}

export default connect(mapStateToProps)(React.memo(Widget1));

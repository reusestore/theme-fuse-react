import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {Typography} from '@material-ui/core';

const styles = theme => ({
    layoutRoot: {}
});

class CodeSplittingDoc extends Component {

    render()
    {
        const {classes} = this.props;

        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="flex flex-1 items-center justify-between p-24">
                        <Typography variant="h6">Code Splitting (Lazy loading)</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="mb-16" component="p">
                            Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance
                            of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the
                            amount of code needed during the initial load.
                        </Typography>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Route-based code splitting</Typography>

                        <Typography className="mb-16" component="p">
                            We are using <a href="https://github.com/thejameskyle/react-loadable" target="_blank" rel="noopener noreferrer" className="font-bold">React
                            Loadable</a> library and created FuseLoadable higher order component for to avoid repetition of Loadable component defaults.<br/>
                            Checkout the examples below to see dynamically or regular way of importing the components.
                        </Typography>

                        <div className="flex flex-wrap">

                            <div className="w-full lg:w-1/2 lg:pr-8">
                                <Typography className="mt-32 mb-8" variant="h6">Lazy Loaded Component:</Typography>

                                <FuseHighlight component="pre" className="language-jsx my-16">
                                    {`
                            import {FuseLoadable} from '@fuse';

                            export const AnalyticsDashboardAppConfig = {
                                settings: {
                                    layout: {
                                        config: {}
                                    }
                                },
                                routes  : [
                                    {
                                        path     : '/apps/dashboards/analytics',
                                        component: FuseLoadable({
                                            loader: () => import('./AnalyticsDashboardApp')
                                        })
                                    }
                                ]
                            };
                            `}
                                </FuseHighlight>
                            </div>

                            <div className="w-full lg:w-1/2 lg:pl-8">
                                <Typography className="mt-32 mb-8" variant="h6">Regular Loaded Component:</Typography>

                                <FuseHighlight component="pre" className="language-jsx my-16">
                                    {`
                                    import AnalyticsDashboardApp from './AnalyticsDashboardApp';

                                    export const AnalyticsDashboardAppConfig = {
                                        settings: {
                                            layout: {
                                                config: {}
                                            }
                                        },
                                        routes  : [
                                            {
                                                path     : '/apps/dashboards/analytics',
                                                component: AnalyticsDashboardApp
                                            }
                                        ]
                                    };
                                  `}
                                </FuseHighlight>
                            </div>
                        </div>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Code splitting the Redux reducers (Dynamically loaded reducers)</Typography>

                        <Typography className="mb-16" component="p">
                            We created Higher Order Component <code className="language-bash">withReducer</code> to load redux reducer before the component render.<br/>
                            You just need to pass <b>key</b> and the <b>reducer</b> to the component.
                        </Typography>

                        <FuseHighlight component="pre" className="language-jsx my-16">
                            {`
                              import withReducer from 'store/withReducer';
                              import reducer from './store/reducers';
                              .
                              .
                              export default withReducer('analyticsDashboardApp', reducer)(AnalyticsDashboardApp);
                            `}
                        </FuseHighlight>
                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(CodeSplittingDoc);

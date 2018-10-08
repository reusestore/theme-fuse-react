import React from "react";
import {injectReducer} from 'store';

const withReducer = (key, reducer) => WrappedComponent =>
    class extends React.PureComponent {
        constructor()
        {
            super();
            injectReducer(key, reducer);
        };

        render()
        {
            return <WrappedComponent {...this.props} />;
        };
    };

export default withReducer;

import React, {PureComponent} from 'react';
import {withStyles} from 'material-ui';
import * as Prism from 'prismjs';
import './prism-languages';

const styles = theme => ({
    root: {}
});

class FuseHighlight extends PureComponent {

    static defaultProps = {
        component: `code`
    };

    componentWillMount(){
        this.trimCode();
    }

    componentDidMount()
    {
        this.highlight()
    }

    trimCode()
    {
        // Split the source into lines
        const sourceLines = this.props.children.split('\n');

        // Remove the first and the last line of the source
        // code if they are blank lines. This way, the html
        // can be formatted properly while using fuse-highlight
        // component
        if ( !sourceLines[0].trim() )
        {
            sourceLines.shift();
        }

        if ( !sourceLines[sourceLines.length - 1].trim() )
        {
            sourceLines.pop();
        }

        // Find the first non-whitespace char index in
        // the first line of the source code
        const indexOfFirstChar = sourceLines[0].search(/\S|$/);

        // Generate the trimmed source
        let source = '';

        // Iterate through all the lines
        sourceLines.forEach((line, index) => {

            // Trim the beginning white space depending on the index
            // and concat the source code
            source = source + line.substr(indexOfFirstChar, line.length);

            // If it's not the last line...
            if ( index !== sourceLines.length - 1 )
            {
                // Add a line break at the end
                source = source + '\n';
            }
        });
        this.source = source;
    }

    componentDidUpdate()
    {
        this.highlight()
    }

    highlight()
    {
        Prism.highlightElement(this.domNode, this.props.async)
    }

    handleRefMount = domNode => {
        this.domNode = domNode
    };

    render()
    {
        const {className, component: Wrapper} = this.props;

        return (
            <Wrapper ref={this.handleRefMount} className={className}>
                {this.source}
            </Wrapper>
        )
    }
}

export default withStyles(styles)(FuseHighlight);

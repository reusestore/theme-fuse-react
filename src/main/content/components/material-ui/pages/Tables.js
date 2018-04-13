import React from 'react';
import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from 'material-ui';
import {withStyles} from 'material-ui/styles/index';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint no-unused-vars: off */
const styles = theme => ({
    layoutRoot: {}
});

function Tables({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Tables</Typography>
                    <Button
                        className="normal-case"
                        variant="raised"
                        component="a"
                        href="https://material-ui-next.com/demos/tables"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Tables</Typography>
                    <Typography className="mb-16" component="div"><a href="https://material.io/guidelines/components/data-tables.html">Data tables</a> display sets of raw data.
                        They usually appear in desktop enterprise products.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Structure</Typography>
                    <Typography className="mb-16" component="div">A data table contains a header row at the top that lists column names, followed by rows for data.</Typography>
                    <Typography className="mb-16" component="div">Checkboxes should accompany each row if the user needs to select or manipulate data.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Table</Typography>
                    <Typography className="mb-16" component="div">A simple example with no frills.</Typography>
                    <FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tables/SimpleTable.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tables/SimpleTable.js')}
                    />

                    <Typography className="text-32 mt-32 mb-8" component="h2">Sorting &amp; Selecting</Typography>
                    <Typography className="mb-16" component="div">This example demonstrates the use of <code>Checkbox</code> and clickable rows for selection, with a
                        custom <code>Toolbar</code>. It uses the <code>TableSortLabel</code> component to help style column headings.</Typography>
                    <Typography className="mb-16" component="div">The Table has been given a fixed width to demonstrate horizontal scrolling. In order to prevent the pagination
                        controls from scrolling, the TablePagination component is used outside of the Table. (The <a href="#custom-table-pagination-action">&#39;Custom Table
                            Pagination Action&#39; example</a> below shows the pagination within the TableFooter.)</Typography>
                    <FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tables/EnhancedTable.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tables/EnhancedTable.js')}
                    />

                    <Typography className="text-32 mt-32 mb-8" component="h2">Custom Table Pagination Action</Typography>
                    <Typography className="mb-16" component="div">The <code>Action</code> property of the <code>TablePagination</code> component allows the implementation of
                        custom actions.</Typography>
                    <FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tables/CustomPaginationActionsTable.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tables/CustomPaginationActionsTable.js')}
                    />

                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized tables</Typography>
                    <Typography className="mb-16" component="div">You can customize the look and feel of the table by overriding the styles of the <code>TableCell</code> component.</Typography>
                    <FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tables/CustomizedTable.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tables/CustomizedTable.js')}
                    />

                    <Typography className="text-32 mt-32 mb-8" component="h2">Advanced use cases</Typography>
                    <Typography className="mb-16" component="div">For more advanced use cases you might be able to take advantage of <a
                        href="https://devexpress.github.io/devextreme-reactive/react/grid/">dx-react-grid-material-ui</a>. It&#39;s a data grid for Material-UI with paging,
                        sorting, filtering, grouping and editing features.</Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Tables);
                        
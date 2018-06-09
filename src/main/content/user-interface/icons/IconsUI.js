import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FusePageSimple, FuseAnimate} from '@fuse';
import axios from 'axios/index';
import {Button, Icon, Input, Typography} from '@material-ui/core';

const styles = theme => ({
    layoutRoot: {}
});

class IconsUI extends Component {
    state = {
        data      : [],
        searchText: ''
    };

    componentDidMount()
    {
        axios.get('/api/icons').then(res => {
            this.setState({data: res.data});
        });
    }

    handleSearch = event => {
        this.setState({searchText: event.target.value});
    };

    render()
    {
        const {classes} = this.props;
        const {data, searchText} = this.state;
        const icons = searchText.length > 0 ? data.filter(item => {
            for ( let keyword of item.keywords )
            {
                if ( keyword.includes(searchText) )
                {
                    return true;
                }
            }
            return false;
        }) : data;

        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="flex flex-1 items-center justify-between p-24">

                        <FuseAnimate>
                            <Typography variant="title">Icons</Typography>
                        </FuseAnimate>

                        <Button
                            className="normal-case"
                            variant="raised"
                            component="a"
                            href="https://material.io/icons/"
                            target="_blank"
                        >
                            <Icon className="mr-4">link</Icon>
                            Reference
                        </Button>
                    </div>
                }
                contentToolbar={
                    <div className="flex flex-1 items-center p-24 max-w-2xl mx-auto">
                        <Input
                            placeholder="Search..."
                            className="pl-16"
                            disableUnderline
                            fullWidth
                            value={searchText}
                            onChange={this.handleSearch}
                            inputProps={{
                                'aria-label': 'Search'
                            }}
                        />
                        <Icon color="action" className="mr-16">search</Icon>
                    </div>
                }
                content={
                    <div className="py-24 max-w-2xl mx-auto">
                        <FuseAnimate animation="transition.slideUpBigIn" delay={300}>
                            <div className="flex flex-wrap justify-center">
                                {icons.map((item) => (
                                    <div className="w-128 h-128 p-16 flex flex-col items-center justify-center" key={item.id}>
                                        <Icon className="text-48" color="action">{item.ligature}</Icon>
                                        <Typography variant="caption" className="mt-4">{item.ligature}</Typography>
                                    </div>
                                ))}
                            </div>
                        </FuseAnimate>
                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(IconsUI);

import React, {Component} from 'react';
import {withStyles, Button, FormControl, Input, InputLabel, Tab, Tabs, TextField, InputAdornment, FormHelperText, Icon, Typography} from '@material-ui/core';
import {orange} from '@material-ui/core/colors';
import {FuseAnimate, FusePageCarded, FuseChipSelect} from '@fuse';
import {Link, withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import * as Actions from '../store/actions';
import classNames from 'classnames';
import _ from 'lodash';

const styles = theme => ({
    productImageFeaturedStar: {
        position: 'absolute',
        top     : 0,
        right   : 0,
        color   : orange[400],
        opacity : 0
    },
    productImageItem        : {
        width                   : 128,
        height                  : 128,
        display                 : 'flex',
        alignItems              : 'center',
        justifyItems            : 'center',
        position                : 'relative',
        borderRadius            : 4,
        marginRight             : 16,
        marginBottom            : 16,
        overflow                : 'hidden',
        boxShadow               : theme.shadows[0],
        transitionProperty      : 'box-shadow',
        transitionDuration      : theme.transitions.duration.short,
        transitionTimingFunction: theme.transitions.easing.easeInOut,
        cursor                  : 'pointer',
        '&:hover'               : {
            boxShadow                    : theme.shadows[5],
            '& $productImageFeaturedStar': {
                opacity: .8
            }
        },
        '&.featured'            : {
            pointerEvents                      : 'none',
            boxShadow                          : theme.shadows[3],
            '& $productImageFeaturedStar'      : {
                opacity: 1
            },
            '&:hover $productImageFeaturedStar': {
                opacity: 1
            }
        }
    }
});

class Product extends Component {
    state = {
        tabValue: 0,
        form    : null
    };

    componentDidMount()
    {
        const params = this.props.match.params;
        const {productId} = params;

        if ( productId === 'new' )
        {
            this.props.newProduct();
        }
        else
        {
            this.props.getProduct(this.props.match.params);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        if ( this.props.product.data && !this.state.form )
        {
            this.setState({form: this.props.product.data})
        }
    }

    handleChangeTab = (event, tabValue) => {
        this.setState({tabValue});
    };

    handleChange = (event) => {
        this.setState({form: _.set({...this.state.form}, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value)});
    };

    handleChipChange = (value, name) => {
        this.setState({form: _.set({...this.state.form}, name, value.map(item => item.value))});
    };

    setFeaturedImage = (id) => {
        this.setState({form: _.set({...this.state.form}, 'featuredImage', id)});
    };

    canBeSubmitted()
    {
        const {name} = this.state.form;
        return (
            name.length > 0 &&
            !_.isEqual(this.props.product.data, this.state.form)
        );
    }

    render()
    {
        const {classes, saveProduct} = this.props;
        const {tabValue, form} = this.state;

        return (
            <FusePageCarded
                classes={{toolbar: "p-0"}}
                header={
                    form && (
                        <div className="flex flex-1 flex-col w-full sm:flex-row items-center justify-between p-8 md:p-24">

                            <div className="flex flex-col items-center sm:items-start max-w-full">

                                <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                    <Typography className="normal-case flex items-center mb-12" component={Link} role="button" to="/apps/e-commerce/products">
                                        <Icon className="mr-4 text-20">arrow_back</Icon>
                                        Products
                                    </Typography>
                                </FuseAnimate>

                                <div className="flex items-center max-w-full">
                                    <FuseAnimate animation="transition.expandIn" delay={300}>
                                        {form.images.length > 0 ? (
                                            <img className="w-48 mr-16 rounded" src={_.find(form.images, {id: form.featuredImage}).url} alt={form.name}/>
                                        ) : (
                                            <img className="w-48 mr-16 rounded" src="assets/images/ecommerce/product-image-placeholder.png" alt={form.name}/>
                                        )}
                                    </FuseAnimate>
                                    <div className="flex flex-col min-w-0">
                                        <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                            <Typography variant="title" className="truncate">
                                                {form.name ? form.name : 'New Product'}
                                            </Typography>
                                        </FuseAnimate>
                                        <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                            <Typography variant="caption">Product Detail</Typography>
                                        </FuseAnimate>
                                    </div>
                                </div>
                            </div>
                            <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                <Button
                                    className="whitespace-no-wrap"
                                    variant="contained"
                                    disabled={!this.canBeSubmitted()}
                                    onClick={() => saveProduct(form)}
                                >
                                    Save
                                </Button>
                            </FuseAnimate>
                        </div>
                    )
                }
                contentToolbar={
                    <Tabs
                        value={tabValue}
                        onChange={this.handleChangeTab}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollable
                        scrollButtons="auto"
                        classes={{root: "w-full h-64"}}
                    >
                        <Tab className="h-64 normal-case" label="Basic Info"/>
                        <Tab className="h-64 normal-case" label="Product Images"/>
                        <Tab className="h-64 normal-case" label="Pricing"/>
                        <Tab className="h-64 normal-case" label="Inventory"/>
                        <Tab className="h-64 normal-case" label="Shipping"/>
                    </Tabs>
                }
                content={
                    form && (
                        <div className="p-24 max-w-2xl">
                            {tabValue === 0 &&
                            (
                                <div>
                                    <FormControl
                                        className="mb-24"
                                        error={form.name === ''}
                                        required
                                        fullWidth
                                    >
                                        <InputLabel htmlFor="name">Name</InputLabel>
                                        <Input
                                            autoFocus
                                            id="name"
                                            name="name"
                                            value={form.name}
                                            onChange={this.handleChange}
                                        />
                                    </FormControl>

                                    <TextField
                                        className="mb-24"
                                        id="description"
                                        name="description"
                                        onChange={this.handleChange}
                                        label="Description"
                                        type="text"
                                        value={form.description}
                                        multiline
                                        rows={5}
                                        fullWidth
                                    />

                                    <FuseChipSelect
                                        className="mb-24"
                                        value={
                                            form.categories.map(item => ({
                                                value: item,
                                                label: item
                                            }))
                                        }
                                        onChange={(value) => this.handleChipChange(value, 'categories')}
                                        placeholder="Select multiple categories"
                                        textFieldProps={{
                                            label          : 'Categories',
                                            InputLabelProps: {
                                                shrink: true
                                            }
                                        }}
                                        isMulti
                                    />

                                    <FuseChipSelect
                                        className="mb-24"
                                        value={
                                            form.tags.map(item => ({
                                                value: item,
                                                label: item
                                            }))
                                        }
                                        onChange={(value) => this.handleChipChange(value, 'tags')}
                                        placeholder="Select multiple tags"
                                        textFieldProps={{
                                            label          : 'Tags',
                                            InputLabelProps: {
                                                shrink: true
                                            }
                                        }}
                                        isMulti
                                    />
                                </div>
                            )}
                            {tabValue === 1 && (
                                <div>
                                    <div className="flex flex-wrap">
                                        {form.images.map(media => (
                                            <div
                                                onClick={() => this.setFeaturedImage(media.id)}
                                                className={classNames(classes.productImageItem, (media.id === form.featuredImage) && 'featured')}
                                                key={media.id}
                                            >
                                                <Icon className={classes.productImageFeaturedStar}>star</Icon>
                                                <img className="max-w-none w-auto h-full" src={media.url} alt="product"/>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {tabValue === 2 && (
                                <div>
                                    <FormControl fullWidth className="mb-24">
                                        <InputLabel htmlFor="adornment-amount">Tax Excluded Price</InputLabel>
                                        <Input
                                            id="priceTaxExcl"
                                            name="priceTaxExcl"
                                            value={form.priceTaxExcl}
                                            onChange={this.handleChange}
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            type="number"
                                        />
                                    </FormControl>

                                    <FormControl fullWidth className="mb-24">
                                        <InputLabel htmlFor="priceTaxIncl">Tax Included Price</InputLabel>
                                        <Input
                                            id="priceTaxIncl"
                                            name="priceTaxIncl"
                                            value={form.priceTaxIncl}
                                            onChange={this.handleChange}
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            type="number"
                                        />
                                    </FormControl>

                                    <FormControl fullWidth className="mb-24">
                                        <InputLabel htmlFor="taxRate">Tax Rate</InputLabel>
                                        <Input
                                            id="taxRate"
                                            name="taxRate"
                                            value={form.taxRate}
                                            onChange={this.handleChange}
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            type="number"
                                        />
                                    </FormControl>

                                    <FormControl fullWidth className="mb-24">
                                        <InputLabel htmlFor="comparedPrice">Compared Price</InputLabel>
                                        <Input
                                            id="comparedPrice"
                                            name="comparedPrice"
                                            value={form.comparedPrice}
                                            onChange={this.handleChange}
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            type="number"
                                        />
                                        <FormHelperText>Add a compare price to show next to the real price</FormHelperText>
                                    </FormControl>
                                </div>
                            )}
                            {tabValue === 3 && (
                                <div>
                                    <FormControl
                                        className="mb-24"
                                        error={form.name === ''}
                                        required
                                        fullWidth
                                    >
                                        <InputLabel htmlFor="sku">SKU</InputLabel>
                                        <Input
                                            autoFocus
                                            id="sku"
                                            name="sku"
                                            value={form.sku}
                                            onChange={this.handleChange}
                                        />
                                    </FormControl>

                                    <FormControl fullWidth className="mb-24">
                                        <InputLabel htmlFor="quantity">Quantity</InputLabel>
                                        <Input
                                            id="quantity"
                                            name="quantity"
                                            value={form.quantity}
                                            onChange={this.handleChange}
                                            type="number"
                                        />
                                    </FormControl>
                                </div>
                            )}
                            {tabValue === 4 && (
                                <div>
                                    <div className="flex">
                                        <FormControl fullWidth className="mb-24 mr-8">
                                            <InputLabel htmlFor="width">Width</InputLabel>
                                            <Input
                                                id="width"
                                                name="width"
                                                value={form.width}
                                                onChange={this.handleChange}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className="mb-24 mr-8">
                                            <InputLabel htmlFor="height">Height</InputLabel>
                                            <Input
                                                id="height"
                                                name="height"
                                                value={form.height}
                                                onChange={this.handleChange}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className="mb-24 mr-8">
                                            <InputLabel htmlFor="depth">Depth</InputLabel>
                                            <Input
                                                id="depth"
                                                name="depth"
                                                value={form.depth}
                                                onChange={this.handleChange}
                                            />
                                        </FormControl>
                                    </div>

                                    <FormControl fullWidth className="mb-24">
                                        <InputLabel htmlFor="weight">Weight</InputLabel>
                                        <Input
                                            id="weight"
                                            name="weight"
                                            value={form.weight}
                                            onChange={this.handleChange}
                                        />
                                    </FormControl>

                                    <FormControl fullWidth className="mb-24">
                                        <InputLabel htmlFor="extraShippingFee">Extra Shipping Fee</InputLabel>
                                        <Input
                                            id="extraShippingFee"
                                            name="extraShippingFee"
                                            value={form.extraShippingFee}
                                            onChange={this.handleChange}
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            type="number"
                                        />
                                    </FormControl>
                                </div>
                            )}
                        </div>
                    )
                }
                innerScroll
            />
        )
    };
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getProduct : Actions.getProduct,
        newProduct : Actions.newProduct,
        saveProduct: Actions.saveProduct
    }, dispatch);
}

function mapStateToProps({eCommerceApp})
{
    return {
        product: eCommerceApp.product
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(Product)));

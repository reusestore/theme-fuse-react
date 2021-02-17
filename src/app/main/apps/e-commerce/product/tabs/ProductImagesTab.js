import { orange } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import clsx from 'clsx';
import FuseUtils from '@fuse/utils';
import _ from '@lodash';

const useStyles = makeStyles(theme => ({
	productImageFeaturedStar: {
		position: 'absolute',
		top: 0,
		right: 0,
		color: orange[400],
		opacity: 0
	},
	productImageUpload: {
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut
	},
	productImageItem: {
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			'& $productImageFeaturedStar': {
				opacity: 0.8
			}
		},
		'&.featured': {
			pointerEvents: 'none',
			boxShadow: theme.shadows[3],
			'& $productImageFeaturedStar': {
				opacity: 1
			},
			'&:hover $productImageFeaturedStar': {
				opacity: 1
			}
		}
	}
}));

function ProductImagesTab(props) {
	const classes = useStyles(props);
	const { form, handleChange, setInForm, setForm } = props;

	function handleUploadChange(e) {
		const file = e.target.files[0];
		if (!file) {
			return;
		}
		const reader = new FileReader();
		reader.readAsBinaryString(file);

		reader.onload = () => {
			setForm(
				_.set({ ...form }, `images`, [
					{
						id: FuseUtils.generateGUID(),
						url: `data:${file.type};base64,${btoa(reader.result)}`,
						type: 'image'
					},
					...form.images
				])
			);
		};

		reader.onerror = () => {
			console.log('error on load image');
		};
	}
	return (
		<div>
			<div className="flex justify-center sm:justify-start flex-wrap -mx-16">
				<label
					htmlFor="button-file"
					className={clsx(
						classes.productImageUpload,
						'flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer shadow hover:shadow-lg'
					)}
				>
					<input
						accept="image/*"
						className="hidden"
						id="button-file"
						type="file"
						onChange={handleUploadChange}
					/>
					<Icon fontSize="large" color="action">
						cloud_upload
					</Icon>
				</label>
				{form.images.map(media => (
					<div
						onClick={() => setInForm('featuredImageId', media.id)}
						onKeyDown={() => setInForm('featuredImageId', media.id)}
						role="button"
						tabIndex={0}
						className={clsx(
							classes.productImageItem,
							'flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg',
							media.id === form.featuredImageId && 'featured'
						)}
						key={media.id}
					>
						<Icon className={classes.productImageFeaturedStar}>star</Icon>
						<img className="max-w-none w-auto h-full" src={media.url} alt="product" />
					</div>
				))}
			</div>
		</div>
	);
}

export default ProductImagesTab;

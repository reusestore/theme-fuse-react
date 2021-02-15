import TextField from '@material-ui/core/TextField';
import React from 'react';
import FuseChipSelect from '@fuse/core/FuseChipSelect/FuseChipSelect';

function BasicInfoTab(props) {
	const { form, handleChange, setInForm, setForm } = props;

	return (
		<div>
			<TextField
				className="mt-8 mb-16"
				error={form.name === ''}
				required
				label="Name"
				autoFocus
				id="name"
				name="name"
				value={form.name}
				onChange={handleChange}
				variant="outlined"
				fullWidth
			/>

			<TextField
				className="mt-8 mb-16"
				id="description"
				name="description"
				onChange={handleChange}
				label="Description"
				type="text"
				value={form.description}
				multiline
				rows={5}
				variant="outlined"
				fullWidth
			/>

			<FuseChipSelect
				className="mt-8 mb-24"
				value={form.categories.map(item => ({
					value: item,
					label: item
				}))}
				onChange={value => setInForm('categories', value)}
				placeholder="Select multiple categories"
				textFieldProps={{
					label: 'Categories',
					InputLabelProps: {
						shrink: true
					},
					variant: 'outlined'
				}}
				isMulti
			/>

			<FuseChipSelect
				className="mt-8 mb-16"
				value={form.tags.map(item => ({
					value: item,
					label: item
				}))}
				onChange={value => setInForm('tags', value)}
				placeholder="Select multiple tags"
				textFieldProps={{
					label: 'Tags',
					InputLabelProps: {
						shrink: true
					},
					variant: 'outlined'
				}}
				isMulti
			/>
		</div>
	);
}

export default BasicInfoTab;

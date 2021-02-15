import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import React from 'react';

function ShippingTab(props) {
	const { form, handleChange, setInForm, setForm } = props;

	return (
		<div>
			<div className="flex -mx-4">
				<TextField
					className="mt-8 mb-16 mx-4"
					label="Width"
					autoFocus
					id="width"
					name="width"
					value={form.width}
					onChange={handleChange}
					variant="outlined"
					fullWidth
				/>

				<TextField
					className="mt-8 mb-16 mx-4"
					label="Height"
					id="height"
					name="height"
					value={form.height}
					onChange={handleChange}
					variant="outlined"
					fullWidth
				/>

				<TextField
					className="mt-8 mb-16 mx-4"
					label="Depth"
					id="depth"
					name="depth"
					value={form.depth}
					onChange={handleChange}
					variant="outlined"
					fullWidth
				/>
			</div>

			<TextField
				className="mt-8 mb-16"
				label="Weight"
				id="weight"
				name="weight"
				value={form.weight}
				onChange={handleChange}
				variant="outlined"
				fullWidth
			/>

			<TextField
				className="mt-8 mb-16"
				label="Extra Shipping Fee"
				id="extraShippingFee"
				name="extraShippingFee"
				value={form.extraShippingFee}
				onChange={handleChange}
				variant="outlined"
				InputProps={{
					startAdornment: <InputAdornment position="start">$</InputAdornment>
				}}
				fullWidth
			/>
		</div>
	);
}

export default ShippingTab;

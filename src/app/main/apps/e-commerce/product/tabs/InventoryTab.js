import TextField from '@material-ui/core/TextField';
import React from 'react';

function InventoryTab(props) {
	const { form, handleChange, setInForm, setForm } = props;

	return (
		<div>
			<TextField
				className="mt-8 mb-16"
				required
				label="SKU"
				autoFocus
				id="sku"
				name="sku"
				value={form.sku}
				onChange={handleChange}
				variant="outlined"
				fullWidth
			/>

			<TextField
				className="mt-8 mb-16"
				label="Quantity"
				id="quantity"
				name="quantity"
				value={form.quantity}
				onChange={handleChange}
				variant="outlined"
				type="number"
				fullWidth
			/>
		</div>
	);
}

export default InventoryTab;

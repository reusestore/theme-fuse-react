import TextField from '@material-ui/core/TextField';
import { useFormContext } from 'react-hook-form';

function InventoryTab(props) {
	const methods = useFormContext();
	const { register } = methods;

	return (
		<div>
			<TextField
				className="mt-8 mb-16"
				required
				label="SKU"
				autoFocus
				id="sku"
				name="sku"
				inputRef={register}
				variant="outlined"
				fullWidth
			/>

			<TextField
				className="mt-8 mb-16"
				label="Quantity"
				id="quantity"
				name="quantity"
				inputRef={register}
				variant="outlined"
				type="number"
				fullWidth
			/>
		</div>
	);
}

export default InventoryTab;

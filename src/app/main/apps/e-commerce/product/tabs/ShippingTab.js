import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { useFormContext } from 'react-hook-form';

function ShippingTab(props) {
	const methods = useFormContext();
	const { register } = methods;

	return (
		<div>
			<div className="flex -mx-4">
				<TextField
					className="mt-8 mb-16 mx-4"
					label="Width"
					autoFocus
					id="width"
					name="width"
					inputRef={register}
					variant="outlined"
					fullWidth
				/>

				<TextField
					className="mt-8 mb-16 mx-4"
					label="Height"
					id="height"
					name="height"
					inputRef={register}
					variant="outlined"
					fullWidth
				/>

				<TextField
					className="mt-8 mb-16 mx-4"
					label="Depth"
					id="depth"
					name="depth"
					inputRef={register}
					variant="outlined"
					fullWidth
				/>
			</div>

			<TextField
				className="mt-8 mb-16"
				label="Weight"
				id="weight"
				name="weight"
				inputRef={register}
				variant="outlined"
				fullWidth
			/>

			<TextField
				className="mt-8 mb-16"
				label="Extra Shipping Fee"
				id="extraShippingFee"
				name="extraShippingFee"
				inputRef={register}
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

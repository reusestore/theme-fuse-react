import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { useFormContext } from 'react-hook-form';

function PricingTab(props) {
	const methods = useFormContext();
	const { register } = methods;

	return (
		<div>
			<TextField
				className="mt-8 mb-16"
				label="Tax Excluded Price"
				id="priceTaxExcl"
				name="priceTaxExcl"
				inputRef={register}
				InputProps={{
					startAdornment: <InputAdornment position="start">$</InputAdornment>
				}}
				type="number"
				variant="outlined"
				autoFocus
				fullWidth
			/>

			<TextField
				className="mt-8 mb-16"
				label="Tax Included Price"
				id="priceTaxIncl"
				name="priceTaxIncl"
				inputRef={register}
				InputProps={{
					startAdornment: <InputAdornment position="start">$</InputAdornment>
				}}
				type="number"
				variant="outlined"
				fullWidth
			/>

			<TextField
				className="mt-8 mb-16"
				label="Tax Rate"
				id="taxRate"
				name="taxRate"
				inputRef={register}
				InputProps={{
					startAdornment: <InputAdornment position="start">$</InputAdornment>
				}}
				type="number"
				variant="outlined"
				fullWidth
			/>

			<TextField
				className="mt-8 mb-16"
				label="Compared Price"
				id="comparedPrice"
				name="comparedPrice"
				inputRef={register}
				InputProps={{
					startAdornment: <InputAdornment position="start">$</InputAdornment>
				}}
				type="number"
				variant="outlined"
				fullWidth
				helperText="Add a compare price to show next to the real price"
			/>
		</div>
	);
}

export default PricingTab;

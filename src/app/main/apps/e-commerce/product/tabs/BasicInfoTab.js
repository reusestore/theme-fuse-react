import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import { useFormContext, Controller } from 'react-hook-form';

function BasicInfoTab(props) {
	const methods = useFormContext();
	const { register, control, errors } = methods;

	return (
		<div>
			<TextField
				className="mt-8 mb-16"
				error={!!errors.name}
				required
				helperText={errors?.name?.message}
				label="Name"
				autoFocus
				id="name"
				name="name"
				inputRef={register()}
				variant="outlined"
				fullWidth
			/>

			<TextField
				className="mt-8 mb-16"
				id="description"
				name="description"
				inputRef={register}
				label="Description"
				type="text"
				multiline
				rows={5}
				variant="outlined"
				fullWidth
			/>

			<Controller
				name="categories"
				control={control}
				defaultValue={[]}
				render={({ onChange, value }) => (
					<Autocomplete
						className="mt-8 mb-16"
						multiple
						freeSolo
						options={[]}
						value={value}
						onChange={(event, newValue) => {
							onChange(newValue);
						}}
						renderInput={params => (
							<TextField
								{...params}
								placeholder="Select multiple categories"
								label="Categories"
								variant="outlined"
								InputLabelProps={{
									shrink: true
								}}
							/>
						)}
					/>
				)}
			/>

			<Controller
				name="tags"
				control={control}
				defaultValue={[]}
				render={({ onChange, value }) => (
					<Autocomplete
						className="mt-8 mb-16"
						multiple
						freeSolo
						options={[]}
						value={value}
						onChange={(event, newValue) => {
							onChange(newValue);
						}}
						renderInput={params => (
							<TextField
								{...params}
								placeholder="Select multiple tags"
								label="Tags"
								variant="outlined"
								InputLabelProps={{
									shrink: true
								}}
							/>
						)}
					/>
				)}
			/>
		</div>
	);
}

export default BasicInfoTab;

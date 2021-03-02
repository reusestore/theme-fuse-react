import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { submitRegister } from 'app/auth/store/registerSlice';
import * as yup from 'yup';
import _ from '@lodash';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
	displayName: yup.string().required('You must enter display name'),
	email: yup.string().email('You must enter a valid email').required('You must enter a email'),
	password: yup
		.string()
		.required('Please enter your password.')
		.min(8, 'Password is too short - should be 8 chars minimum.'),
	passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});

const defaultValues = {
	displayName: '',
	email: '',
	password: '',
	passwordConfirm: ''
};

function JWTRegisterTab(props) {
	const dispatch = useDispatch();
	const authRegister = useSelector(({ auth }) => auth.register);

	const { register, formState, handleSubmit, reset, errors, setError } = useForm({
		mode: 'onChange',
		defaultValues,
		resolver: yupResolver(schema)
	});

	const { isValid, dirtyFields } = formState;

	useEffect(() => {
		authRegister.errors.forEach(error => {
			setError(error.type, {
				type: 'manual',
				message: error.message
			});
		});
	}, [authRegister.errors, setError]);

	function onSubmit(model) {
		dispatch(submitRegister(model));
	}

	return (
		<div className="w-full">
			<form className="flex flex-col justify-center w-full" onSubmit={handleSubmit(onSubmit)}>
				<TextField
					className="mb-16"
					type="text"
					name="displayName"
					label="Display name"
					inputRef={register}
					error={!!errors.displayName}
					helperText={errors?.displayName?.message}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
									person
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					required
				/>

				<TextField
					className="mb-16"
					type="text"
					name="email"
					inputRef={register}
					error={!!errors.email}
					helperText={errors?.email?.message}
					label="Email"
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
									email
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					required
				/>

				<TextField
					className="mb-16"
					type="password"
					label="Password"
					name="password"
					inputRef={register}
					error={!!errors.password}
					helperText={errors?.password?.message}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
									vpn_key
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					required
				/>

				<TextField
					className="mb-16"
					type="password"
					label="Confirm Password"
					name="passwordConfirmm"
					inputRef={register}
					error={!!errors.passwordConfirm}
					helperText={errors?.passwordConfirm?.message}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
									vpn_key
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					required
				/>

				<Button
					type="submit"
					variant="contained"
					color="primary"
					className="w-full mx-auto mt-16"
					aria-label="REGISTER"
					disabled={_.isEmpty(dirtyFields) || !isValid}
					value="legacy"
				>
					Register
				</Button>
			</form>
		</div>
	);
}

export default JWTRegisterTab;

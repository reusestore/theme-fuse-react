import { yupResolver } from '@hookform/resolvers/yup';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles(theme => ({
	root: {
		background: `radial-gradient(${darken(theme.palette.primary.dark, 0.5)} 0%, ${theme.palette.primary.dark} 80%)`,
		color: theme.palette.primary.contrastText
	}
}));

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
	password: yup
		.string()
		.required('Please enter your password.')
		.min(8, 'Password is too short - should be 8 chars minimum.')
});

const defaultValues = {
	password: ''
};

function LockPage() {
	const classes = useStyles();
	const { register, formState, handleSubmit, reset, errors } = useForm({
		mode: 'onChange',
		defaultValues,
		resolver: yupResolver(schema)
	});

	const { isValid, dirtyFields } = formState;

	function onSubmit() {
		reset(defaultValues);
	}
	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto items-center justify-center p-16 sm:p-32')}>
			<div className="flex flex-col items-center justify-center w-full">
				<motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
					<Card className="w-full max-w-sm">
						<CardContent className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32">
							<div className="min-w-full flex flex-col items-center justify-center sm:flex-row sm:justify-start sm:items-center -mx-8">
								<div className="relative mx-8">
									<Avatar className="w-72 h-72" src="assets/images/avatars/katherine.jpg" />
									<Icon className="text-32 absolute right-0 bottom-0" color="error">
										lock
									</Icon>
								</div>

								<div className="mx-8 flex flex-col items-center sm:items-start">
									<Typography variant="h6" className="mb-4 font-semibold">
										Your session is locked
									</Typography>
									<Typography color="textSecondary" className="font-medium">
										Due to inactivity, your session is locked. Enter your password to continue.
									</Typography>
								</div>
							</div>

							<form
								name="lockForm"
								noValidate
								className="flex flex-col justify-center w-full mt-32"
								onSubmit={handleSubmit(onSubmit)}
							>
								<TextField
									className="mb-16"
									label="Username"
									name="name"
									value="Katherine"
									variant="outlined"
									fullWidth
									disabled
								/>

								<TextField
									className="mb-16"
									label="Password"
									type="password"
									name="password"
									inputRef={register}
									error={!!errors.password}
									helperText={errors?.password?.message}
									variant="outlined"
									required
									fullWidth
								/>

								<Button
									variant="contained"
									color="primary"
									className="w-224 mx-auto mt-16"
									aria-label="Reset"
									disabled={_.isEmpty(dirtyFields) || !isValid}
									type="submit"
								>
									Unlock
								</Button>
							</form>

							<div className="flex flex-col items-center justify-center pt-32 pb-24">
								<Link className="font-normal" to="/pages/auth/login">
									Are you not Katherine?
								</Link>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</div>
	);
}

export default LockPage;

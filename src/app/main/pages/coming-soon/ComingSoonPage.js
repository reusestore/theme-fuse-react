import FuseCountdown from '@fuse/core/FuseCountdown';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import * as yup from 'yup';
import _ from '@lodash';

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
	email: yup.string().email('You must enter a valid email').required('You must enter a email')
});

const defaultValues = {
	email: ''
};

function ComingSoonPage() {
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
		<div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32')}>
			<div className="flex flex-col items-center justify-center w-full">
				<motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
					<Card className="w-full max-w-384">
						<CardContent className="flex flex-col items-center justify-center p-32 text-center">
							<img className="w-128 m-32" src="assets/images/logos/fuse.svg" alt="logo" />

							<Typography variant="subtitle1" className="mb-16 font-normal">
								Hey! Thank you for checking out our app.
							</Typography>

							<Typography color="textSecondary" className="max-w-288">
								It’s not quite ready yet, but we are working hard and it will be ready in approximately:
							</Typography>

							<FuseCountdown endDate="2023-07-28" className="my-48" />

							<Divider className="w-48" />

							<Typography className="font-semibold my-32 w-full">
								If you would like to be notified when the app is ready, you can subscribe to our e-mail
								list.
							</Typography>

							<form
								name="subscribeForm"
								noValidate
								className="flex flex-col justify-center w-full"
								onSubmit={handleSubmit(onSubmit)}
							>
								<TextField
									className="mb-16"
									label="Email"
									autoFocus
									type="email"
									name="email"
									inputRef={register}
									error={!!errors.email}
									helperText={errors?.email?.message}
									variant="outlined"
									required
									fullWidth
								/>

								<Button
									variant="contained"
									color="primary"
									className="w-224 mx-auto my-16"
									aria-label="Subscribe"
									disabled={_.isEmpty(dirtyFields) || !isValid}
									type="submit"
								>
									Subscribe
								</Button>
							</form>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</div>
	);
}

export default ComingSoonPage;

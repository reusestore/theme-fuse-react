import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useForm } from 'react-hook-form';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import NoteListItemModel from 'app/main/apps/notes/model/NoteListItemModel';
import * as yup from 'yup';
import _ from '@lodash';

const defaultValues = {
	text: ''
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
	text: yup.string().required('You must enter a label title')
});

function NoteFormAddListItem(props) {
	const { register, formState, handleSubmit, reset, errors } = useForm({
		mode: 'onChange',
		defaultValues,
		resolver: yupResolver(schema)
	});

	const { isValid, dirtyFields } = formState;

	function onSubmit(data) {
		props.onListItemAdd(NoteListItemModel(data));
		reset(defaultValues);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<ListItem className="p-0" dense>
				<TextField
					className="flex flex-1"
					name="text"
					error={!!errors.text}
					helperText={errors?.text?.message}
					inputRef={register}
					placeholder="Add an item"
					variant="standard"
					autoFocus
					hiddenLabel
					InputProps={{
						disableUnderline: true,
						className: 'px-2',
						startAdornment: (
							<InputAdornment position="start">
								<IconButton
									className="w-32 h-32 p-0 -mx-6"
									aria-label="Add"
									type="submit"
									disabled={_.isEmpty(dirtyFields) || !isValid}
								>
									<Icon fontSize="small">add</Icon>
								</IconButton>
							</InputAdornment>
						)
					}}
				/>
			</ListItem>
		</form>
	);
}

export default NoteFormAddListItem;

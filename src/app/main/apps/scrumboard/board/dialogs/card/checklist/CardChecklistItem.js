import { Controller, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import _ from '@lodash';

function CardChecklistItem(props) {
	const { item, onListItemChange, index } = props;
	const { register, watch, control } = useForm({ mode: 'onChange', defaultValues: item });
	const form = watch();

	useEffect(() => {
		const newItem = { ...item, ...form };
		if (!_.isEqual(item, newItem)) {
			onListItemChange(newItem, index);
		}
	}, [form, index, onListItemChange, item]);

	return (
		<ListItem className="px-0" key={item.id} dense>
			<Controller
				name="checked"
				control={control}
				defaultValue={false}
				render={({ onChange, value }) => (
					<Checkbox
						tabIndex={-1}
						checked={value}
						onChange={ev => onChange(ev.target.checked)}
						disableRipple
					/>
				)}
			/>
			<TextField className="flex flex-1 mx-8" name="name" inputRef={register} variant="outlined" />
			<IconButton aria-label="Delete" onClick={props.onListItemRemove}>
				<Icon>delete</Icon>
			</IconButton>
		</ListItem>
	);
}

export default CardChecklistItem;

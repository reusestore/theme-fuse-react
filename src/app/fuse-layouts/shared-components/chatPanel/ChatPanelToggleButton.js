import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleChatPanel } from './store/stateSlice';

const ChatPanelToggleButton = props => {
	const dispatch = useDispatch();

	return (
		<IconButton className="w-64 h-64" onClick={ev => dispatch(toggleChatPanel())}>
			{props.children}
		</IconButton>
	);
};

ChatPanelToggleButton.defaultProps = {
	children: <Icon>chat</Icon>
};

export default ChatPanelToggleButton;

import {withFormsy} from 'formsy-react';
import React, {Component} from 'react';
import {TextField} from 'material-ui';
import _ from 'lodash';

class TextFieldFormsy extends Component {

    changeValue = (event) => {
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        // Important: Don't skip this step. This pattern is required
        // for Formsy to work.
        this.props.setValue(event.currentTarget.value);
    };

    render()
    {
        const importedProps = _.pick(this.props, [
            'autoComplete',
            'autoFocus',
            'children',
            'className',
            'defaultValue',
            'disabled',
            'FormHelperTextProps',
            'fullWidth',
            'id',
            'InputLabelProps',
            'inputProps',
            'InputProps',
            'inputRef',
            'label',
            'multiline',
            'name',
            'onBlur',
            'onChange',
            'onFocus',
            'placeholder',
            'required',
            'rows',
            'rowsMax',
            'select',
            'SelectProps',
            'type'
        ]);

        // An error message is returned only if the component is invalid
        const errorMessage = this.props.getErrorMessage();
        return (
            <TextField
                {...importedProps}
                onChange={this.changeValue}
                value={this.props.getValue() || ''}
                error={Boolean(errorMessage)}
                helperText={errorMessage}
            />
        );
    }
}

export default withFormsy(TextFieldFormsy);
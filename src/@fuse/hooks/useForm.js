import {useState} from 'react';
import _ from '../../@lodash';

function useForm(initialState, onSubmit)
{
    const [form, setForm] = useState(initialState);

    function handleChange(event)
    {
        event.persist();
        setForm(
            {
                ...form,
                [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
            }
        );
    }

    function resetForm()
    {
        setForm(initialState);
    }

    function setInForm(name,value)
    {
        setForm(_.setIn(form, name, value));
    }

    function handleSubmit(event)
    {
        if ( event )
        {
            event.preventDefault();
        }
        if ( onSubmit )
        {
            onSubmit();
        }
    }

    return {
        form,
        handleChange,
        handleSubmit,
        resetForm,
        setForm,
        setInForm
    }
}

export default useForm;

import {useState} from 'react';

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
        setForm
    }
}

export default useForm;

import React from 'react';
import TextInput from 'ps-react-arnar/TextInput';

/** Required TextBox with error */
export default class ExampleOptional extends React.Component {
    render() {
        return (
            <TextInput
                htmlId='example-optional'
                label='First Name'
                name='firstname'
                required={true}
                error='First name is required.'
                onChange={() => {}} />
        );
    }
};
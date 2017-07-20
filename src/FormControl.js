import {FormControl as BootstrapFormControl} from 'react-bootstrap'
import React from 'react';

const FormControl = (props) => {

    handleInputChange = event => {
        const target = event.target;

        _this.setState(state => {
            const {registration} = state;
            registration[target.name] = target.type === 'checkbox' ? target.checked : target.value;
            return {registration}
        });
    };
    return <BootstrapFormControl onChange={handleInputChange}  {...props} />;
};

export default FormControl;
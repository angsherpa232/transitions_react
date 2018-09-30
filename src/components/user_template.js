import React, { Component } from 'react';
import PropTypes from 'prop-types';

const UserTemplate = (props) => {
    console.log(props)
    return (
        <div>
            UserTemplate
        </div>
    );
}

UserTemplate.propTypes = {
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.oneOf(['ang dadwa', 'namdol'])
    ]),
    lastname: PropTypes.string,
    age: PropTypes.number,
    hobbies: PropTypes.array,
    spanish: PropTypes.bool,
    message: PropTypes.func,
    car: PropTypes.object,
    remark: PropTypes.string.isRequired
}

export default UserTemplate;
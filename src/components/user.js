import React, { Component } from 'react';
import UserTemplate from './user_template';

class User extends Component {

    state = {
        name: 'ang dawa',
        lastname: 'sherpa',
        age: 27,
        hobbies: ['run','jump'],
        spanish: false,
        message(){console.log('hey')},
        car: {brand: "Ford",kilo: 4567},
        remark: 'Das is best'
    }

    render() {
        return (
            <div>
                <UserTemplate {...this.state}/>
            </div>
        );
    }
}

export default User;
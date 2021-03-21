import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleError, toggleMessage } from '../../redux/actions';

interface Props {

}

const Login: React.FC<Props> = (props: any) => {
    const [userId, setUserId] = useState('firstUser');
    const [password, setPassword] = useState('example');
    
    const login = () => {
        console.log(userId, password);
        const params = {
            user_id: userId, password
        }
        axios.get('http://localhost:5050/login', { params }).then((response) => {
            localStorage.setItem('token', response.data.data)
            props.toggleMessage('Login success');
        }).catch((error) => {
            props.toggleError(error.response.data.error);
        })

    }

    return (
        <form>
            <div>
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    value={userId}
                    onChange={e => {
                        setUserId(e.target.value);
                    }}
                />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                />
            </div>
            <button
                type="submit"
                onClick={e => {
                    e.preventDefault();
                    login();
                }}>
                Login
            </button>
        </form>
    );
};


const mapDispatchToProps = (dispatch: any) => {
    return {
        toggleError: (error: String) => dispatch(toggleError(error)),
        toggleMessage: (error: String) => dispatch(toggleMessage(error))
    }
}

export default connect(null, mapDispatchToProps)(Login)
import { useState } from 'react';
import { Alert, Button, TextField } from '@mui/material';
const SignUp = ({ client }) => {

    const [userDetails, setUserDetails] = useState(
        {
            username: '',
            password: ''
        }
    );
    const [error, setError] = useState(undefined);

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setError(undefined);
        client.signUpApi(userDetails.username, userDetails.password)
            .then(() => {
                setUserDetails({ username: '', password: '' });
            })
            .catch((error) => {
                setError(error.response.data.message);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && (
                <Alert severity="error">{error}</Alert>
            )}
            <TextField
                label="Username"
                onChange={handleChange}
                type="text"
                name="username"
                value={userDetails.username}
            />
            <TextField
                label="Password"
                onChange={handleChange}
                type="password"
                name="password"
                value={userDetails.password}
            />
            <Button variant="contained" type="submit">Create Account</Button>
        </form>
    );
};


export default SignUp;
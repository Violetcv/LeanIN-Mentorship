import { useState } from 'react';
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { useHistory } from 'react-router-dom';

export const Auth = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const history = useHistory();


    const signIn = () =>{
        // history.push('/signin');    
    }
    return(
        <div>
            <input placeholder = "Email..." onChange={(e) => setEmail(e.target.value)}/>

            <input placeholder="Password..."/>

            <button onClick={signIn}>Sign In</button>

        </div>
    );
};
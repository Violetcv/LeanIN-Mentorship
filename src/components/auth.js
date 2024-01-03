import { useState } from 'react';
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const Auth = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = () =>{

    }
    return(
        <div>
            <input placeholder = "Email..." onChange={(e) => setEmail(e.target.value)}/>

            <input placeholder="Password..."/>

            <button onClick={signIn}>Sign In</button>

        </div>
    );
};
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/services/api';
import styles from './Login.module.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const data = await login(email, password);
            localStorage.setItem('token', data.token);
            router.push('/');
        } catch (error) {
            console.error('Error logging in', error);
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1>Sign In</h1>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className={styles.input}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Let&#39;s go</button>

            </form>
        </div>
    );
};

export default LoginPage;

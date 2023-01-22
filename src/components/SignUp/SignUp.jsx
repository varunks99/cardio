import React from 'react';

import {
    Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import apiClient from '../../clients/api-client';

const theme = createTheme();

export default function SignUp({ setTab }) {
    const signUpUser = async (user) => {
        try {
            const { data } = await apiClient.post('/auth/register', user);
            localStorage.setItem('cardio-auth', data.access_token);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const user = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
        };

        await signUpUser(user);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="firstName"
                                    type="text"
                                    label="First Name"
                                    autoComplete="given-name"
                                    required
                                    autoFocus
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="lastName"
                                    type="text"
                                    label="Last Name"
                                    autoComplete="family-name"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="password"
                                    type="password"
                                    label="Password"
                                    autoComplete="new-password"
                                    required
                                    fullWidth
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link onClick={() => setTab(2)} variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

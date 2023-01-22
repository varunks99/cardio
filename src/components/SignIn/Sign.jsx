import React from 'react';

import {
  Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography, Paper
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import apiClient from '../../clients/api-client';

import Logo from './C.png';

const theme = createTheme();

export default function SignIn() {
    const loginUser = async (user) => {
        try {
            console.log(user)
            const { data } = await apiClient.post('/auth/login', user);
            console.log(data)
            localStorage.setItem('cardio-auth', data.access_token);
        } catch (error) {
            console.log(error)
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const user = {
            email: data.get('email'),
            password: data.get('password'),
        };

        await loginUser(user);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Paper>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: 5,
                        }}
                        style={{ fontFamily: 'Jost', textAlign: 'center' }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <img  src={Logo} alt="fireSpot" style={{ height: '50px' }} />
                        </Avatar>
                        <Typography component="h1" variant="h3" fontWeight='fontWeightMedium' style={{ color: 'rgb(64, 62, 61)', fontWeight: '700' }}>
                            Welcome back
                        </Typography>
                        <Typography variant="h6">The card that pays you first</Typography>
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                name="email"
                                type="email"
                                label="Email Address"
                                autoComplete="email"
                                required
                                autoFocus
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                name="password"
                                type="password"
                                label="Password"
                                autoComplete="current-password"
                                required
                                fullWidth
                                margin="normal"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Typography>Don't have an account? <Link href="#" variant="body2" style={{ color: "black", fontWeight: "900" }}>Sign Up</Link></Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </ThemeProvider>
    );
}

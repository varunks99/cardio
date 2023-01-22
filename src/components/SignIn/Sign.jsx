import React, { useContext } from 'react';

import {
    Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography, Paper
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import apiClient from '../../clients/api-client';

import Logo from './C.png';

const theme = createTheme();
export default function SignIn({ handleLogin, setTab }) {

    const loginUser = async (user) => {
        try {
            console.log(user)
            const { data } = await apiClient.post('/auth/login', user);
            localStorage.setItem('cardio-auth', data.access_token);
            handleLogin();
        } catch (error) {
            console.error(error)
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
            <Container maxWidth="100%" sx={{ height: "100vh", p: 5, background: 'rgb(148, 0, 212)', mt: 0 }}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Paper elevation={5} sx={{ borderRadius: 6 }}>
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
                                <img src={Logo} alt="fireSpot" style={{ height: '50px' }} />
                            </Avatar>
                            <Typography component="h1" variant="h3" fontWeight='fontWeightMedium' style={{ color: 'rgb(148, 0, 212)', fontWeight: '700' }}>
                                Welcome back
                            </Typography>
                            <Typography variant="h6" sx={{ color: "rgb(148, 0, 212)" }}>The card that pays you first</Typography>
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
                                    sx={{ mt: 3, mb: 2, background: "rgb(148, 0, 212)", borderRadius: 5 }}

                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item>
                                        <Typography onClick={() => setTab(3)} >Don't have an account? <Link variant="body2" style={{ color: "black", fontWeight: "900" }}>Sign Up</Link></Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Paper>
                </Container>
            </Container>
        </ThemeProvider>
    );
}

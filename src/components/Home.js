import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SavingsIcon from '@mui/icons-material/Savings';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import { TokenContext } from "../App";
import apiClient from "../clients/api-client";

export const Home = ({ transactions }) => {
    const token = useContext(TokenContext);
    const [user, setUser] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const user = await apiClient.get('/account', { headers: { authorization: `Bearer ${token}` } });
                if (!user.data) {
                    await apiClient.post('/account', { "creditLimit": 1000 }, { headers: { authorization: `Bearer ${token}` } });
                } else setUser(user.data);
            } catch (e) {
                console.error(e)
            }
        })()

    }, [transactions])
    return <Container>
        <Grid container justifyContent="center" spacing={2} sx={{ p: 4 }}>
            <Grid item xs={6} md={3}>
                <Card sx={{ borderRadius: 5 }}>
                    <CardContent sx={{ background: "rgb(148, 0, 212)", color: "#fff" }}>
                        <Typography textAlign="center"><PriceCheckIcon sx={{ fontSize: 40 }} /></Typography>
                        <Typography textAlign="center" fontWeight="bold">Balance</Typography>
                        <Typography textAlign="center" fontWeight="bold" variant="h5">${user.balance}</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} md={3}>
                <Card sx={{ borderRadius: 5 }}>
                    <CardContent sx={{ background: "rgb(148, 0, 212)", color: "#fff" }}>
                        <Typography textAlign="center"><SavingsIcon sx={{ fontSize: 40 }} /></Typography>
                        <Typography textAlign="center" fontWeight="bold">Earnings</Typography>
                        <Typography textAlign="center" fontWeight="bold" variant="h5">$739.25</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={8} sx={{ height: 400 }}>
                <Typography variant="h4" fontWeight="bold" sx={{ color: "rgb(148, 0, 212)" }} textAlign="center">Your earnings over time</Typography>
                <Line
                    options={{
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            },
                        },
                        scales: { y: { min: 0 } },
                        pointRadius: 0,
                        color: '#9747ff',
                    }} data={{
                        labels: Array(12).fill(''),
                        datasets: [{
                            data: Array(12).fill(true).map((e, i) => 500 * 1.12 ** i),
                            backgroundColor: '#9747ff',
                            borderColor: '#9747ff'
                        }]
                    }} />
            </Grid>
        </Grid>
    </Container>
}
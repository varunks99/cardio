import React from "react";
import { Line } from "react-chartjs-2";
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SavingsIcon from '@mui/icons-material/Savings';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

export const Home = () => {
    return <Container>
        <Grid container justifyContent="center" spacing={2} sx={{ p: 4 }}>
            <Grid item xs={6} md={3}>
                <Card sx={{ borderRadius: 5 }}>
                    <CardContent sx={{ background: "rgb(148, 0, 212)", color: "#fff" }}>
                        <Typography textAlign="center"><PriceCheckIcon sx={{ fontSize: 40 }} /></Typography>
                        <Typography textAlign="center" fontWeight="bold">Budget</Typography>
                        <Typography textAlign="center" fontWeight="bold" variant="h5">$140.00</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} md={3}>
                <Card sx={{ borderRadius: 5 }}>
                    <CardContent sx={{ background: "rgb(148, 0, 212)", color: "#fff" }}>
                        <Typography textAlign="center"><SavingsIcon sx={{ fontSize: 40 }} /></Typography>
                        <Typography textAlign="center" fontWeight="bold">Savings</Typography>
                        <Typography textAlign="center" fontWeight="bold" variant="h5">$1739.25</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={8} sx={{ height: 400 }}>
                <Line
                    options={{
                        maintainAspectRatio: false,
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
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export function Earnings() {
    const principals = [1000,
        1070,
        1144.9,
        1225.043,
        1310.79601,
        1402.551731,
        1500.730352,
        1605.781476,
        1718.18618,
        1838.459212,
        1967.151357,
        2104.851952,
        2252.191589,
        2409.845,
        2578.53415,
        2759.031541,
        2952.163749,
        3158.815211,
        3379.932276,
        3616.527535,
        3869.684462]
    const w_interest = principals.map(x => x * 1.07)
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Savings"
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text:
                        "Month"
                },
                grid: {
                    display: false
                }
            },
            y: {
                title: {
                    display: true,
                    text: "CAD",
                },
                grid: {
                    display: false
                }
            },
        },
    };

    const data = {
        labels: Array(principals.length).fill(0),
        datasets: [
            {
                label: "Principal",
                data: principals,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: w_interest,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <>
            <Container sx={{ mt: 3 }}>
                <Grid container spacing={2} sx={{ height: "90vh" }} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Card sx={{ minWidth: 275, boxShadow: 4, borderRadius: 3 }}>
                            <CardContent>
                                <Typography variant="h5" textAlign="center" color="text.secondary" >
                                    You have saved
                                </Typography>
                                <Typography variant="h3" textAlign="center" fontWeight="bold" color="text.secondary" >
                                    $110.54
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Line options={options} data={data} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Stack direction="row" justifyContent="center" spacing={5}>
                            <Button variant="contained">Cash Out</Button>
                            <Button variant="contained">Pay Balance</Button>
                        </Stack>
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}
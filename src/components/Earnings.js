import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart, LinearScale, CategoryScale } from "chart.js"
import { Chart, registerables } from "chart.js"
import { Pie } from "react-chartjs-2";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import apiClient from "../clients/api-client";
import { useEffect, useState } from "react";

Chart.register(...registerables)

const Analytics = () => {
    const [rows, setRows] = useState([])
    const categories = {
        "Food & Drink": 200,
        "Entertainment": 150,
        "Travel": 80,
        "Bills and utilities": 100,
        "Miscellaneous": 300
    }

    const colors = {
        "Food & Drink": "rgb(148, 0, 212)",
        "Entertainment": "rgba(148, 0, 212, 0.9)",
        "Travel": "rgba(148, 0, 212, 0.7)",
        "Bills and utilities": "rgba(148, 0, 212, 0.5)",
        "Miscellaneous": "rgba(148, 0, 212, 0.3)"
    }


    useEffect(() => {
        (async () => {
            try {
                const { data } = await apiClient.get("/transactions", { headers: { authorization: `Bearer ${localStorage.getItem('cardio-auth')}` } });
                setRows(data)
            } catch {

            }
        })()
    }, [])



    return <Container>
        <Grid container justifyContent="center">
            <Grid item justifyContent="center" xs={12} md={5}>
                <Typography variant="h5" textAlign="center" fontWeight="bold" sx={{ color: "#9400d4", my: 2 }}>Category-wise spendings</Typography>
                <Pie
                    options={{ responsive: true }}
                    data={{
                        labels: Object.keys(categories),
                        datasets: [{
                            data: Object.values(categories),
                            backgroundColor: Object.values(colors),
                        }],
                    }} />
            </Grid>
            <Grid item justifyContent="center" xs={12} md={8} mt={5}>
                <Typography variant="h5" textAlign="center" fontWeight="bold" sx={{ color: "#9400d4", my: 2 }}>Transactions</Typography>
                <Stack width="100%" justifyContent="space-around">
                    {rows.map(row => (
                        <>
                            <Grid container justifyContent="center">
                                <Grid item xs={3} sx={{ color: colors[row.category] || "#9400d4" }}><Typography>{row.merchant}</Typography></Grid>
                                <Grid item xs={3}><Typography>{row.category}</Typography></Grid>
                                <Grid item xs={3}><Typography>{new Date(row.date).toLocaleDateString()}</Typography></Grid>
                                <Grid item xs={3} sx={{ color: colors[row.category] || "#9400d4" }}><Typography fontWeight={600} textAlign="right">${row.amount}</Typography></Grid>
                            </Grid>
                            <Divider sx={{ mb: 2 }} />
                        </>
                    ))}
                </Stack>
            </Grid>
        </Grid>
    </Container>
}

export default Analytics;
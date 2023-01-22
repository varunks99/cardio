import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart, LinearScale, CategoryScale } from "chart.js"
import { Chart, registerables } from "chart.js"
import { Pie } from "react-chartjs-2";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import apiClient from "../clients/api-client";
import Chip from '@mui/material/Chip';
import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../App";

Chart.register(...registerables)

const Analytics = () => {
    const token = useContext(TokenContext)
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
                const { data } = await apiClient.get("/transactions", { headers: { authorization: `Bearer ${token}` } });
                setRows(data)
            } catch (e) {
                console.log(e)
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
            <Grid item justifyContent="center" xs={12} md={8} mt={5} mb={8}>
                <Typography variant="h5" textAlign="center" fontWeight="bold" sx={{ color: "#9400d4", my: 2 }}>Transactions</Typography>
                <Stack width="100%" justifyContent="space-around">
                    {rows.map((row, i) => (
                        <>
                            <Grid container justifyContent="center" alignItems="center" sx={{ background: colors[row.category] || "#9400d4", color: "#fff", p: 2, borderRadius: i === 0 ? "20px 20px 0 0" : i === rows.length - 1 ? "0 0 20px 20px" : 0 }}>
                                <Grid item xs={4} md={3}><Typography fontWeight="bold">{row.merchant}</Typography></Grid>
                                <Grid item md={3} sx={{ display: { xs: "none", md: "block" } }}><Chip sx={{ color: "#fff", background: "rgba(255, 255, 2555, 0.3)" }} label={row.category} /></Grid>
                                <Grid item xs={4} md={3}><Typography>{new Date(row.date).toLocaleDateString()}</Typography></Grid>
                                <Grid item xs={4} md={3}><Typography variant="h6" textAlign="right" fontWeight={600}>${row.amount}</Typography></Grid>
                            </Grid>
                            <Divider sx={{ color: "#fff", height: 2 }} />
                        </>
                    ))}
                </Stack>
            </Grid>
        </Grid>
    </Container>
}

export default Analytics;
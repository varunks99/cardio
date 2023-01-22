import React from "react";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/system"

export const Home = () => {
    return <>
        <Box sx={{
            borderRadius: 4,
            background: "#9747ff",
            width: "70%",
            margin: "auto",
            textAlign: "center",
            lineHeight: "1em",
            fontSize: "24px",
            padding: 1,
            color: "white"
        }}>
            <p sx={{ display: 'inline-block', width: "100%" }}>Budget: $140.00</p>
            <p sx={{ display: 'inline-block', width: "100%" }}>Savings: $1739.25</p>
        </Box>
        <Line options={{
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
    </>
}
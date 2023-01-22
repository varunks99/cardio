import React, { useEffect, useState } from "react";
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
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        datasets: [
            {
                fill: true,
                label: "CAD saved/month",
                data: [10 * 1.07, 11 * 1.07, 14 * 1.07, 16 * 1.07, 18 * 1.07, 20 * 1.07, 22 * 1.07],
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    };

    return (
        <>
            <Line options={options} data={data} />
        </>
    )
}
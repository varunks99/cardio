
import { Box } from "@mui/system"
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart, LinearScale, CategoryScale } from "chart.js"
import { Chart, registerables } from "chart.js"
import { Pie, Bar } from "react-chartjs-2"


Chart.register(...registerables)


export const Earnings = () => {
    const hardcodedCategories = {
            "Food & Drink": 200,
            "Entertainment": 300,
            "Travel": 400,
            "Personal Development": 1000,
            "Miscellaneous": 350
    }

    const hardcodedMonths = {
        "January": 300,
        "February": 400,
        "March": 500,
        "April": 350
    }

    return <>
        <Box sx={{
            maxWidth: "60vmin",
            maxHeight: "60vmin",
            margin: "auto"
        }}>
            <Pie data={{
                labels: Object.keys(hardcodedCategories),
                datasets: [ {
                    data: Object.values(hardcodedCategories),
                    backgroundColor: [
                        'red',
                        'blue',
                        'yellow',
                        'green',
                        'purple'
                    ],
                } ],
            }} />
            <Bar options={{
                scales: {
                    y: { beginAtZero: true }
                }
            }} data={{
                labels: Object.keys(hardcodedMonths),
                // data: Object.values(hardcodedMonths)
                datasets: [
                    { data: Object.values(hardcodedMonths) }
                ]
            }}/>

        </Box>
    </>
}
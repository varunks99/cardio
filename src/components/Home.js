import { Box, List, ListItem, ListItemText } from "@mui/material"

const Transaction = ({ type, date, name, amount }) => {
    return <ListItem
        key={type+date+name+amount}
        sx={{ textAlign: "center",
    }}
    >
        <ListItemText primary={name} secondary={date + ", " + amount} />

    </ListItem>
}

export const Home = () => {
    const hardcodeTransactions = [
        { 
            type: "Payment",
            date: "Jan 12",
            name: "Pizza",
            amount: "$15.00"
        },
        { 
            type: "Payment",
            date: "Jan 12",
            name: "Pizza",
            amount: "$15.00"
        },
        { 
            type: "Payment",
            date: "Jan 12",
            name: "Pizza",
            amount: "$15.00"
        },
        { 
            type: "Payment",
            date: "Jan 12",
            name: "Pizza",
            amount: "$15.00"
        },
        { 
            type: "Payment",
            date: "Jan 12",
            name: "Pizza",
            amount: "$15.00"
        },
        { 
            type: "Payment",
            date: "Jan 12",
            name: "Pizza",
            amount: "$15.00"
        },
        { 
            type: "Payment",
            date: "Jan 12",
            name: "Pizza",
            amount: "$15.00"
        },
        { 
            type: "Payment",
            date: "Jan 12",
            name: "Pizza",
            amount: "$15.00"
        },
        { 
            type: "Payment",
            date: "Jan 12",
            name: "Pizza",
            amount: "$15.00"
        },
        { 
            type: "Payment",
            date: "Jan 12",
            name: "Pizza",
            amount: "$15.00"
        },
        
    ]

    return  <Box sx={{
        mx: "auto", 
        width: 450,
        textAlign: "center"
    }}>
        <h1>Home</h1>
        <h1>Balance: $250.00</h1>
        <List>
            { hardcodeTransactions.map(data => 
                <Transaction type={data.type} date={data.date} name={data.name} amount={data.amount} />
            ) }
        </List>
    </Box>
}
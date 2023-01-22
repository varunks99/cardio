import { BottomNavigation, BottomNavigationAction, SpeedDialIcon } from "@mui/material";
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const Navigation = ({ isLoggedIn, tab, setTab }) => {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={tab}
                onChange={(event, newValue) => {
                    setTab(newValue);
                }} >
                {isLoggedIn && <BottomNavigationAction label="Home" icon={<HomeIcon />} />}
                {isLoggedIn && <BottomNavigationAction label="Earnings" icon={<AttachMoneyIcon />} />}
                {!isLoggedIn && <BottomNavigationAction label="Sign In" icon={<SpeedDialIcon />} />}
                {!isLoggedIn && <BottomNavigationAction label="Sign Up" icon={<SpeedDialIcon />} />}
            </BottomNavigation>
        </Paper>
    )
}
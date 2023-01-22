import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

export const Navigation = ({ tab, setTab }) => {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={tab}
                onChange={(event, newValue) => {
                    setTab(newValue);
                }} >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Earnings" icon={<AttachMoneyIcon />} />
                <BottomNavigationAction label="Sign In" sx={{ display: "none" }} />
                <BottomNavigationAction label="Sign Up" sx={{ display: "none" }} />
            </BottomNavigation>
        </Paper>
    )
}
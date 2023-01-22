import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsIcon from '@mui/icons-material/Settings'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

export const Navigation = ({ tab, setTab }) => {
    return (
        <Paper sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
                color: '#9747ff',
                fontWeight: "bold"
            }
        }} elevation={3}>
            <BottomNavigation
                showLabels
                value={tab}
                onChange={(event, newValue) => {
                    setTab(newValue);
                }} >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Spending" icon={<AttachMoneyIcon />} />
                <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
                <BottomNavigationAction label="Sign In" icon={<LoginIcon />} sx={{ display: "none" }} />
                <BottomNavigationAction label="Sign Up" icon={<LogoutIcon />} sx={{ display: "none" }} />
            </BottomNavigation>
        </Paper>
    )
}

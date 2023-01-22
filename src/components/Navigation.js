import { BottomNavigation, BottomNavigationAction, SpeedDialIcon } from "@mui/material";
import Paper from '@mui/material/Paper';
export const Navigation = ({ tab, setTab }) => {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={tab}
                onChange={(event, newValue) => {
                    setTab(newValue);
                }} >
                <BottomNavigationAction label="Earnings" icon={<SpeedDialIcon />} />
                <BottomNavigationAction label="Home" icon={<SpeedDialIcon />} />
                <BottomNavigationAction label="Analytics" icon={<SpeedDialIcon />} />
            </BottomNavigation>
        </Paper>
    )
}
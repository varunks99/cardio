import { BottomNavigation, BottomNavigationAction, SpeedDialIcon } from "@mui/material";

export const Navigation = ({ tab, setTab }) => {
    return <BottomNavigation
        sx={{
            position: "fixed",
            width: "100%",
            bottom: 0
        }}
        showLabels
        value={tab}
        onChange={(event, newValue) => {
            setTab(newValue);
        }} >
        <BottomNavigationAction label="Earnings" icon={<SpeedDialIcon />} />
        <BottomNavigationAction label="Home" icon={<SpeedDialIcon />} />
        <BottomNavigationAction label="Analytics" icon={<SpeedDialIcon />} />
    </BottomNavigation>
}
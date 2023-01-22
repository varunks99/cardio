import { Box, Button, Input, MenuItem, Select } from "@mui/material"
import { useState } from "react"

export const Settings = () => {
    const logout = () => {
        delete localStorage['cardio-auth']
        document.location.reload()
    }

    const [fund, setFund] = useState("VCN")

    return <Box sx={{
        padding: 16,
        textAlign: "center"
    }}>
        <h3>Your fund</h3>
        <Select sx={{ width: 200 }} onChange={(_, update) => setFund(update.props.children)} value={fund}>
            <MenuItem value="VCN">VCN</MenuItem>
            <MenuItem value="XIC">XIC</MenuItem>
            <MenuItem value="HXT">HXT</MenuItem>
            <MenuItem value="XUU">XUU</MenuItem>
            <MenuItem value="VFV">VFV</MenuItem>
            <MenuItem value="ZSP">ZSP</MenuItem>
        </Select> <br />
        <Button onClick={logout}><h3 xc={{color: '#9747ff'}}>Logout</h3></Button>
    </Box>
}
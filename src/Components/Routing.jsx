import { Button, Link as MuiLink } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

const RouterButton = (props) => {
    return (
        <Button {...props} component={RouterLink} />
    )
}

const Link = (props) => <MuiLink {...props} component={RouterLink} />

export { 
    RouterButton,
    Link
}
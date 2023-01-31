import { Title } from "@mui/icons-material";
import { CssBaseline, Container, ThemeProvider, createTheme, AppBar, Toolbar, Typography, Button } from "@mui/material"
import { useEffect } from "react";

import { Outlet, useLocation, Link as RouterLink } from "react-router-dom"
import { RouterButton } from "./Components/Routing";
import { meta } from "./meta";

const metadesc = document.getElementById('metatag')
const getTitle = () => {}

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    }
  }
)

const TitleChanger = () => {
    const location = useLocation()
    const path = location.pathname

    useEffect(() => {
        let site = meta.find(site => site.path === path)
        if (site && site.title) {
            document.title = `${site.title} - Etusivut`
        } else {
            document.title = 'Etusivut'
        }

        if (site && site.desc) {
            metadesc.content = site.desc
        }
    }, [path])
}

const Layout = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <TitleChanger />
            <Navbar />
            <Container sx={{ mt: 2 }} >
                <Outlet />
            </Container>
        </ThemeProvider>
    )
}

const Navbar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="x1">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component={RouterButton}
                        to='/'
                        sx={{ color: 'white', display: 'block' }}
                    >
                        Etusivut
                    </Typography>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export {
    Layout
}
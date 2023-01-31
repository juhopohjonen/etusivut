import { Link as MuiLink, Paper, Typography, Box, Avatar, Button } from "@mui/material"
import Email from "@mui/icons-material/Email";

import { Link } from "../Components/Routing"

const email = 'verkkosivut@etusivut.com'


const Contact = () => {
    return (
        <>
            <Typography variant="h2" component='h1'>Ota yhteyttä</Typography>

            <Paper sx={{ maxWidth: '30rem', padding: 2, mt: 1 }} id='emailElem'>
                <Typography variant='h5' component='span'>
                    Sähköposti
                </Typography>

                <Box sx={{ display: 'flex' }}>

                    <Avatar sx={{ mt: 1 }}>
                        <Email />
                    </Avatar>

                    <Typography
                        variant='subtitle1'
                        component='span'
                        sx={{ mt: 1.8, ml: 1 }}
                    >

                        {email}
                    </Typography>

                </Box>

                
                <Button
                    variant='outlined'
                    sx={{ mt: 2, mb: 1 }}
                    href={`mailto:${email}`}
                >
                    Lähetä sähköpostia
                </Button>

                <Typography paragraph color='text.secondary'>
                    Vastaamme tyypillisesti seuraavan vuorokauden kuluessa.
                </Typography>
            </Paper>

       
        </>
    )
}

export default Contact
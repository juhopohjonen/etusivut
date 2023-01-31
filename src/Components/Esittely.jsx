import { Unstable_Grid2 as Grid2, Card, CardContent, Typography } from "@mui/material"

const Esittely = (props) => {
    const items = [{
        title: 'Hinta-laatusuhde',
        desc: 'Me emme veloita kohtuuttomia summia verkkosivuista, vaan toimimme reilusti pyrkien laadukkaaseen lopputulokseen.'
    },
    {
        title: 'Asiakkaalle räätälöity',
        desc: 'Verkkosivumme ovat uniikkeja ja niiden kehittämisessä otetaan huomioon asiakkaan toiveet ja vaatimukset.'
    }]

    return (
        <>
            <Grid2 {...props} container spacing={2} fluid>
                {items.map((item, i) => (
                    <Grid2 item xs={6} key={i}>
                        <Item key={i} contentProps={{ }} title={item.title} desc={item.desc} Icon={item.icon} />
                    </Grid2>
                ))}
            </Grid2>

            <Item
                title='Helppous'
                contentProps={{ sx: {
                    textAlign: 'center'
                }}}

                sx={{ mt: 1 }}

                desc="Et tarvitse palvelinta tai osaamista kehittää itse ohjelmistoja. Hoidamme kaiken ohjelmistokehityksestä verkkosivuston julkaisemiseen. Voit keskittyä itse täysillä siihen mitä teet - oli se sitten yritystoiminta tai jokin muu."
            />
        </>

    )
}

const Item = ({ title, Icon, desc, contentProps={}, sx }) => {
    return (
        <Card sx={{ ...sx, height: '95%', maxWidth: '100%', mb: 2 }}>
            <CardContent>
                <Typography {...contentProps} variant='h5' component='p'>{title}</Typography>
                <Typography {...contentProps} paragraph>
                    {desc}
                </Typography>
            </CardContent>

        </Card>
    )
}

export default Esittely
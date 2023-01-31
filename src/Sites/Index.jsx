import { Button, Card, CardActionArea, CardContent, CardMedia, Fade, Grow, Typography, useScrollTrigger, Link as MuiLink, List, ListItem, ListItemAvatar, Avatar, ListItemText, Paper, Input, TextField, Checkbox, FormGroup, FormControlLabel } from "@mui/material"

import indexpage from '../assets/indexpage.jpg'

import { Link, RouterButton } from "../Components/Routing";

import Esittely from "../Components/Esittely";

const email = 'verkkosivut@etusivut.com'

import Email from "@mui/icons-material/Email";
import { Box } from "@mui/system";

const Index = () => {
    const scrollTrigger = useScrollTrigger()



    return (
        <>  
            <Grow in>
                <div>
                    <Typography variant='h2' component='h1'>Verkkosivut kuntoon!</Typography>
                </div>
            </Grow>

                
            <Typography paragraph>
                Etusivut kehitttää ammattitaidolla laadukkaat verkkosivut yksinkertaisista kotisivuista laajoihin ohjelmistokokonaisuuksiin. Oli projektisi sitten pieni tai suuri, me voimme auttaa. Oli tarpeessasi sitten yrityksesi kotisivu tai vaikkapa sähköpyörien varauspalvelu, me hoidamme.
            </Typography>  

            <Grow in={!scrollTrigger}>
                <img src={indexpage} alt="Kuva henkilöstä selaamassa internetiä tietokoneella." style={{ maxWidth: '75%', display: 'block', margin: 'auto' }}  />
            </Grow>

            <Typography 
                variant="h3" sx={{ mt: 2, }} component='h2'
                gutterBottom
            >
                Verkkosivut yritykselle
            </Typography>
            
            <Typography paragraph sx={{ mb: 3 }}>
                Verkko tarjoaa uusia mahdollisuuksia yrittämiselle, asiakashankinnalle ja mainonnalle. Hakukoneista helposti löydettävät ja mobiiliystävälliset verkkosivut ovat mieleen sekä asiakkaalle että yrittäjälle ja avaavat uusia ovia sekä mahdollisuuksia yritystoimintaan.
            </Typography>

            <hr />

            <Typography sx={{ mt: 2 }} variant='h4' component='h2'>Valttikorttimme</Typography>
            <Esittely sx={{ mt: 0.5 }} />

            <Typography variant='h3' component='h2' sx={{ mb: 0.5 }}>Hinnasto</Typography>  
            <Hinnasto />
            <Typography paragraph>Eikö sopivaa verkkosivupakettia löydy? <b>Ota yhteyttä</b>, niin kehitetään juuri sinun tarpeisiisi sopiva nettisivu.</Typography>
       




            <br />
        </>

    )
}

const Hinnasto = ({ sx, scroll }) => {
    const products = [{
        title: "Simppeli verkkosivu",
        price: "25 €",
        desc: "Laadukas, hakukoneoptimoitu verkkosivu. Sopii monenlaiseen peruskäyttöön: esimerkiksi yrityksen infosivustoksi, ravintolan esittelysivuksi, kotisivuksi... Voi sisältää tarvittaessa myös muualta verkosta ladattavia sisältöjä: YouTube-upotuksia, jaa-nappeja yms.",
        list: ["1-10 sivua", "Oma sisältö", "Verkkosivun julkaisu internetiin", "SSL-sertifikaatti", ".com-domain vuodeksi 10 € lisämaksulla"]
    },
    {
        title: "Premium-verkkosivusto",
        price: "49.90 €",
        desc: "Laadukas verkkosivusto vaativampaan käyttöön. Sisältää oman mm. .com-domainin vuodeksi.",
        list: ["Kaikki Simppelin verkkosivuston ominaisuudet", "10-15 sivua", ".com-domain vuodeksi kaupan päälle", "Mahdollisuus luoda dynaamisia sivustoja", "Palvelinohjelmisto"]

    },
    {
        title: "Laaja web-sovellus",
        price: "alkaen 75 €",
        desc: "Laajempi ja monimutkaisempi ohjelmistokokonaisuus, johon sisältyy palvelinohjelmiston ja verkkosivun lisäksi tietokantoja. Tähän lukeutuvat erilaiset sosiaalisen median palvelut ja monimutkaisemmat verkkokaupat.",
        list: ["Kaikki Premium -ja Simppeli -pakettien ominaisuudet", "Tietokanta (MongoDB tai SQL-tietokanta)", ".com-domain vuodeksi kaupan päälle", "Käyttäjähallinta"]
    }]

    
    return (
        <> 
            {products.map(prod => <Product scroll={scroll} {...prod} key={prod.title} />)}
        </>
    )
}


const Product = ({ title, price, desc, list=[], scroll }) => {

    const textProps = {
        sx: {
            color: 'text.secondary'
        }
    }

    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography {...textProps} variant='h4' component='h3'>{title}, <b>{price}</b></Typography>
                <Typography {...textProps} paragraph>
                    {desc}
                </Typography>    
             
                <ul>
                    {list.map((item, index) => <li key={index}>{item}</li>)}
                </ul>

                <RouterButton to='/contact' variant='outlined'>Ota yhteyttä</RouterButton>


            </CardContent>
        </Card>
    )
}

export default Index
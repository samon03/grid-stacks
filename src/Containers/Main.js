import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

import TextField from '@mui/material/TextField';
import Avatar from '@mui/material//Avatar';
import Pencil from '@mui/icons-material/CreateOutlined';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';

import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

import Image from '../Images/Image.jpg';
import Logo from '../Images/Logo.png';


const styles = {
    back: {
        backgroundColor: '#f7f6fb'
    },
    heroContainer: {
      backgroundImage: 'url('+ Image +')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: 0,
      margin: 0,
      height: '150px',
      opacity: 0.9,
    },

    heroContainer2: {
        backgroundImage: 'url('+ Logo +')',
        padding: '5%',
        height: '120px',
        width: '120px',
        borderRadius: '50%'
    },

    overlay: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'black',
        backgroundColor: 'transparent'
     },

     overlay2: {
        position: 'absolute',
        top: '160px',
        left: '120px',
        color: 'black',
        backgroundColor: 'white',
        borderRadius: '50%'
     },

     overlay3: {
        position: 'absolute',
        top: '80px',
        left: '20px',
        color: 'black',
        backgroundColor: 'white',
        borderRadius: '50%',
        padding: '1%',
     },

     title: {
        fontSize: '18px',
        fontFamily: 'Crimson Text, serif'
     },

     benefits: {
       color: '#f15a29',
       fontFamily: 'Montserrat, sans-serif',
       fontSize: '20px',
       fontWeight: '700',
       width: '3%',
       borderBottom: 'solid',
     },

     benefitsAfter: {
      content: "",
      display: 'block',
      width: '70%',
      margin: '1em auto 0',
      borderBottom: 'solid',
     },

     button: {
       color: 'black', 
       borderRadius: "18px",
       justifyContent: "flex-end",
       border: '1px solid gray'
     },
   
};


const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  padding: '12px 25px',
  border: '1px solid',
  borderRadius: "20px",
  color: '#000',
  fontWeight: 700,
  lineHeight: 0.8,
  float: 'right',
  backgroundColor: '#fff',
  borderColor: '#dadada',
  fontFamily: [
    'Montserrat, sans-serif'
  ].join(',')
});

const footers = [
  {
    title: 'Company'
  },
  {
    title: 'Features'
  },
  {
    title: 'Resources'
  },
  {
    title: 'Legal'
  },
];


function Home() {

  return (
    <>
      
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >

        <Container>
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography noWrap sx={{ flexGrow: 1 }}></Typography>
          <nav className="nav">
            <Link underline="none"
              variant="button"
              color="gray"
              href="#"
              sx={{ my: 1, mx: 1.5, fontSize: '16px', textTransform: 'none', fontFamily: 'Montserrat, sans-serif' }}
            >
              Company
            </Link>
            <Link underline="none"
              variant="button"
              color="gray"
              href="#"
              sx={{ my: 1, mx: 1.5, fontSize: '16px', textTransform: 'none', fontFamily: 'Montserrat, sans-serif' }}
            >
              Find Candidate
            </Link>
            <Link underline="none"
              variant="button"
              color="gray"
              href="#"
              sx={{ my: 1, mx: 1.5, fontSize: '16px', textTransform: 'none', fontFamily: 'Montserrat, sans-serif' }}
            >
              Guide
            </Link>
            <Link underline="none"
              variant="button"
              color="gray"
              href="#"
              sx={{ my: 1, mx: 1.5, fontSize: '16px', textTransform: 'none', fontFamily: 'Montserrat, sans-serif', borderRight: '2px solid gray' }}
            >
            </Link>
          </nav>
        </Toolbar>
        </Container>
        
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="md" component="main" sx={{ pt: 8, pb: 6 }}>

          <Card sx={{ position: 'relative', minHeight: '1200px', backgroundColor: '#FFF' }}>
             <CardContent sx={{ px: 0, py: 0, backgroundColor: '#FFF' }}>
                <div>
                    <CardMedia image={Image} style={styles.heroContainer}/>
                    <div style={styles.overlay}>
                        <Avatar sx={{ color: 'blue', backgroundColor: 'white' }}>
                        <Pencil />
                        </Avatar>
                    </div>
                    
                    <div style={styles.overlay3}>
                        <CardMedia image={Logo} style={styles.heroContainer2}/>
                    </div>

                    <div style={styles.overlay2}>
                        <Avatar sx={{ color: 'blue', backgroundColor: 'white' }}>
                           <Pencil />
                        </Avatar>
                    </div>
                </div>

                <Container maxWidth="lg" sx={{ pt: 12, pb: 6 }}>         
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={12}>
                          <Typography variant="label" style={styles.title}>
                            About Company*
                          </Typography>
                          <TextField fullWidth id="fullWidth" label="Website (Url)" rows={4} sx={{ mt: 2 }}/>
                      </Grid>

                      <Grid item xs={12} md={6}>
                          <Typography variant="label" style={styles.title}>
                            Spicialities 
                          </Typography>
                          <TextField fullWidth id="fullWidth" label="Enter text" sx={{ mt: 2 }}/>
                      </Grid>

                      <Grid item xs={12} md={6}>
                          <Typography variant="label" style={styles.title}>
                            Industry* 
                          </Typography>
                          <TextField fullWidth id="fullWidth" label="Enter text" sx={{ mt: 2 }}/>
                          {/* <Select sx={{ mt: 2, color: 'black' }}
                              fullWidth
                              id="demo-simple-select"
                              label="Select Industry"
                              placeholder="Select Industry"
                              value="Select Industry">
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select> */}

                      </Grid>

                      <Grid item xs={12} md={6}>
                          <Typography variant="label" style={styles.title}>
                            Company Size* 
                          </Typography>
                          <TextField fullWidth id="fullWidth" label="Employees" sx={{ mt: 2 }}/>
                      </Grid>

                      <Grid item xs={12} md={6}>
                          <Typography variant="label" style={styles.title}>
                            Headquarters 
                          </Typography>
                          <TextField fullWidth id="fullWidth" label="Enter text" sx={{ mt: 2 }}/>
                      </Grid>

                      <Grid item xs={12} md={6}>
                          <Typography variant="label" style={styles.title}>
                            Type 
                          </Typography>
                          <TextField fullWidth id="fullWidth" label="Enter text" sx={{ mt: 2 }}/>
                      </Grid>

                      <Grid item xs={12} md={6}>
                          <Typography variant="label" style={styles.title}>
                            Founded 
                          </Typography>
                          <TextField fullWidth id="fullWidth" label="Enter year" sx={{ mt: 2 }}/>
                      </Grid>

                      <Grid item xs={12} md={12}>
                          <Typography variant="label" style={styles.title}>
                            Spicialities 
                          </Typography>
                          <TextField fullWidth id="fullWidth" label="Enter text" sx={{ mt: 2 }}/>
                      </Grid>

                      <Grid item xs={12} md={6}>
                          <Typography variant="h3" style={styles.benefits}>
                              Benefits 
                          </Typography>
                      </Grid>

                      <Grid item xs={12} md={6}  >
                        <div sx={{ justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
                        <BootstrapButton variant="contained" size="medium" disableRipple>
                          Add Benefit
                        </BootstrapButton>
                        </div>
                      </Grid>

                      
                    </Grid>              
                </Container>
            </CardContent>
          </Card>
        </Container>
    
    </>
  );
}

export default Home;
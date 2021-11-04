import React, { useState } from 'react';
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

import Icon from '@mui/material/IconButton';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PermDataSettingOutlinedIcon from '@mui/icons-material/PermDataSettingOutlined';
import BlurCircularOutlinedIcon from '@mui/icons-material/BlurCircularOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';

import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

import Image from '../Images/Image.jpg';
import Logo from '../Images/Logo.png';

import CustomButton from './CustomButton';


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

     footer: {
       height: '180px',
       backgroundColor: '#4d5b9f',
       alignSelf: 'center',
       borderTopLeftRadius: "15%",
       borderTopRightRadius: '15%'
     }
   
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

const BootstrapButton2 = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  width: '260px',
  padding: '12px 25px',
  border: '1px solid',
  borderRadius: "20px",
  color: '#000',
  fontWeight: 400,
  lineHeight: 0.8,
  backgroundColor: '#fff',
  borderColor: '#dadada',
  fontFamily: [
    'Open Sans, sans-serif'
  ].join(',')
});

const BootstrapButton3 = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  padding: '15px 25px',
  border: '1px solid',
  borderRadius: "20px",
  color: '#4d5b9f',
  fontWeight: 400,
  lineHeight: 0.8,
  backgroundColor: '#fff',
  borderColor: '#4d5b9f',
  fontFamily: [
    'Open Sans, sans-serif'
  ].join(',')
});

const BootstrapButton4 = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  padding: '15px 25px',
  border: '1px solid',
  borderRadius: "20px",
  color: '#fff',
  fontWeight: 400,
  lineHeight: 0.8,
  backgroundColor: '#4d5b9f',
  borderColor: '#4d5b9f',
  fontFamily: [
    'Open Sans, sans-serif'
  ].join(',')
});

const BootstrapIcon = styled(Icon)({
  fontSize: 16,
  border: '1px solid',
  borderRadius: "50%",
  color: '#dadada',
  fontWeight: 700,
  backgroundColor: '#fff',
  borderColor: '#a89e9a',
});


function Home() {

  const [alignment, setAlignment] = useState("center");

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

          <Card sx={{ position: 'relative', minHeight: '1100px', backgroundColor: '#FFF' }}>
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
                          <TextField fullWidth id="fullWidth" label="Website (Url)" multiline rows={4} sx={{ mt: 2 }}/>
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

                      <Grid item xs={12} md={4}  >
                        <BootstrapButton2 variant="contained" size="medium" disableRipple sx={{ backgroundColor: '#f77631' }}>
                          <Grid item xs={12} md={2} sx={{ backgroundColor: '#f77631' }}>
                             <BlurCircularOutlinedIcon sx={{ mr: 2, color: '#fff', fontSize: '16px', backgroundColor: '#f77631'}}/> 
                          </Grid>
                          <Grid item xs={12} md={8} sx={{ backgroundColor: '#f77631' }}>

                          <Typography sx={{ float: 'left', fontSize: 11, color: '#fff', backgroundColor: '#f77631' }}>
                             Excellent Health Care  
                          </Typography>
                             
                          </Grid>
                          <Grid item xs={12} md={2} sx={{ backgroundColor: '#f77631' }}>
                          <CheckCircleOutlinedIcon sx={{ ml: 3, color: '#fff', backgroundColor: '#f77631'}} />
                          </Grid>
                        </BootstrapButton2>
                      </Grid>

                      <Grid item xs={12} md={4}  >
                        <BootstrapButton2 variant="contained" size="medium" disableRipple >
                          <Grid item xs={12} md={2}>
                             <HomeWorkIcon sx={{ mr: 2, color: '#a89e9a', fontSize: '16px'}}/> 
                          </Grid>
                          <Grid item xs={12} md={8}>

                          <Typography sx={{ float: 'left', fontSize: 11 }}>
                             Daily Snacks  
                          </Typography>
                             
                          </Grid>
                          <Grid item xs={12} md={2}>
                          <BootstrapIcon sx={{ ml: 4, color: '#a89e9a'}} />
                          </Grid>
                        </BootstrapButton2>
                      </Grid>

                      <Grid item xs={12} md={4}  >
                        <BootstrapButton2 variant="contained" size="medium" disableRipple >
                          <Grid item xs={12} md={2}>
                             <PermDataSettingOutlinedIcon sx={{ mr: 2, color: '#a89e9a', fontSize: '16px'}}/> 
                          </Grid>
                          <Grid item xs={12} md={8}>

                          <Typography sx={{ float: 'left', fontSize: 11 }}>
                              Group Activities 
                          </Typography>
                             
                          </Grid>
                          <Grid item xs={12} md={2}>
                          <BootstrapIcon sx={{ ml: 4, color: '#a89e9a'}} />
                          </Grid>
                        </BootstrapButton2>
                      </Grid>

                      <Grid item xs={12} md={4}  >
                        <BootstrapButton2 variant="contained" size="medium" disableRipple >
                          <Grid item xs={12} md={2}>
                             <SettingsOutlinedIcon sx={{ mr: 2, color: '#a89e9a', fontSize: '16px'}}/> 
                          </Grid>
                          <Grid item xs={12} md={8}>

                          <Typography sx={{ float: 'left', fontSize: 11 }}>
                             Volunteer Opportunities
                          </Typography>
                             
                          </Grid>
                          <Grid item xs={12} md={2}>
                          <BootstrapIcon sx={{ ml: 4, color: '#a89e9a'}} />
                          </Grid>
                        </BootstrapButton2>
                      </Grid>

                      <Grid item xs={12} md={4}  >
                        <BootstrapButton2 variant="contained" size="medium" disableRipple >
                          <Grid item xs={12} md={2}>
                             <EmojiObjectsOutlinedIcon sx={{ mr: 2, color: '#a89e9a', fontSize: '16px'}}/> 
                          </Grid>
                          <Grid item xs={12} md={8}>

                          <Typography sx={{ float: 'left', fontSize: 11 }}>
                             Wellness Programs
                          </Typography>
                             
                          </Grid>
                          <Grid item xs={12} md={2}>
                          <BootstrapIcon sx={{ ml: 4, color: '#a89e9a'}} />
                          </Grid>
                        </BootstrapButton2>
                      </Grid>

                      <Grid item xs={12} md={4}  >
                        <BootstrapButton2 variant="contained" size="medium" disableRipple >
                          <Grid item xs={12} md={2}>
                             <CleanHandsOutlinedIcon sx={{ mr: 2, color: '#a89e9a', fontSize: '16px'}}/> 
                          </Grid>
                          <Grid item xs={12} md={8}>

                          <Typography sx={{ float: 'left', fontSize: 11 }}>
                             Paid time off
                          </Typography>
                             
                          </Grid>
                          <Grid item xs={12} md={2}>
                          <BootstrapIcon sx={{ ml: 4, color: '#a89e9a'}} />
                          </Grid>
                        </BootstrapButton2>
                      </Grid>
                      <Grid item xs={12} md={9}></Grid>

                      <Grid item xs={12} md={3}>
                        <div sx={{ justifyContent: 'flex-end' }}>
                        <BootstrapButton3 variant="contained" size="medium" disableRipple sx={{mr: 2}}>
                          Skip
                        </BootstrapButton3>
                        <BootstrapButton4 variant="contained" size="medium" disableRipple >
                          Save 
                        </BootstrapButton4>
                        </div>
                      </Grid>
                      
                    </Grid>              
                </Container>
            </CardContent>
          </Card>
        </Container>

        <div style={styles.footer}>
          <Container maxWidth="sm" sx={{ pt: 12, pb: 0, backgroundColor: '#4d5b9f' }}>
          <Grid container spacing={4} align={alignment} sx={{backgroundColor: '#4d5b9f', justifyContent: 'center' }}>
            <Grid item xs={12} md={2}  sx={{backgroundColor: '#4d5b9f', color: '#fff', fontSize: 8 }}>
                About Company 
            </Grid>
            <Grid item xs={12} md={2}  sx={{backgroundColor: '#4d5b9f', color: '#fff', fontSize: 8 }}>
                Privacy Policy 
            </Grid>
            <Grid item xs={12} md={2}  sx={{backgroundColor: '#4d5b9f', color: '#fff', fontSize: 8 }}>
                Terms & condition
            </Grid>
            <Grid item xs={12} md={2}  sx={{backgroundColor: '#4d5b9f', color: '#fff', fontSize: 8 }}>
                Blog
            </Grid>
            <Grid item xs={12} md={2}  sx={{backgroundColor: '#4d5b9f', color: '#fff', fontSize: 8 }}>
                Contact us 
            </Grid>
            
        </Grid>
          </Container>

        </div>

        
    
    </>
  );
}

export default Home;
import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import BlurCircularOutlinedIcon from '@mui/icons-material/BlurCircularOutlined';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import ListIcon from '@mui/icons-material/List';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import TextField from '@mui/material/TextField';

const styles = {
    benefits: {
        color: '#4d5b9f',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '18px',
        fontWeight: '700',
        borderBottom: '2px solid #dadada',
        backgroundColor: 'transparent'
      },

      benefits2: {
        color: '#f15a29',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '18px',
        fontWeight: '700',
        backgroundColor: 'transparent'
      },  

      title: {
        fontSize: '12px',
        fontFamily: 'Crimson Text, serif',
        color: 'gray',
        borderBottom: 'gray'

     },
}

const BootstrapButton2 = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    width: '180px',
    padding: '6px 8px',
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
export default function Benefits() {
    return (
        <>
            <Typography variant="h3" style={styles.benefits}>
                Add Benefits 
            </Typography>
            <Card sx={{mt: 1, mb: 2, justifyContent: 'flex'}}>
                <CardContent>
                    <BootstrapButton2 variant="contained" size="medium" disableRipple sx={{mr: 1, mb: 1}} >
                        <Grid item xs={12} md={8}>

                        <Typography sx={{ float: 'left', fontSize: 11 }}>
                            Paid time off
                        </Typography>
                            
                        </Grid>
                        <Grid item xs={12} md={4}>
                        <ControlPointIcon sx={{ ml: 4, color: 'orange'}} />
                        </Grid>
                    </BootstrapButton2>
                    <BootstrapButton2 variant="contained" size="medium" disableRipple sx={{mr: 1, mb: 1}} >
                        <Grid item xs={12} md={8}>

                        <Typography sx={{ float: 'left', fontSize: 11 }}>
                            Paid time off
                        </Typography>
                            
                        </Grid>
                        <Grid item xs={12} md={4}>
                        <ControlPointIcon sx={{ ml: 4, color: 'orange'}} />
                        </Grid>
                    </BootstrapButton2>
                    <BootstrapButton2 variant="contained" size="medium" disableRipple sx={{mr: 1, mb: 1}} >
                        <Grid item xs={12} md={8}>

                        <Typography sx={{ float: 'left', fontSize: 11 }}>
                            Paid time off
                        </Typography>
                            
                        </Grid>
                        <Grid item xs={12} md={4}>
                        <ControlPointIcon sx={{ ml: 4, color: 'orange'}} />
                        </Grid>
                    </BootstrapButton2>
                    
                </CardContent>     
            </Card> 

            <Typography variant="h3" style={styles.benefits2}>
                Benefits 
            </Typography>

            <Card sx={{mt: 1}}>
                <CardContent>
                <Grid container spacing={4}>

                    <Grid item xs={12} md={2}>
                        <BlurCircularOutlinedIcon sx={{ mr: 1, color: '#f15a29', fontSize: '20px', mt: 2, ml: 2 }}/> 
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <Typography sx={{ fontSize: 14, color: '#f15a29', fontWeight: 700 }}>
                            Excellent Health Care  
                        </Typography>
                        <Typography sx={{ fontSize: 12, color: 'gray'}}>
                            We offers compititive package that includes 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CreateIcon sx={{ mr: 1, color: 'gray', fontSize: '16px'}}/> 
                        <DeleteIcon sx={{ mr: 1, color: 'gray', fontSize: '16px'}}/> 
                        <ListIcon sx={{ color: 'gray', fontSize: '16px'}}/> 
                    </Grid>
                </Grid>  

                <Grid container spacing={4} sx={{mt: 1}}>

                    <Grid item xs={12} md={2}>
                        <HomeWorkIcon sx={{ mr: 1, color: '#f15a29', fontSize: '20px', mt: 2, ml: 2 }}/> 
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <Typography sx={{ fontSize: 14, color: '#f15a29', fontWeight: 700 }}>
                            Daily Stacks
                        </Typography>
                        <Typography sx={{ fontSize: 12, color: 'gray'}}>
                            Enjoy various services and snacks in the break room
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CreateIcon sx={{ mr: 1, color: 'gray', fontSize: '16px'}}/> 
                        <DeleteIcon sx={{ mr: 1, color: 'gray', fontSize: '16px'}}/> 
                        <ListIcon sx={{ color: 'gray', fontSize: '16px'}}/> 
                    </Grid>
                </Grid>

                <div>
                    <Typography variant="label" style={styles.title} sx={{mb: 1}}>
                        Title* 
                    </Typography>

                    <TextField sx={{mt: 1}}
                        error
                        id="standard"
                        label="Title"
                        variant="standard"
                        fullWidth
                    />

                    <Typography variant="label" style={styles.title} sx={{mb: 1}}>
                        Description
                    </Typography>
                    <TextField sx={{mt: 1}}
                        id="demo"
                        label="Please enter"
                        fullWidth
                    />
                </div>


                <Grid container spacing={3} sx={{mt: 0}}>

                    <Grid item xs={12} md={6}></Grid>

                    <Grid item xs={12} md={6}>
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


                </CardContent>  
            </Card>

            



        </>
    )
}

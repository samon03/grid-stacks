import React from 'react';
import Button from '@mui/material/Button';
import Icon from '@mui/material/IconButton';

import HomeWorkIcon from '@mui/icons-material/HomeWork';

import TextField from '@mui/material/TextField';
import Avatar from '@mui/material//Avatar';
import Pencil from '@mui/icons-material/CreateOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CircleIcon from '@mui/icons-material/Circle';

import Checkbox from '@mui/material/Checkbox';

import CircleChecked from '@mui/icons-material/CheckCircleOutline';
import CircleCheckedFilled from '@mui/icons-material/CheckCircle';
import CircleUnchecked from '@mui/icons-material/RadioButtonUnchecked';


import Grid from '@mui/material/Grid';

import { styled } from '@mui/material/styles';


const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  padding: '12px 25px',
  border: '1px solid',
  borderRadius: "25px",
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

const BootstrapIcon = styled(Icon)({
    fontSize: 16,
    border: '1px solid',
    borderRadius: "50%",
    color: '#dadada',
    fontWeight: 700,
    backgroundColor: '#fff',
    borderColor: '#a89e9a',
  });

function CustomButton() {

  return (

 <BootstrapButton variant="contained" size="medium" disableRipple >
    <HomeWorkIcon sx={{ mr: 2, color: '#a89e9a', fontSize: '16px'}}/> Daily Snacks 
    <BootstrapIcon sx={{ ml: 4, color: '#a89e9a'}} />
 </BootstrapButton>
     
    
  );
}

export default CustomButton;
import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
// import MessageNotification from "../Notivation-like/MessageNotification"


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#eee',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ThirdGrid() {
  return <Item className='third-grid'>
    
    {/* <MessageNotification/> */}


  </Item>;
}

export default ThirdGrid;

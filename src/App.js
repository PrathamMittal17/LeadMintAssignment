import { useEffect,useState } from 'react';
import './App.css';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function App() {
    const[items,setItems] = useState();
    console.log(items)
  useEffect(()=>{
    fetch("https://cashluck.xyz/api/v1/tasksfetch",{
      method:"POST",
      headers: {'Content-Type': 'application/json'},
    })
    .then(res=>res.json())
    .then(d=>setItems(d.data))
  },[])
 
    return(
      items?
      <>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">APP ID</TableCell>
            <TableCell align="center">IMAGE</TableCell>
            <TableCell align="center">TASK NAME</TableCell>
            <TableCell align="center">PAYOUT</TableCell>
            <TableCell align="center">REVENUE</TableCell>
            <TableCell align="center">TOTAL CAPS</TableCell>
            <TableCell align="center">COMPLETE CAPS</TableCell>
            <TableCell align="center">DELETE</TableCell>
            <TableCell align="center">EDIT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          Object.keys(items).map((index,)=>{
            return (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{items[index].appId}</TableCell>
              <TableCell align="center"><img src={items[index].appImageUrl} style={{height:30}} alt="Brand Icon"/></TableCell>
              <TableCell align="center">{items[index].appRewardAmount}</TableCell>
              <TableCell align="center">₹{items[index].payout}</TableCell>
              <TableCell align="center">₹{items[index].revenue}</TableCell>
              <TableCell align="center">{items[index].totalcap}</TableCell>
              <TableCell align="center">{items[index].completecaps}</TableCell>
              <TableCell align="center"><DeleteIcon style={{color:'grey'}}/></TableCell>
              <TableCell align="center"><EditIcon style={{color:'grey'}}/></TableCell>
        </TableRow>
            );
          })}
          
        </TableBody>
      </Table>
    </TableContainer>
    <p style={{color:'grey',textAlign:'right',padding:'5px'}}>1 - {Object.keys(items).length} of {Object.keys(items).length}</p>
    </>
    :
    "Loading..."
    );
  }
  


export default App;

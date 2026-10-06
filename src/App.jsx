import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
// Functional Component
function App() {
  const [nombre, setNombre] = useState("");
  const handleSaludo = () => {
    //setNombre("Constanza");
  };
  return <Box
      className='text-center'
      component="form"
      noValidate
      autoComplete="off"
    >
    <div>
      <h1>Hola mundo {nombre}</h1>
    </div>
    <div className='mb-3'>
      <TextField variant="outlined" value={nombre} onChange={(e) => setNombre(e.target.value)} />
    </div>
    <div className='mb-3 pt-2'>
      <Button onClick={handleSaludo} variant="contained">Click me</Button>
    </div>
  </Box>
}

export default App

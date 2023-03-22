import { ChangeEvent, use, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function NewEntry() {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSave = () => {
    if(inputValue.length === 0) return;
    console.log(inputValue);
  };
  
  return (
    <Box sx={{marginBottom: 2, paddingX: 1}}>
      {
        isAdding ? (
          <>
            <TextField 
              fullWidth
              sx={{ marginTop: 2, marginBottom: 1}}
              placeholder='Nueva Entrada'
              autoFocus
              label='Nueva Entrada'
              helperText='Ingrese un valor'
              error={inputValue.length <= 0 && touched}
              value={inputValue}
              onChange={onHandleChange}
              onBlur={() => setTouched(true)}
            />
            <Box display={'flex'} justifyContent={'space-between'}>
              <Button 
                variant='outlined' 
                color='secondary'
                endIcon={<SaveOutlinedIcon />}
                onClick={onSave}>
                Guardar
              </Button>
              <Button 
                variant='text' 
                color='secondary'
                onClick={() => setIsAdding(false)}>
                Cancelar
              </Button>
            </Box>
          </>
        ) : (

          <Button
            startIcon={<AddIcon />}
            fullWidth
            variant='outlined'
            onClick={() => setIsAdding(true)}
          >
            Agregar Tarea
          </Button>
        )
      }
    </Box>
  );
}

export default NewEntry;
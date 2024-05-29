import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Grid,Button } from '@mui/material';

const Login = () => {
  const [login, setLogin] = useState('');
  return(
    <Grid container spacing={2}>
      <Grid item xs={8}>
            <FormControl fullWidth>
              <Input className='loginName' id="Login_nome" aria-describedby="Login_nome_helper_text" value={Login}
               onChange={e => { setLogin(e.target.value) }} />
              <FormHelperText className='loginText'   id="Login_nome_helper_text">Testando Página.</FormHelperText>
            </FormControl>
      </Grid>

      <Grid item xs={4}>
          <Button className='buttonLogin'   variant="contained">Login</Button>
      </Grid>
      
    </Grid>  
  );
}

export default Login;   
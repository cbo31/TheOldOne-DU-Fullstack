import { useState } from 'react'
import { Button, TextField, Card, CardContent, CardActions, Typography } from '@mui/material'

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.prevent.default();
  }

  return (
    <div>
      <h1>The Old One</h1>
      <Card sx={{ 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        width: 400, 
        height: 475, 
        color: "#FAF9F7" ,
        boxShadow: 10,
        borderRadius: 6,
      }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <Typography variant="h5" sx={{ color: "#45413C" }}>
            Avec THE OLD ONE, partagez et restez en contact avec vos proches, et uniquement vos proches.
          </Typography>
          <Typography sx={{ color: "#45413C", mt: 3, textTransform: 'uppercase'  }}>Se Connecter</Typography>
          <TextField
            type="email"
            id="outlined-email"
            label="Email"
            size="small"
          />
          <TextField
            type="password"
            id="outlined-email"
            label="Password"
            size="small"
          />
        </CardContent>
        <CardActions sx={{ display: "flex", flexDirection: "column", px: 2}}>
          <Button variant="contained" size="medium" sx={{ backgroundColor: "#C45A3B" }}>sign in</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Login
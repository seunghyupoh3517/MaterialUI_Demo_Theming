import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

// How to apply styling on materia-ui
import { makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import { orange, green } from '@material-ui/core/colors'
// Typography Roboto
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography'
// Container and grids -> apply responsive design directly into the grid
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  root : {
    background: 'linear-gradient(45deg, #333, #FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px'
  } 
})

// ThemeProvider: change the themes across the board + Look at the documentation how the nested theme applies
const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
    }
  },
  palette: {
    primary: {
      main: green[500]
    },
    secondary: {
      main: orange[400]
    }
  }
})

function ButtonStyled(){
  const classes = useStyles();
  return <Button className={classes.root}> Test Styled Button </Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    // Wrap it with the own prop
    <FormControlLabel
      control={<Checkbox
      checked={checked}
      icon={<DeleteIcon />}
      checkedIcon={<SaveIcon />}
      onChange={(e)=> setChecked(e.target.checked)}
      inputProps={{
      'aria-label': 'secondary checkbox'
      }} 
    />}
    label = "Testing Checkbox"
    />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="xs"> 
    <div className="App">
      <header className="App-header">
        <AppBar color='secondary'>
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
          <Typography variant="h6">
            MUI themeing
          </Typography>
          <Button>
            Login
          </Button>

          </Toolbar>
        </AppBar>
        <Typography variant="h2">
          Learn how to use Material.ui
        </Typography>
        <ButtonStyled/>

        <Grid container spacing = {2} justify="center">
          <Grid item xs={3} sm={6}>
            <Paper style={{height:75, width:'100%', }} />
          </Grid> 
          <Grid item xs={3} sm={6}>
            <Paper style={{height:75, width:'100%', }} />
          </Grid>
          <Grid item xs={3} sm={6}>
            <Paper style={{height:75, width:'100%', }} />
          </Grid>
        </Grid>

        <TextField 
          variant="filled"
          color="secondary"
          type="email"
          label="The Time"
          placeholder="test@test.com"
      
        />
        <CheckboxExample />
        <ButtonGroup variant='contained'>
          <Button 
            startIcon={<SaveIcon />}
            // Styling automatically applies by using the docs
            // size="large"
            // onClick={()=> alert('hello')} 
            // variant="contained" 
            color="primary"
            // Customize own style on top of mateiral ui style
            style={{
              fontSize:24
            }}>
            Save
          </Button>

          <Button 
            startIcon={<DeleteIcon />}
            size="large"
            //variant="contained" 
            color="secondary"
            style={{
              fontSize:24
            }}>
            Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import styles from './App.css';
import Logo from './assets/icons/logo.svg'
import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';
import {theme} from './styles/theme'
import Container from './pages/Container';



const App = (props) => {

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme/>
            <LeafyGreenProvider enableColorScheme>
                <Container theme={theme}/>
            </LeafyGreenProvider>
            </ThemeProvider>
        </React.Fragment>
    )

}

export default App;
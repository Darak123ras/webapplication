import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import AppRoutes from './routes/AppRoutes.jsx';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme();

function App() {
  // const [count, setCount] = useState(0)
  const theme = createTheme();
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
    </>
  )
}

export default App

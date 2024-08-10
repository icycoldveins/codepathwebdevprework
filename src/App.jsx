import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'; // Import MUI components

const theme = createTheme({
  palette: {
    background: {
      default: '#ffffff', // Set the default background color to white
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply the baseline CSS reset */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view/:id" element={<ViewCreator />} />
          <Route path="/edit/:id" element={<EditCreator />} />
          <Route path="/add" element={<AddCreator />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

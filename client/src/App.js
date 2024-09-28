import React from 'react';
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { ExpensesProvider } from "./context/ExpensesContext";
import AppRoutes from "./routes/AppRoutes";
import './styles.css'

function App() {

  return (
    <ExpensesProvider>
      <Router>
        <div className="App">
          <Header />
          <AppRoutes />
        </div>
      </Router>
    </ExpensesProvider>
    
    
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Layout from './components/Page/Layout.jsx';
import Customers from './components/Sales/Customers.jsx';
import Deposits from './components/Sales/Deposits.jsx';
import Invoices from './components/Sales/Invoices.jsx';
import Sales from './components/Sales/Sales.jsx';
import Users from './components/Users/Users.jsx';
import Auth from './components/Auth/Auth.jsx';
import AuthForm from './components/Auth/AuthForm.jsx';
  
export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="sales" element={<Sales />}>
            <Route index element={<Deposits />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="customers" element={<Customers />} />
          </Route>
        </Route>
  
        <Route path="auth" element={<Auth />}>
          <Route index element={<AuthForm mode="signIn" />} />
          <Route path="signUp" element={<AuthForm mode="signUp" />} />
        </Route>
  
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

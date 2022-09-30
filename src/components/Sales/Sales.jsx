import { Outlet, Link } from 'react-router-dom';
import styles from './Sales.css';
export default function Sales() {
  return (
    <div className={styles.Sales}>
      <h1>Sales</h1>
      <nav>
        <Link to="">Deposits</Link>
        <Link to="invoices">Invoices</Link>
        <Link to="customers">Customers</Link>
      </nav>
      <Outlet />
    </div>
  );
}

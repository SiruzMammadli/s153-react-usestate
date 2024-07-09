import { Link } from 'react-router-dom';
import styles from './sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <Link to='/'>Home</Link>
      <Link to='/charts'>Charts</Link>
      <Link to='/tables'>Tables</Link>
    </aside>
  )
}

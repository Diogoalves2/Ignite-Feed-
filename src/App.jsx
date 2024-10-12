import styles from'./App.module.css'
import { Header } from './components/Header';
import { Post } from './components/Post';

import './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post />
        <Post />
        </main>
      </div>
      
    </div>
  )
}


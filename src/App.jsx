import styles from'./App.module.css'
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './App.module.css';
import './global.css';


//author: { avatar_url: "", name:"", role:""}
//publishedAt: Date
//Content: string

const posts =[
  {
    id: 1,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/44076060?v=4',
      name: 'Diogo Alves',
      role: 'Dev FrontEnd',
    }, 
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é SkeenCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-10-08 20:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/44076060?v=4',
      name: 'Janaina Vieira',
      role: 'Dev FrontEnd',
    }, 
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-11-08 20:00:00'),
  },
]

export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt= {post.publishedAt}
            />
            )
          })}
        </main>
      </div>
      
    </div>
  )
}


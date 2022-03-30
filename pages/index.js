import Head from "next/head"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Post from "../components/Post"

import styles from "../styles/Home.module.css"

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>willraoli@home</title>
        <meta name="description" content="willraoli's website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="normalize.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <div>
          {posts.map((post) => (
            <Post post={post} key={post.title} />
          ))}
        </div>
      </main>
      <aside className={styles.aside}>
        <div>
          <h1>William Oliveira</h1>
          <p>Descrição breve</p>
        </div>
      </aside>
      <footer className={styles.footer}>
        <div>
          <p>willraoli@footer</p>
        </div>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"))
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), 'utf8')
    
    const {data: frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts
    },
  }
}

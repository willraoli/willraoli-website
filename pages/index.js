import Head from "next/head"
import Image from "next/image"
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
      </Head>
      <header className={styles.header}>Yo soy el cabezador</header>
      <main className={`${styles.main} ${styles.wrapper}`}>
        <h1>Confira meus posts mais recentes</h1>
        <div>
          {posts.map((post) => (
            <Post post={post} key={post.title} />
          ))}
        </div>
      </main>
      <aside className={styles.aside}>
        <div className={styles.description}>
          <Image src="/avatar.jpg" className={styles.avatar} width="100" height="100" alt="Profile pic" />
          <h1>William Oliveira</h1>
          <p>Descrição breve</p>
          <p>Random quote</p>
          <p>Redes sociais</p>
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
    const slug = filename.replace(".md", "")
    const filepath = path.join("posts", filename)
    const markdownWithMeta = fs.readFileSync(filepath, "utf8")
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts,
    },
  }
}

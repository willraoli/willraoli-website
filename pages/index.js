import Head from "next/head"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Post from "../components/Post"

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>willraoli@home</title>
        <meta name="description" content="willraoli's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          {posts.map((post) => (
            <Post post={post} key={post.title} />
          ))}
        </div>
      </main>

      
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

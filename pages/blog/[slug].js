import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"
import Link from "next/link"
import Head from "next/head"

function PostPage({ frontmatter: { title }, content, slug }) {
  return (
    <>
      <Head>
        <title>willraoli@blog</title>
      </Head>
      <Link href="/">Voltar</Link>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </>
  )
}

export default PostPage

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"))
  const paths = files.map((filename) => {
    const slug = filename.replace(".md", "")
    return {
      params: {
        slug,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", `${slug}.md`),
    "utf8"
  )
  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}

import Link from "next/link"
import styles from "../styles/Home.module.css"

function Post({ post }) {
  return (
    <div className={styles.post}>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        Leia
      </Link>
    </div>
  )
}

export default Post

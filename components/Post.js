import Link from "next/link"
import styles from "../styles/Home.module.css"

function Post({ post }) {
  return (
    <div className={styles.post}>
      <h2>{post.frontmatter.title}</h2>
      <p>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        Leia
      </Link>
    </div>
  )
}

export default Post

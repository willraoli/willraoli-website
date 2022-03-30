import Link from "next/link"

function Post({ post }) {
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        Leia
      </Link>
    </div>
  )
}

export default Post

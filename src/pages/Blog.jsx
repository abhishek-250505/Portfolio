import { RiArrowRightUpLine } from "@remixicon/react";

const Blog = ({ posts, openPost }) => (
  <section className="content-section" id="writing">
    <div className="section-heading">
      <p className="section-kicker">Notes &amp; ideas</p>
      <h2>Writing</h2>
      <p>Notes from projects, engineering, and things I am learning.</p>
    </div>
    {posts.length ? <div className="stack-list">{posts.map((post) => <article className="surface-card post-card" key={post._id || post.slug}><time>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "ARTICLE"}</time><h3>{post.title}</h3><p>{post.summary}</p><a className="text-link" href={`/blog/${post.slug}`} onClick={(event) => openPost(event, post.slug)}>Read article <RiArrowRightUpLine size={14} /></a></article>)}</div> : <div className="empty-state">New writing is on the way. Check back soon.</div>}
  </section>
);

export default Blog;

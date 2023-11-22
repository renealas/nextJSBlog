import { Fragment } from "react";
import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-utils";


function AllPostPage(props) {
    return <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="All Programming tutorials and Posts"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  }
}

export default AllPostPage;
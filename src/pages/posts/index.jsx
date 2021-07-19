import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import PostList from "../../components/PostList";
import config from "../../lib/config";
import { countPosts, listPostContent } from "../../lib/posts";
import { listTags } from "../../lib/tags";
export default function Index({ posts, tags, pagination }) {
    const url = "/posts";
    const title = "All posts";
    return (<Layout>
      <BasicMeta url={url} title={title}/>
      <OpenGraphMeta url={url} title={title}/>
      <TwitterCardMeta url={url} title={title}/>
      <PostList posts={posts} tags={tags} pagination={pagination}/>
    </Layout>);
}
export const getStaticProps = async () => {
    const posts = listPostContent(1, config.posts_per_page);
    const tags = listTags();
    const pagination = {
        current: 1,
        pages: Math.ceil(countPosts() / config.posts_per_page),
    };
    return {
        props: {
            posts,
            tags,
            pagination,
        },
    };
};

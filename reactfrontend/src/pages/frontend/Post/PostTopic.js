import { useParams } from "react-router-dom";
import PostService from "../../../services/PostService"
import TopicService from "../../../services/TopicService"
import { useEffect, useState } from "react";
import PostItem from "../../../components/PostItem";
import TopicList from "../../../layouts/LayoutSite/ListTopic";

function PostTopic() {
    const [limit] = useState(8);
    const { slug } = useParams();
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    document.title = title;
    useEffect(function () {
        (async function () {
            const result = await TopicService.TopicBySlug(slug);
            const topicid = result.topic.id;
            setTitle(result.topic.name);
            const resultp = await PostService.PostByTopicId(4, topicid);
            setPosts(resultp.posts)
        })();
    }, [limit, slug]);
    console.log(posts)
    return (
        <main className="main">
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="products mb-3">
                                <div className="row justify-content-center">
                                    {posts.map(function (post, index) {
                                        return <PostItem key={index} post={post} />
                                    })}
                                </div>
                            </div>
                        </div>

                        <aside className="col-lg-3 order-lg-first">
                                <TopicList />
                        </aside>
                    </div>
                </div>
            </div>
        </main>


    );
}

export default PostTopic;
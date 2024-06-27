import { useEffect, useState } from "react";
import PostService from "../../../services/PostService"
import { useParams } from "react-router-dom";
import { urlImage } from "../../../Config";

function PostDetail() {
    const { slug } = useParams();
    const [post, setPost] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await PostService.ById(slug)
                setPost(result.post)
            }
            catch (error) {
                console.log(error)
            }
        })();
    }, [slug]);
    return (<>
        <section className="maincontent">
            <div className="container my-4">
                <div className="row">
                    <h1 className="text-success">{post.title}</h1>

                    <div className="img_feature my-4">
                        <img
                            src={urlImage + "post/" + post.image}
                            alt={post.title}
                        />
                    </div>
                    <div>{post.detail}</div>
                    <div>{post.description}</div>

                </div>
            </div>
        </section>
    </>
    );
}

export default PostDetail;
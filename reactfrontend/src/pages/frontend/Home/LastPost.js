import { Link } from "react-router-dom";
import PostService from "../../../services/PostService";
import { urlImage } from "../../../Config";
import { useEffect, useState } from "react";

const LastPost = () => {
    const [postnews, setPostnews] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await PostService.lastpostnew();
            setPostnews(result.posts);
        })();
    }, []);

    const [postlikenews, setPostlikenews] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await PostService.lastpostlikenew();
            setPostlikenews(result.posts);
        })();
    }, []);
    return (
        <section className="hdl-lastpost bg-main mt-3 py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <h3>BÀI VIẾT MỚI</h3>
                        <div className="row">
                            {postnews && postnews.map((post, index) => {
                                return (
                                    <div className="col-md-4" key={index}>
                                        <Link to="post_detail.html">
                                            <img
                                                className="img-fluid"
                                                src={urlImage + "post/" + post.image}
                                                alt={post.image}
                                            />
                                        </Link>
                                        <h3 className="post-title fs-4 py-2">
                                            <Link to="post_detail.html">
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p>{post.detail}</p>
                                    </div>
                                );
                            })}
                            <div className="col-md-6">
                                {postlikenews && postlikenews.map((post, index) => {
                                    return (
                                        <div className="row mb-3" key={index}>
                                            <div className="col-md-3">
                                                <Link to="post_detail.html">
                                                    <img
                                                        className="img-fluid"
                                                        src={urlImage + "post/" + post.image}
                                                        alt={post.image}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="col-md-8">
                                                <h3 className="post-title fs-5">
                                                    <Link to="post_detail.html">
                                                        {post.title}
                                                    </Link>
                                                </h3>
                                                <p>{post.detail}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">FACEBOOK</div>
                </div>
            </div>
        </section>
    );
}
export default LastPost;
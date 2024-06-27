import { Link } from "react-router-dom";
import { urlImage } from "../Config";

function PostItem(props) {
    return (
        <article className="entry entry-list">
        <div className="row align-items-center">
            <div className="col-md-5">
                <figure className="entry-media">
                    <Link to={"/chi-tiet-bai-viet/" + props.post.slug}>
                        <img                             
                            className="img-fluid"
                            src={urlImage + "post/" + props.post.image}
                            alt={props.post.title}
                        />
                    </Link>
                </figure>
            </div>
            <div className="col-md-7">
                <div className="entry-body">
                    <h2 className="entry-title">
                        {props.post.title}
                    </h2>
                    <div className="entry-content">
                        <p>{props.post.detail}</p> 
                        <Link to={"/chi-tiet-bai-viet/" + props.post.slug}>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    </article>
    );
}

export default PostItem;

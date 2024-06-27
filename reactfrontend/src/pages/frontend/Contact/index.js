import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import ContactService from "../../../services/ContactService";

const Contact = () => {
	const navigate = useNavigate();
    // const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const contact = new FormData();
        contact.append("name", name);
        contact.append("email", email);
        contact.append("phone", phone);
        contact.append("title", title);
        contact.append("content", content);

        (async () => {
            const result = await ContactService.store(contact);
            alert(result.message);
            navigate('/lien-he', { replace: true });
        })();
    };
    // useEffect(() => {
    //     (async () => {
    //         const result = await ContactService.index();
    //         setContacts(result.contacts);
    //     })();
    // }, []);
    return (
        <div className="container_fullwidth">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h5>
                            Liên Hệ
                        </h5>
                        <div className="clearfix">
                        </div>
                        <div className="map">
                            <iframe width="600" height="350" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Vietnam&amp;aq=&amp;sll=14.058324,108.277199&amp;sspn=21.827722,43.286133&amp;ie=UTF8&amp;hq=&amp;hnear=Vietnam&amp;ll=14.058324,108.277199&amp;spn=8.883583,21.643066&amp;t=m&amp;z=6&amp;output=embed">
                            </iframe>
                        </div>
                        <div className="clearfix">
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="contact-infoormation">
                                    <h5>
                                        Thông tin liên hệ
                                    </h5>
                                    <p>
                                    Copyright@ 2024 FLAT SHOP là hệ thống bán sĩ và lẽ thời trang nam, nữ, trẻ em và quần áo thể thao,
                                    mong muốn đem đến chất lượng tốt nhất cho khách hàng.
                                    </p>
                                    <ul>
                                        <li>
                                            <span className="icon">
                                                <img src="images/message.png" alt="" />
                                            </span>
                                            <p>
                                                contact@michaeldesign.me
                                                <br />
                                                support@michaeldesign.me
                                            </p>
                                        </li>
                                        <li>
                                            <span className="icon">
                                                <img src="images/phone.png" alt="" />
                                            </span>
                                            <p>
                                                084. 93 668 2236
                                                <br />
                                                084. 93 668 6789
                                            </p>
                                        </li>
                                        <li>
                                            <span className="icon">
                                                <img src="images/address.png" alt="" />
                                            </span>
                                            <p>
                                            Địa chỉ: B216A, KP Bình Phước, Phường Bình Nhâm
                                                <br />
                                                TP. Thuận An, Bình Dương, Việt Nam
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="ContactForm">
                                    <h5>
                                        Liên Hệ
                                    </h5>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>
                                                    Họ và Tên
                                                    <strong className="red">
                                                        *
                                                    </strong>
                                                </label>
                                                <input value={name} onChange={(e) => setName(e.target.value)} className="inputfild" type="text" name="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>
                                                    Email
                                                    <strong className="red">
                                                        *
                                                    </strong>
                                                </label>
                                                <input  value={email} onChange={(e) => setEmail(e.target.value)} className="inputfild" type="email" name="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>
                                                    Số điện thoại
                                                    <strong className="red">
                                                        *
                                                    </strong>
                                                </label>
                                                <input value={phone} onChange={(e) => setPhone(e.target.value)} className="inputfild" type="text" name="" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label>
                                                Tiêu đề
                                                    <strong className="red">
                                                        *
                                                    </strong>
                                                </label>
                                                <input value={title} onChange={(e) => setTitle(e.target.value)} id="text" className="inputfild" type="text" name="" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label>
                                                    Nội dung liên hệ 
                                                    <strong className="red">
                                                        *
                                                    </strong>
                                                </label>
                                                <textarea value={content} onChange={(e) => setContent(e.target.value)}  className="inputfild" rows="8" name="">
                                                </textarea>
                                            </div>
                                        </div>
                                        
                                        <button className="pull-right">
                                            Gửi liên hệ
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix">
                </div>
                <div className="our-brand">
                    <h3 className="title">
                        <strong>
                            Thương 
                        </strong>
                        Hiệu
                    </h3>
                    <div className="control">
                        <Link id="prev_brand" className="prev" to="#">
                            &lt;
                        </Link>
                        <Link id="next_brand" className="next" to="#">
                            &gt;
                        </Link>
                    </div>
                    <ul id="braldLogo">
                        <li>
                            <ul className="brand_item">
                                <li>
                                    <Link to="#">
                                        <div className="brand-logo">
                                            <img src="images/envato.png" alt="" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className="brand-logo">
                                            <img src="images/themeforest.png" alt="" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className="brand-logo">
                                            <img src="images/photodune.png" alt="" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className="brand-logo">
                                            <img src="images/activeden.png" alt="" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className="brand-logo">
                                            <img src="images/envato.png" alt="" />
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul className="brand_item">
                                <li>
                                    <Link to="#">
                                        <div className="brand-logo">
                                            <img src="images/envato.png" alt="" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className="brand-logo">
                                            <img src="images/themeforest.png" alt="" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className="brand-logo">
                                            <img src="images/photodune.png" alt="" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className="brand-logo">
                                            <img src="images/activeden.png" alt="" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className="brand-logo">
                                            <img src="images/envato.png" alt="" />
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Contact;
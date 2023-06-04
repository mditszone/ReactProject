import React, {useState } from 'react';
import './form.scss';
import JsonData from './payload_sri krishna_idno';
import { Link, useNavigate } from 'react-router-dom';



export default function AppForm({setIsSubmitted}) {
    const [category, setCategory] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const url = `/search?category=${category}&id=${id}`
        navigate(`/tabs${url}`);
        setIsSubmitted(true)
    }


    return(
        <div className='mdits-app-container'>
            <div className='mdits-app-form'>
            {JsonData.prefre_article.map((item, i) => (
                        <div className='header'>
                            {item.category}
                            {item.articles.map((val, n) => {
                                return <Item category={item.category} idd={val.article_no_id} title={val.title} />
                            })}
                        </div>
                    ))
            }

            </div>
        </div>
    );
}

function Item({category, idd, title}) {
    return(
        <div className='mdits-app-links-container'>
            <div className='data-links'>
                <Link to={`/tabs/search?category=${category}&id=${idd}`}>{title}</Link>
            </div>
        </div>
    )
}

{/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Language</Form.Label>
                <Form.Control type="text" placeholder="Enter Language" onChange={(e) => setCategory(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Artile ID</Form.Label>
                <Form.Control type="number" placeholder="enter article id" onChange={(e) => setId(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e) => submitHandler(e)}>
                Submit
            </Button> */}
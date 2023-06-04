import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import JsonData from './payload_sri krishna_idno';
import {useEffect, useState } from 'react';
import './apptabs.scss';
import { useSearchParams } from 'react-router-dom';
import { useRef } from 'react';


export default function AppTabs({match, location}) {
    const [searchParams] = useSearchParams();
    const ref = useRef();
    const data = JsonData;
    
    const executeScroll = () => ref.current.scrollIntoView()  

    useEffect(() => {
        console.log(ref);
        executeScroll();
    }, []);


    return(
        <div className='mdits-app-tabs-container'>
            <div className='mdits-app-tabs'>
            <Tabs defaultActiveKey={searchParams.get("category")} className="mb-3">
            
                    {data.prefre_article.map((item, i) => {
                        if (item.category === searchParams.get("category")) {
                            return (
                                <Tab eventKey={item.category} key={i} title={item.category}>
                                    <div className='mdits-app-tabs-content'>
                                    {item.articles.map((val, n) => {
                                        if (val.article_no_id === searchParams.get("id")) {
                                            console.log(val.article_no_id);
                                            return <Item key={i + n} myRef={ref} highlight={true} data={val} />
                                        }
                                        return <Item key={i + n} data={val} />
                                    })}
                                    </div>
                                </Tab>
                            );
                        }
                        return (
                            <Tab eventKey={item.category} key={i} title={item.category}>
                                <div className='mdits-app-tabs-content'>
                                {item.articles.map((val, n) => {
                                    return <Item key={i + n} data={val} />
                                })}
                                </div>
                                
                            </Tab>
                        );
                    })}
                </Tabs>
            </div>
        </div>
    );
}

function Item({data, myRef, highlight}) {
    //console.log(myRef);
    return(
        <div className={highlight ? 'highlight' : 'mdits-app-item-container'} ref={myRef}>
            <div className='image'>
                <img src={data.urltoimage ? data.urltoimage : null} height={200} width={200} />
            </div>
            <div className='data'>
            <div className='title'>{data.article_no_id}</div>
                <div className='title'>{data.title}</div>
                <div className='description'>{data.description}</div>
                <div className='source'>{data.source}</div>
                <div className='publishedAt'>{data.publishedAt}</div>
                <a className='whatsapp_url'>{data.whatsapp_url}</a>
            </div>
        </div>
    )
}
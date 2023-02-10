import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader';
import Post from '../components/Post';

function Blogs() {
    const [posts, setPosts] = useState(null);
    const [fetching, setFetching] = useState(false);
    useEffect(() => {
        const fetchPosts = async () => {
            setFetching(true)
            try {
                const res = await axios.get('https://newsapi.org/v2/everything?q=downloader&from=2023-01-09&sortBy=publishedAt&apiKey=2be3aed283704f5a8e1997f82722b394')
                setPosts(res.data.articles.filter((item) => (item.urlToImage != null) && (item.author != null)));
                setFetching(false);
            } catch (error) {
                console.log(error);
                setFetching(false);
            }
        }
        fetchPosts();
    }, [])
  return (
    <div className="blogs">
        <div className="wrapper">
            {
                fetching && <Loader />
            }
            {
                posts && posts.map(post => {
                    return <Post  key={post.url} post={post}/>
                })
            }
        </div>
    </div>
  )
}
export default Blogs;

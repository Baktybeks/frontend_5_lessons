import {useDispatch, useSelector} from "react-redux";
import {deleteData, getPosts, postPosts} from "../../store/postsSlice";
import Post from "../../components/post/Post";
import {useState} from "react";


function PostsPage() {
    const dispatch = useDispatch()
    const {posts} = useSelector(state => state.postsReducer)
    const {error} =useSelector(state => state.errorReducer)
    const {preloader} = useSelector(state => state.preloaderReducer)
    const [form, setForm] = useState({})

    const getPostsFunc = () => {
        dispatch(getPosts())
    }

    const changeForm = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    // useEffect(() => {
    //     dispatch(getPosts())
    // },[]) // без баттона

    const deletePostsFunc = () => {
        dispatch(deleteData())
    }

    const createPostFunc = (e) => {
        e.preventDefault() //чтобы данные не обновлялись
        dispatch(postPosts(form))
    }

    return (
        <div>
            <form onSubmit={createPostFunc} style={{display: 'flex', flexDirection: 'column', width: '50%', margin: '0 auto'}}>
                <input type="text" onChange={changeForm} name="title"/>
                <textarea id="" cols="30" rows="10" onChange={changeForm} name="body"/>
                <button type="submit">create post</button>
            </form>
            <button onClick={getPostsFunc}>get posts</button>
            <button onClick={deletePostsFunc}>delete all</button>
            {
                preloader
                    ?
                    <p>loading</p>
                    :
                    error
                        ?
                        <p>{error}</p>
                        :
                        posts.map(post => <Post key={post.id} postInfo={post}/>)
            }
        </div>
    );
}

export default PostsPage;
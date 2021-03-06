
import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => {
        return <Posts message={p.message} likesCount={p.likesCount} />
    });

    let newPostElement = React.createRef()

    let addPostElement = () => {
        props.addPost();

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (

        <div className={s.postsBlocks}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPostElement}>Send</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts

import s from './Posts.module.css';
import img_i from './../../../images/I.jpg'



const Posts = (props) => {
    console.log(props.message)
    return (


        <div className={s.item}>
            <img className={s.img} src={img_i} />
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>


    )
}

export default Posts
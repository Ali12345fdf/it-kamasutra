import s from './Post.module.css'

const Post = (props) => {
    return (
      <div className={s.item}>
        <img src="https://www.meme-arsenal.com/memes/a9c3a072fe745b4fb009f3640daee187.jpg" alt="" />
        {props.message}
        <div>
          <span>like </span>{props.likesCount}
        </div>
        </div>
    )
}

export default Post;
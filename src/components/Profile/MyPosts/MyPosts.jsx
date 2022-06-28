import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    {id:'1',message:'hi how are you ?',likesCount:'5'},
    {id:'2',message:"I'm okay!",likesCount:'15'},
    {id:'2',message:"I'm okay!",likesCount:'15'},
    {id:'2',message:"I'm okay!",likesCount:'15'},
  ]

  let postsElements = posts.map( p =><Post message={p.message}  likesCount={p.likesCount} />)

  return (
    <div className={s.postBlock}>
      <h3>my posts</h3>
      <div>
          <div>
        <textarea></textarea>
          </div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
       {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;

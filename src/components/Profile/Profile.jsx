import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
    return (
      <div className={s.content}>
      <img src="https://html5css.ru/css/img_lights.jpg" /> 
      <div>
      ava + description 
      </div>
      <textarea></textarea>
      <button>add post</button>
      <MyPosts/> 
      </div>

    )
}

export default Profile;
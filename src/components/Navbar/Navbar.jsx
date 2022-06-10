import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}><a src='#'>Profile</a></div>
        <div className={s.item}><a src='#'>Messages</a></div>
        <div className={s.item}><a src='#'>News</a></div>
        <div className={s.item}><a src='#'>Music</a></div>
        <div className={s.item}><a src='#'>Settings</a></div>
      </nav>
    )
}

export default Navbar;
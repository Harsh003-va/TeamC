import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'


function Header() {
    const auth = useSelector(state => state.auth)

    const {user, isLogged} = auth


    const handleLogout = async () => {
        try {
            await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }

    const userLink = () => {
        return <li className="drop-nav">
            <Link to="#" className="avatar">
            <img src={user.avatar} alt=""/> {user.name} <i className="fas fa-angle-down"></i>
            </Link>
            <ul className="dropdown">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
            </ul>
        </li>
    }

    const transForm = {
        transform: isLogged ? "translateY(-5px)" : 0
    }

    return (
        <header>
            <div className="logo" id='logo'>
                <h1><Link to="/"><i class="fas fa-mug-hot">CAFE CAPRICON</i></Link></h1>
            </div>
            <nav>
            <ul style={transForm}>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/Menu">Menu</Link></li>
                <li><Link to="/Booktable"><i className="fas fa-chair"></i> Book A Table</Link></li>
                {
                    isLogged
                    ? userLink()
                    :<li><Link to="/login"><i className="fas fa-user"></i> LOGIN</Link></li>
                }
                
            </ul></nav>
      

      </header>
       
    )
}

export default Header

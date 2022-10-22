import { Link } from 'react-router-dom';
import './topbar.css';

function TopBar() {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
                <Link to='https://www.facebook.com/ainuddinal.azad.1/'><i className="topIcon fab fa-facebook-square"></i></Link>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-linkedin"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className='link' to='/'>Home</Link>
                    </li>
                    <li className="topListItem"><Link className='link' to='/'>About</Link></li>
                    <li className="topListItem"><Link className='link' to='/'>Contact</Link></li>
                    <li className="topListItem"><Link className='link' to='/write'>Write</Link></li>
                    <li className="topListItem">{user && "Logout"}</li>
                </ul>

            </div>

            <div className="topRight">
                {
                    user ? (

                        <img className='topImg' src="https://dl.airtable.com/.attachmentThumbnails/23eabfe25b802553de9c5abc225a65ac/2cee3ad0" alt="profile" />
                    ):(<>
                        <ul className='topList'>
                            <li className='topListItem'>
                                <Link className='link' to='/login'>Login</Link>
                            </li>
                            <li className='topListItem'>
                                <Link className='link' to='/register'>Register</Link>
                            </li>
                        </ul>
                    </>
                    )
                }
                <i className=" topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default TopBar

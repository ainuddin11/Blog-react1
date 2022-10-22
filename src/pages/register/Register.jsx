import './register.css'
import { Link } from 'react-router-dom'
export default function Register() {
    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            
            <form action="" className="registerForm">
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Enter your username...' />
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter your email...' />
                <label htmlFor="">Password</label>
                <input type="password"   placeholder='Enter your password' />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton"><Link className='link' to='/login'>Login</Link></button>
        </div>
    )
}

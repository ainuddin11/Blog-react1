import './setting.css';
import Sidebar from '../../components/sidebar/Sidebar';
export default function Setting() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingsForm">
                    <label htmlFor="fileInput">Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://dl.airtable.com/.attachmentThumbnails/6ac10df8f0eb275f7695664162853d3a/db7c80a5" alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fas fa-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{display:'none'}} />
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text"  placeholder='Safak'/>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='safak@gmail.com' />
                    <label htmlFor="">Passwoed</label>
                    <input type="password" placeholder='password'/>
                    <button className='settingsSubmit'>Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}

import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
           <div className="sidebarItem">
               <span className='sidebarTitle'>About Me</span>
               <img className='sidebarImg' src="https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg" alt="about me" />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis hic debitis laborum velit adipisci ex pariatur </p>
           </div>
           <div className="sidebarItem">
               <span className="sidebarTitle">Catagoris</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Camera</li>
                </ul>
           </div>
           <div className="sidebarSocial">
         
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-linkedin"></i>
            
           </div>
        </div>
    )
}

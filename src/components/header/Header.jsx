import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="hederTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>

            </div>
            <img className='headerImg' src="https://dl.airtable.com/.attachments/97a67b32630a587e482863a61861607b/547d4b22/product-6.jpg" alt="" />
        </div>
    )
}

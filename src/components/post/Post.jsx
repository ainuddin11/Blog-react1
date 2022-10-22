import './post.css'

export default function Post() {
    return (
        <div className='post'>
            <img className='postImg' src="https://dl.airtable.com/.attachmentThumbnails/b33194270cbab72b1336f7fed5c06e95/111a3973" alt="psot image" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                    

                </div>
                
                <span className="postTitle">Lorem ipsum dolor sit amet.</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ullam esse quam itaque commodi, necessitatibus, est, deserunt nisi quas numquam eaque? Aspernatur, iure. Aliquam perferendis quae, facere accusantium vel dignissimos.</p>
        </div>
    )
}

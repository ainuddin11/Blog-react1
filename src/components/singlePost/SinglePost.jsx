import './singlePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src="https://dl.airtable.com/.attachmentThumbnails/0aae65b4443275e8b33912b158d7c0cb/df614602" alt="singgle post image" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i class="singlePostIcon far fa-edit"></i>
                        <i class="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author : <b>Anik</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className='singlePostDesc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores minus suscipit corporis minima reiciendis, accusantium earum, voluptatem ipsam unde natus amet placeat tempora est ab eos alias sapiente voluptatum dignissimos aperiam repellat pariatur exercitationem mollitia id! Nesciunt sequi repudiandae optio nisi quod! Inventore qui ipsum fugiat voluptas officia! Mollitia magni maxime fugiat, eos blanditiis perferendis quis at nulla veritatis quasi illum ducimus facere corporis porro commodi vel reiciendis distinctio labore in quae. Quam perferendis sunt, omnis eui repudiandae optio nisi quod! Inventore qui ipsum fugiat voluptas officia! Mollitia magni maxime fugiat, eos blanditiis perferendis quis at nulla veritatis quasi illum ducimus facere corporis porro commodi vel reiciendis distinctio labore in quae. Quam perferendis sunt, omnis eui repudiandae optio nisi quod! Inventore qui ipsum fugiat voluptas officia! Mollitia magni maxime fugiat, eos blanditiis perferendis quis at nulla veritatis quasi illum ducimus facere corporis porro commodi vel reiciendis distinctio labore in quae. Quam perferendis sunt, omnis expedita aliquid itaque distinctio ab fuga tenetur ullam! Itaque quasi omnis minus vero quidem veniam vel fugiat illum culpa, accusantium quod iusto ea!</p>
            </div>
        </div>
    )
}

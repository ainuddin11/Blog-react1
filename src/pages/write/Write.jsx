import './write.css'

export default function Write() {
    return (
        <div className='write'>
            <img src="https://dl.airtable.com/.attachmentThumbnails/6ac10df8f0eb275f7695664162853d3a/db7c80a5" alt="newimg"  className='writeImg' />
          <div className="writeForm">
              <div className="writeFormGroup">
                  <label htmlFor="fileInput">
                  <i className="writeIcon fas fa-plus"></i>
                  </label>
                  <input type="file" id='fileInput' style={{display:'none'}} />
                  <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />

              </div>
              <div className="writeFormGroup">
                  <textarea type='text' className='writeInput writeText' placeholder='Write your story....'></textarea>
              </div>
              <button className="writeSubmit">Publish</button>
          </div>
        </div>
    )
}

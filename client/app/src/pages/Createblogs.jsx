import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Createblogs() {
  
  const [blogInfo, setBlogInfo] = useState({
    title: '',
    description: '',
  })

  useEffect(() => {

    return () => {
    }
  }, [])

  // get the navigate function reference
  const navigate = useNavigate()

  const onAddBlog = async () => {
    if (blogInfo.title.length == 0) {
      toast.warn('Please enter title')
    } else if (blogInfo.description.length == 0) {
      toast.warn('Please enter description')
    } else {
      // make the post API
      const result = await Category(blogInfo.title, blogInfo.description)
      if (result['status'] == 'success') {
        toast.success('Successfully added a task')

        // redirect to the home screen
        navigate('/categoryList')
      } else {
        toast.error(result['error'])
      }
    }
  }


return (
  <div className='container'>
   
    <div className="row">
    
      <div className="col"></div>
      <div className="col">
      <h1>Add Blog</h1>
        <div className="mb-3">
          <label htmlFor="blog-title" className="form-label">Title</label>
          <input  onChange={(e) => {
            setBlogInfo({ ...blogInfo, title: e.target.value })
          }}
          type="text" className="form-control" id="category-title" />
        </div>
        <div className="mb-3">
          <label htmlFor="cat-discription" className="form-label">Discription</label>
          <textarea onChange={(e) => {
            setBlogInfo({ ...blogInfo, description: e.target.value })
          }}
           className="form-control" id="cat-discription" />
        </div>
        <div className="mb-3">
          <button onClick={onAddCategory} className="btn" id='addCategory-btn'>Add Category</button>
        </div>

        


      </div>
      <div className="col"></div>
    </div>


  </div>
)
}

export default Createblogs

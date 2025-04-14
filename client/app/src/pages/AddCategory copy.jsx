import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Category } from '../services/category';

function AddCategory() {
  
    const [categoryInfo, setCategoryInfo] = useState({
      title: '',
      description: '',
    })
  
    useEffect(() => {
  
      return () => {
      }
    }, [])
  
    // get the navigate function reference
    const navigate = useNavigate()
  
    const onAddCategory = async () => {
      if (categoryInfo.title.length == 0) {
        toast.warn('Please enter title')
      } else if (categoryInfo.description.length == 0) {
        toast.warn('Please enter description')
      } else {
        // make the post API
        const result = await Category(categoryInfo.title, categoryInfo.description)
        if (result['status'] == 'success') {
          toast.success('Successfully added a task')
  
          // redirect to the home screen
          navigate('/showcategory')
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
        <h1>add category page</h1>
          <div className="mb-3">
            <label htmlFor="category-title" className="form-label">Category</label>
            <input  onChange={(e) => {
              setCategoryInfo({ ...categoryInfo, title: e.target.value })
            }}
            type="text" className="form-control" id="category-title" />
          </div>
          <div className="mb-3">
            <label htmlFor="cat-discription" className="form-label">Discription</label>
            <textarea onChange={(e) => {
              setCategoryInfo({ ...categoryInfo, description: e.target.value })
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

export default AddCategory

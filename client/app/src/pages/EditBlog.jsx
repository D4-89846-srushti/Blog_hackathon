import React from 'react'
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { editBlog } from '../services/blogs';
import { useLocation } from 'react-router-dom';
import { getMyBlogs } from '../services/blogs';

function EditBlog() {

  const [blogInfo , setBlogInfo] = useState({
    title :"",
    contents :"",
    categoryId:""
  })

    // const [blogs , setBlogs] = useState([])
  

  const navigate = useNavigate()

  const location = useLocation();
  const blogID = location.state?.blogID;

  // console.log("Received Blog ID:", blogID);
  // const getBlogs = async () =>{
  //     const result = await getMyBlogs();
  
  //     if(result.status == 'success'){
  //       setBlogs(result.data)
  //     }
  //     else{
  //       toast.error(result.error)
  //     }
  //   }

  const onEditBlog = async () =>{
        if (blogInfo.title.length == 0) {
          toast.warn("Please enter title");
        } else if (blogInfo.contents.length == 0) {
          toast.warn("Please enter content");
        }else if (blogInfo.categoryId.length == 0) {
          toast.warn("Please enter category");
        } else {
          // make the post API
          const result = await editBlog(
            blogInfo.title,
            blogInfo.contents,
            blogInfo.categoryId,
            blogID
          );
          if (result["status"] == "success") {
            toast.success("Successfully updated blog");
    
            // redirect to the home screen
            navigate("/home/myblogs");
          } else {
            toast.error(result["error"]);
          }
        }
  }

  // useEffect(()=>{
  //     getBlogs(),[]
  //   })

  return (
    <div className="container">
      <div className="row">
      <h1>update blog</h1>
          <hr />
          <br />
          <br />
        <div className="col-3"></div>
        <div className="col">
          <div className="mb-3">
            <label htmlFor="category-title" className="form-label">
              title
            </label>
            <input
              onChange={(e) => {
                setBlogInfo({ ...blogInfo, title: e.target.value });
              }}
              type="text"
              className="form-control"
              id="category-title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cat-discription" className="form-label">
              contents
            </label>
            <textarea
              onChange={(e) => {
                setBlogInfo({ ...blogInfo, contents: e.target.value });
              }}
              className="form-control"
              id="cat-discription"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cat-discription" className="form-label">
              category
            </label>
            <input
              onChange={(e) => {
                setBlogInfo({ ...blogInfo, categoryId: e.target.value });
              }}
              type="text"
              className="form-control"
              id="category-title"
            />
          </div>
          <div className="mb-3 mt-5">
            <button
              onClick={onEditBlog}
              className="btn"
              id="addCategory-btn"
            >
              save changes
            </button>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default EditBlog

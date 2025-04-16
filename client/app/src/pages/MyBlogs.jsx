import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { getMyBlogs } from '../services/blogs';

function MyBlogs() {

  const [blogs , setBlogs] = useState([])

  const getBlogs = async () =>{
    const result = await getMyBlogs();

    if(result.status == 'success'){
      setBlogs(result.data)
    }
    else{
      toast.error(result.error)
    }
  }

  useEffect(()=>{
    getBlogs(),[]
  })

  return (
    <div className=" container mytable">
      <h1 className="page-heder">your blogs are here..</h1>
      <hr />
      <br />
      {blogs.length == 0 && (
        <h4>there are no blogs at the moment , please add one.</h4>
      )}
      {blogs.length > 0 && (
        <table className="table w-100 table-stripped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              {/* <th>Author</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => {
              return (
                <tr key={blog.id}>
                  <td>{blog.blogID}</td>
                  <td>{blog.b_title}</td>
                  <td>{blog.c_title}</td>
                  <td>{blog.created_time}</td>
                  {/* <td>{blog.}</td> */}
                  <td>
                    <button
                      onClick={() => {
                        onDeleteTask(blog.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default MyBlogs

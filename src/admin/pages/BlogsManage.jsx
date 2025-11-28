import React, { useState } from "react";

const BlogsManage = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleAddBlog = () => {
    if (!title || !shortDesc || !content || !image) {
      alert("Please fill all fields");
      return;
    }

    const newBlog = {
      id: Date.now(),
      title,
      shortDesc,
      content,
      image: previewImage,
    };

    setBlogs([...blogs, newBlog]);

    // Clear fields
    setTitle("");
    setShortDesc("");
    setContent("");
    setImage(null);
    setPreviewImage(null);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((b) => b.id !== id));
  };

  return (
    <div className="w-full min-h-screen flex justify-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-semibold text-center">Manage Blogs</h1>

        {/* Add Blog Section */}
        <div className="bg-white p-6 rounded-xl shadow mt-6">
          <h2 className="text-xl font-semibold mb-4">Add New Blog</h2>

          <input
            type="text"
            placeholder="Blog Title"
            className="w-full border p-3 rounded-lg mb-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Short Description"
            className="w-full border p-3 rounded-lg mb-4"
            rows="2"
            value={shortDesc}
            onChange={(e) => setShortDesc(e.target.value)}
          ></textarea>

          <textarea
            placeholder="Full Blog Content"
            className="w-full border p-3 rounded-lg mb-4"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          <input
            type="file"
            accept="image/*"
            className="w-full border p-3 rounded-lg"
            onChange={handleImageChange}
          />

          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="w-full max-h-60 object-cover rounded-xl mt-4"
            />
          )}

          <button
            onClick={handleAddBlog}
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition w-full"
          >
            Add Blog
          </button>
        </div>

        {/* Blog List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-5 rounded-xl shadow flex flex-col items-center"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-lg"
              />

              <h3 className="text-lg font-semibold mt-3">{blog.title}</h3>
              <p className="text-gray-600 text-center">{blog.shortDesc}</p>

              <button
                onClick={() => handleDelete(blog.id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition w-full"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsManage;

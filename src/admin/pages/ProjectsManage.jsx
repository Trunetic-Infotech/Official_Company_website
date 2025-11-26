import React, { useState } from "react";

const ProjectsManage = () => {
  const [projects, setProjects] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleAddProject = () => {
    if (!newTitle || !newDesc || !newImage) {
      alert("Please fill all fields");
      return;
    }

    const newProject = {
      id: Date.now(),
      title: newTitle,
      desc: newDesc,
      image: previewImage,
    };

    setProjects([...projects, newProject]);

    // Reset input fields
    setNewTitle("");
    setNewDesc("");
    setNewImage(null);
    setPreviewImage(null);
  };

  const handleDelete = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold">Manage Projects</h1>

      {/* Add Project Section */}
      <div className="bg-white p-6 rounded-xl shadow mt-6">
        <h2 className="text-xl font-semibold mb-4">Add New Project</h2>

        <input
          type="text"
          placeholder="Project Title"
          className="w-full border p-3 rounded-lg mb-4"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <textarea
          placeholder="Project Description"
          className="w-full border p-3 rounded-lg mb-4"
          rows="3"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
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
          onClick={handleAddProject}
          className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Add Project
        </button>
      </div>

      {/* List of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-5 rounded-xl shadow relative"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg"
            />

            <h3 className="text-lg font-semibold mt-3">{project.title}</h3>
            <p className="text-gray-600">{project.desc}</p>

            <button
              onClick={() => handleDelete(project.id)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition w-full"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsManage;

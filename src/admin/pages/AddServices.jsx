import React, { useState } from "react";

const AddServices = () => {
  const [services, setServices] = useState([]);
  const [icon, setIcon] = useState(null);
  const [previewIcon, setPreviewIcon] = useState(null);
  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");

  // Handle Icon Upload & Preview
  const handleIconChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIcon(file);
      setPreviewIcon(URL.createObjectURL(file));
    }
  };

  // Add Service
  const handleAddService = () => {
    if (!icon || !serviceName || !description) {
      alert("Please fill all fields");
      return;
    }

    const newService = {
      id: Date.now(),
      icon: previewIcon,
      serviceName,
      description,
    };

    setServices([...services, newService]);

    // Clear fields
    setIcon(null);
    setPreviewIcon(null);
    setServiceName("");
    setDescription("");
  };

  // Delete Service
  const handleDelete = (id) => {
    setServices(services.filter((s) => s.id !== id));
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-semibold text-center">Manage Services</h1>

      {/* Upload Section */}
      <div className="bg-white p-6 rounded-xl shadow mt-6 max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Add New Service</h2>

        <input
          type="file"
          accept="image/*"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={handleIconChange}
        />
        {previewIcon && (
          <img
            src={previewIcon}
            alt="Preview"
            className="w-20 h-20 object-cover rounded-full mb-4 mx-auto"
          />
        )}

        <input
          type="text"
          placeholder="Service Name"
          className="w-full border p-3 rounded-lg mb-4"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="w-full border p-3 rounded-lg mb-4"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={handleAddService}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition w-full"
        >
          Add Service
        </button>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-5 rounded-xl shadow relative flex flex-col items-center"
          >
            {/* Icon on top */}
            <img
              src={service.icon}
              alt={service.serviceName}
              className="w-16 h-16 object-cover rounded-full mb-4"
            />

            <h3 className="text-lg font-semibold">{service.serviceName}</h3>

            <p className="text-gray-600 text-center mt-2">{service.description}</p>

            <button
              onClick={() => handleDelete(service.id)}
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

export default AddServices;

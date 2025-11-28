import React, { useState } from "react";

const CertificatesManage = () => {
  const [certificates, setCertificates] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Handle Image Upload & Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // Add Certificate
  const handleAddCertificate = () => {
    if (!studentName || !courseName || !image) {
      alert("Please fill all fields");
      return;
    }

    const newCertificate = {
      id: Date.now(),
      studentName,
      courseName,
      image: previewImage,
    };

    setCertificates([...certificates, newCertificate]);

    // Clear fields after saving
    setStudentName("");
    setCourseName("");
    setImage(null);
    setPreviewImage(null);
  };

  // Delete Certificate
  const handleDelete = (id) => {
    setCertificates(certificates.filter((c) => c.id !== id));
  };

  return (
    <div className="w-full min-h-screen flex justify-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-semibold text-center">Manage Certificates</h1>

        {/* Upload Section */}
        <div className="bg-white p-6 rounded-xl shadow mt-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Upload New Certificate</h2>

          <input
            type="text"
            placeholder="Student Name"
            className="w-full border p-3 rounded-lg mb-4"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Course Name"
            className="w-full border p-3 rounded-lg mb-4"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />

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
            onClick={handleAddCertificate}
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition w-full"
          >
            Upload Certificate
          </button>
        </div>

        {/* Certificates List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white p-5 rounded-xl shadow flex flex-col items-center"
            >
              <img
                src={cert.image}
                alt={cert.studentName}
                className="w-full h-40 object-cover rounded-lg"
              />

              <h3 className="text-lg font-semibold mt-3 text-center">
                {cert.studentName}
              </h3>

              <p className="text-gray-600 text-center">{cert.courseName}</p>

              <button
                onClick={() => handleDelete(cert.id)}
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

export default CertificatesManage;

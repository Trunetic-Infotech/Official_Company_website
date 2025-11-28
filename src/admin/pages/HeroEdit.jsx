import React, { useState } from "react";

const HeroEdit = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    alert("Hero image updated");
  };

  return (
    <div className="w-full min-h-screen flex  justify-center bg-gray-100 p-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold text-center">Edit Hero Section</h1>

        <div className="bg-white p-6 rounded-xl shadow mt-6">
          <label className="block text-lg font-medium mb-3">
            Upload New Hero Image
          </label>

          <input
            type="file"
            accept="image/*"
            className="w-full border border-gray-300 p-2 rounded-lg"
            onChange={handleImageChange}
          />

          {previewImage && (
            <div className="mt-6 text-center">
              <p className="text-lg font-medium mb-2">Preview:</p>
              <img
                src={previewImage}
                alt="Preview"
                className="w-full max-h-80 object-cover rounded-xl shadow mx-auto"
              />
            </div>
          )}

          <button
            onClick={handleSave}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition block mx-auto"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroEdit;

import React from "react";
import { Upload, Camera } from "lucide-react";

const UploadZone = ({ uploadedImage, onImageUpload, onAnalyze }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Upload Site Image
      </h2>
      <div className="border-4 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition">
        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 mb-4">Drag and drop or click to upload</p>
        <input
          type="file"
          accept="image/*"
          onChange={onImageUpload}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg cursor-pointer inline-block"
        >
          Choose File
        </label>
      </div>

      {uploadedImage && (
        <div className="mt-6">
          <img
            src={uploadedImage}
            alt="Uploaded"
            className="w-full rounded-lg mb-4"
          />
          <button
            onClick={onAnalyze}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            <Camera className="h-5 w-5" />
            Analyze with AI
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadZone;

// pages/admin/upload-photos.js
import { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import { Camera, Upload } from 'lucide-react';

export default function UploadPhotos() {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [firebase, setFirebase] = useState(null);

  const [photoDetails, setPhotoDetails] = useState({
    caption: '',
    description: '',
    event: '',
    location: ''
  });

  // Initialize Firebase only on client side
  useEffect(() => {
    const initFirebase = async () => {
      const { storage, db } = await import('../../firebaseConfig');
      const { ref, uploadBytes, getDownloadURL } = await import('firebase/storage');
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
      
      setFirebase({ storage, db, ref, uploadBytes, getDownloadURL, collection, addDoc, serverTimestamp });
    };

    initFirebase();
  }, []);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPhotoDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!firebase || files.length === 0) return;

    setUploading(true);
    const totalFiles = files.length;
    let completed = 0;

    try {
      for (const file of files) {
        // Create a reference to storage
        const storageRef = firebase.ref(firebase.storage, `events/${Date.now()}-${file.name}`);
        
        // Upload file
        await firebase.uploadBytes(storageRef, file);
        
        // Get download URL
        const downloadURL = await firebase.getDownloadURL(storageRef);

        // Add to Firestore
        await firebase.addDoc(firebase.collection(firebase.db, 'photos'), {
          ...photoDetails,
          imageUrl: downloadURL,
          timestamp: firebase.serverTimestamp(),
          uploadedBy: 'admin' // This should be the actual user's ID
        });

        completed++;
        setProgress((completed / totalFiles) * 100);
      }

      // Reset form
      setFiles([]);
      setPhotoDetails({
        caption: '',
        description: '',
        event: '',
        location: ''
      });
      setProgress(0);
    } catch (error) {
      console.error('Error uploading photos:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Upload Event Photos</h1>
          <p className="text-gray-600">Share photos from your KABA events</p>
        </div>

        <form onSubmit={handleUpload} className="space-y-6">
          {/* Photo Upload */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Select Photos
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                <Camera className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                    <span>Upload files</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB each
                </p>
              </div>
            </div>
            {files.length > 0 && (
              <div className="mt-2">
                <p className="text-sm text-gray-600">{files.length} files selected</p>
              </div>
            )}
          </div>

          {/* Event Details */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Caption
              </label>
              <input
                type="text"
                name="caption"
                value={photoDetails.caption}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Event Name
              </label>
              <input
                type="text"
                name="event"
                value={photoDetails.event}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={photoDetails.location}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={photoDetails.description}
                onChange={handleInputChange}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Upload Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={uploading || files.length === 0}
              className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                (uploading || files.length === 0) && 'opacity-50 cursor-not-allowed'
              }`}
            >
              {uploading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Uploading ({Math.round(progress)}%)
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Photos
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

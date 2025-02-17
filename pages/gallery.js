// pages/gallery.js
import { useState, useEffect } from 'react';
import Layout from '../components/layout';
import { Camera, Map, Calendar } from 'lucide-react';

export default function GalleryPage() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const { db } = await import('../firebaseConfig');
        const { collection, getDocs, query, orderBy } = await import('firebase/firestore');
        
        const photosQuery = query(collection(db, 'photos'), orderBy('timestamp', 'desc'));
        const snapshot = await getDocs(photosQuery);
        const photoData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPhotos(photoData);
      } catch (error) {
        console.error('Error fetching photos:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    function handleKeyDown(e) {
      if (!selectedPhoto) return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          if (selectedIndex > 0) {
            setSelectedPhoto(photos[selectedIndex - 1]);
            setSelectedIndex(selectedIndex - 1);
          }
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (selectedIndex < photos.length - 1) {
            setSelectedPhoto(photos[selectedIndex + 1]);
            setSelectedIndex(selectedIndex + 1);
          }
          break;
        case 'Escape':
          setSelectedPhoto(null);
          setSelectedIndex(null);
          break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, selectedIndex, photos]);

  const openPhoto = (photo, index) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Event Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capturing moments from KABA events across the nation
          </p>
        </div>

        {/* Photo Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : photos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No photos uploaded yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="relative group cursor-pointer"
                onClick={() => openPhoto(photo, index)}
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={photo.imageUrl}
                    alt={photo.caption}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <p className="font-semibold truncate">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Photo Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => {
              setSelectedPhoto(null);
              setSelectedIndex(null);
            }}
          >
            <div
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.caption}
                  className="w-full h-auto"
                />
                <button
                  onClick={() => {
                    setSelectedPhoto(null);
                    setSelectedIndex(null);
                  }}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                >
                  <span className="sr-only">Close</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Navigation Arrows */}
                {selectedIndex > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openPhoto(photos[selectedIndex - 1], selectedIndex - 1);
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors"
                  >
                    <span className="sr-only">Previous</span>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}
                {selectedIndex < photos.length - 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openPhoto(photos[selectedIndex + 1], selectedIndex + 1);
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors"
                  >
                    <span className="sr-only">Next</span>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedPhoto.caption}</h3>
                <div className="space-y-2 text-gray-600">
                  {selectedPhoto.timestamp && (
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{new Date(selectedPhoto.timestamp.toDate()).toLocaleDateString()}</span>
                    </div>
                  )}
                  {selectedPhoto.location && (
                    <div className="flex items-center">
                      <Map className="w-5 h-5 mr-2" />
                      <span>{selectedPhoto.location}</span>
                    </div>
                  )}
                  {selectedPhoto.event && (
                    <div className="flex items-center">
                      <Camera className="w-5 h-5 mr-2" />
                      <span>{selectedPhoto.event}</span>
                    </div>
                  )}
                </div>
                {selectedPhoto.description && (
                  <p className="mt-4 text-gray-600">{selectedPhoto.description}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

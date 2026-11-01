import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  images,
  title
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || images.length === 0) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative max-w-4xl w-full flex flex-col items-center">
        {/* Top bar */}
        <div className="w-full flex items-center justify-between text-white mb-3 px-2">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-amber-400" />
            <span className="font-bold text-sm md:text-base">{title}</span>
            <span className="text-xs text-slate-300">({currentIndex + 1} von {images.length})</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main image */}
        <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center shadow-2xl">
          <img 
            src={images[currentIndex]} 
            alt={`${title} Foto ${currentIndex + 1}`}
            className="max-h-full max-w-full object-contain"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all"
                aria-label="Vorheriges Bild"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all"
                aria-label="Nächstes Bild"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails strip */}
        <div className="flex items-center gap-2 mt-4 overflow-x-auto max-w-full p-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                idx === currentIndex ? 'border-amber-400 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

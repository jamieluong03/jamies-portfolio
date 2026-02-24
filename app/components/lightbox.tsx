import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LongFormLightbox = ({ images, currentIndex, isOpen, onClose, onNext, onPrev }: LightboxProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-[60] p-2 bg-black/40 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="text-white w-6 h-6" />
          </button>

          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-[60] pointer-events-none">
            <button onClick={onPrev} className="pointer-events-auto p-3 bg-black/40 hover:bg-black/60 rounded-full text-white">
              <ChevronLeft size={32} />
            </button>
            <button onClick={onNext} className="pointer-events-auto p-3 bg-black/40 hover:bg-black/60 rounded-full text-white">
              <ChevronRight size={32} />
            </button>
          </div>

          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="relative w-full max-w-4xl h-full overflow-y-auto rounded-lg custom-scrollbar shadow-2xl"
          >
            <div className="relative w-full min-h-full">
               <img
                src={images[currentIndex]}
                alt={`Work sample ${currentIndex + 1}`}
                className="w-full h-auto block rounded-lg"
                loading="eager"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
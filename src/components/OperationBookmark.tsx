import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

interface MediaItem {
  url: string;
  designation: string;
  description: string;
  type: 'image' | 'video';
}

interface OperationStep {
  title: string;
  description: string | React.ReactNode;
  designation: string;
  relatedMedia?: string[];
}

interface OperationBookmarkProps {
  title: string;
  description: string;
  operationCode: string;
  steps: OperationStep[];
  media?: MediaItem[];
}

const VideoThumbnail: React.FC<{ src: string }> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    if (!video || !canvas) return;

    video.addEventListener('loadeddata', () => {
      // Seek to the first frame
      video.currentTime = 0.1;
    });

    video.addEventListener('seeked', () => {
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      setThumbnail(canvas.toDataURL());
    });

    return () => {
      video.removeEventListener('loadeddata', () => {});
      video.removeEventListener('seeked', () => {});
    };
  }, [src]);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        crossOrigin="anonymous"
        style={{ display: 'none' }}
      />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      {thumbnail ? (
        <img
          src={thumbnail}
          alt="Video thumbnail"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
          <span className="text-white text-xs">Loading...</span>
        </div>
      )}
    </>
  );
};

const OperationBookmark: React.FC<OperationBookmarkProps> = ({
  title,
  description,
  operationCode,
  steps,
  media = []
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded && media && media.length > 0 && !selectedMedia) {
      setSelectedMedia(media[0]);
    }
  };

  return (
    <div className="mb-6 border border-red-900/10 rounded-lg overflow-hidden shadow-md bg-black">
      <div 
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-900 transition-colors"
        onClick={handleExpand}
      >
        <div className="flex items-center space-x-3">
          <div className="bg-red-600 text-white p-2 rounded-md text-sm font-bold shadow-neon">
            {operationCode}
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <button 
          className="text-red-500 hover:text-white transition-colors"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="p-4 border-t border-red-900/10">
          <div className="flex flex-col md:flex-row gap-6">
            {media && media.length > 0 && (
              <div className="w-full md:w-1/3">
                <div 
                  className="bg-gray-900 rounded-lg overflow-hidden border border-red-900/10 cursor-pointer"
                  onClick={() => setIsFullscreen(true)}
                >
                  {selectedMedia ? (
                    <div>
                      {selectedMedia.type === 'image' ? (
                        <img
                          src={selectedMedia.url}
                          alt={selectedMedia.description}
                          className="w-full h-64 object-cover"
                        />
                      ) : (
                        <video
                          src={selectedMedia.url}
                          className="w-full h-64 object-cover"
                          controls
                        />
                      )}
                      <div className="p-3 bg-black">
                        <p className="text-red-500 font-bold mb-1">{selectedMedia.designation}</p>
                        <p className="text-gray-400 text-sm">{selectedMedia.description}</p>
                      </div>
                    </div>
                  ) : (
                    media[0].type === 'image' ? (
                      <img
                        src={media[0].url}
                        alt={media[0].description}
                        className="w-full h-64 object-cover"
                      />
                    ) : (
                      <video
                        src={media[0].url}
                        className="w-full h-64 object-cover"
                        controls
                      />
                    )
                  )}
                </div>
                
                {media.length > 1 && (
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    {media.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedMedia(item)}
                        className={`h-16 overflow-hidden rounded border-2 ${
                          selectedMedia === item ? 'border-red-500' : 'border-transparent'
                        }`}
                      >
                        {item.type === 'image' ? (
                          <img
                            src={item.url}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <VideoThumbnail src={item.url} />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            <div className={`w-full ${media && media.length > 0 ? 'md:w-2/3' : ''}`}>
              <p className="text-gray-400 mb-4">{description}</p>
              
              <h4 className="text-lg font-bold text-white mb-3 border-b border-red-500 pb-1">
                Operational Steps
              </h4>
              
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="bg-gray-900 p-4 rounded-md border-l-4 border-red-500">
                    <div className="flex justify-between mb-2">
                      <h5 className="font-bold text-white">{step.title}</h5>
                      <span className="bg-red-600 text-white text-xs px-2 py-1 rounded shadow-neon">
                        {step.designation}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                    {step.relatedMedia && step.relatedMedia.length > 0 && (
                      <div className="mt-2 flex gap-2">
                        {step.relatedMedia.map((designation) => {
                          const mediaItem = media?.find(item => item.designation === designation);
                          return mediaItem && (
                            <button
                              key={designation}
                              onClick={() => setSelectedMedia(mediaItem)}
                              className="text-xs text-red-400 hover:text-red-300"
                            >
                              View {designation}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Media Modal */}
      {isFullscreen && selectedMedia && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
            onClick={() => setIsFullscreen(false)}
          >
            <X size={32} />
          </button>
          <div className="max-w-7xl w-full" onClick={e => e.stopPropagation()}>
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.url}
                alt={selectedMedia.description}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            ) : (
              <video
                src={selectedMedia.url}
                className="w-full h-auto max-h-[90vh]"
                controls
                autoPlay
              />
            )}
            <div className="mt-4 text-center">
              <h3 className="text-red-500 font-bold text-xl mb-2">{selectedMedia.designation}</h3>
              <p className="text-white">{selectedMedia.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OperationBookmark;
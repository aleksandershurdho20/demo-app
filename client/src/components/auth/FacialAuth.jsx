import React, { useState, useRef } from 'react';
import { Camera, Check, X, Loader2 } from 'lucide-react';
import AlertMessage from '../alert/AlertMessage';

const FacialAuth = ({ handleBiometricAuth }) => {
  const [isCapturing, setIsCapturing] = useState(false);
  const [authStatus, setAuthStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsCapturing(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
      setAuthStatus('error');
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsCapturing(false);
  };

  const captureAndAuthenticate = async () => {
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const isAuthenticated = Math.random() > 0.5;
    setAuthStatus(isAuthenticated ? 'success' : 'failed');
    setIsLoading(false);
    stopCamera();
  };

  const reset = () => {
    setAuthStatus(null);
    setIsLoading(false);
    stopCamera();
  };



  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Facial Authentication</h2>
        <p className="text-gray-600">Please position your face in the camera frame</p>
      </div>

      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
        {isCapturing ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Camera className="w-12 h-12 text-gray-400" />
          </div>
        )}
      </div>

      <div className="space-y-4">
        {authStatus && <AlertMessage status={authStatus} />}

        <div className="flex justify-center gap-4">
          {!isCapturing && !authStatus && (
            <>
            <button
              onClick={startCamera}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <Camera className="w-4 h-4" />
              Start Camera
            </button>
            <button onClick={handleBiometricAuth}>Go Back</button>
            </>
          )}

          {isCapturing && !isLoading && (
            <button
              onClick={captureAndAuthenticate}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              Verify Identity
            </button>
          )}

          {isLoading && (
            <button
              disabled
              className="px-4 py-2 bg-gray-400 text-white rounded-lg flex items-center gap-2"
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              Verifying...
            </button>
          )}

          {authStatus && (
            <button
              onClick={reset}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacialAuth;
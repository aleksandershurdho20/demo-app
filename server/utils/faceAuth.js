// const path = require('path');
// const faceapi = require('@vladmandic/face-api');
// const sharp = require('sharp');
// faceapi.env.monkeyPatch({ Canvas: sharp });
// async function initializeFaceApi() {
//     const faceApiModelPath = path.join(__dirname, '../face-api-models');
//     await Promise.all([
//       faceapi.nets.faceRecognitionNet.loadFromDisk(faceApiModelPath),
//       faceapi.nets.faceLandmark68Net.loadFromDisk(faceApiModelPath),
//       faceapi.nets.ssdMobilenetv1.loadFromDisk(faceApiModelPath),
//     ]);
//     console.log('Face-api models loaded');
//   }

//   async function processImage(imageBuffer) {
//     const img = await sharp(imageBuffer)
//       .jpeg()
//       .toBuffer();
  
//     const detections = await faceapi
//       .detectSingleFace(img)
//       .withFaceLandmarks()
//       .withFaceDescriptor();
  
//     if (!detections) {
//       throw new Error('No face detected in image');
//     }
  
//     return detections.descriptor;
//   }

//   module.exports = {
//     initializeFaceApi,
//     processImage
//   }
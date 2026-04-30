# sfm-web-toy

Interactive Epipolar Geometry in your browser. 
Click on the left image to instantly draw the corresponding epipolar line on the right.

## How it works
This is a serverless application. The heavy lifting (feature extraction, matching, and Fundamental Matrix calculation via SIFT/FLANN/RANSAC) is done beforehand using Python and OpenCV. 
The resulting 3x3 Fundamental Matrix is hardcoded into JavaScript. When you click, the browser simply performs a matrix multiplication (`l = F * p`) to render the epipolar line instantly.

## Try it out
Live Demo: [https://yoshimasa1700.github.io/sfm-web-toy/](https://yoshimasa1700.github.io/sfm-web-toy/)

// This can be run with something like
// Fiji.app/ImageJ.sh --headless -- --run get_version.js (in Docker environment using ImageJ.sh)
// OR
// Fiji.app/ImageJ-linux64 --ij2 --headless --console --run get_version.js
importClass(Packages.ij.IJ);
print(IJ.getVersion());

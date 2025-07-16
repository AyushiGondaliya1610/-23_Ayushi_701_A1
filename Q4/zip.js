const fs=require('fs');
const archiver = require('archiver');
const path = require('path');
const { arch } = require('os');

//fol to zip

const folderToZip = 'myfolder';
const outputZip='myfolder.zip';

//craete op stream for zip

const output = fs.createWriteStream(outputZip);
const archive=archiver('zip', {
    zlib: { level: 9 } // Set the compression level
});

output.on('close', () => {

    console.log('Zip file created successfully:', outputZip);

});

archive.on('error', (err) => {
    throw err;
});
archive.pipe(output);

archive.directory(folderToZip, false);
archive.finalize();
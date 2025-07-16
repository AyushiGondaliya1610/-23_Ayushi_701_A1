const AdmZip = require('adm-zip');
const fs = require('fs');
const path = require('path');

const zpath=path.join(__dirname,'flower.zip');
const oppath=path.join(__dirname,'nzip');

if(!fs.existsSync(oppath)){
    fs.mkdirSync(oppath,{recursive:true});
}

try{
    const zip = new AdmZip(zpath);
    zip.extractAllTo(oppath, true);
    console.log('Extraction complete successfully.',oppath);
}catch(err){
    console.error('fail extraction:', err.message);
}
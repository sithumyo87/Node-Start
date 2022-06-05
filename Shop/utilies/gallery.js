const imageUpload = async (req,res,next) =>{
    console.log();
    file = req.files.file;
    filename = new Date().valueOf() + '_'+req.files.file.name;
    file.mv(`./uploads/${filename}`);
    req.body['image'] = filename;
    next();
}

const imageUploads = async(req,res,next) =>{
    filenames = [];
    files = req.files.files;
    // console.log(files);
    files.forEach(file => {
        filename = new Date().valueOf() + '_' + file.name;
        file.mv(`./uploads/${filename}`);
        filenames.push(filename);
    });
    req.body['images'] = filenames.join(',');
    next();
}

module.exports = {
    imageUpload,imageUploads
}
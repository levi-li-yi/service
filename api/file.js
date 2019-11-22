const xlsx = require('xlsx');
let parse = require('co-busboy');

modules.exports = function batchInsertFile(formData) {
    let file = parse(formData);
    const workbook = getFile(file);
    const sheetsName = workbook.SheetNames;
    const datas = [];
    for(const sheetName of sheetsName) {
        const worksheet = workbook.Sheet[sheetName];
        const data = xlsx.utils.sheet_add_json(worksheet);
        datas.push(data);
    }
    return datas
};

function getFile(stream) {
    return new Promise((resolve) => {
        let buffers = [];
        stream.on('data', function(data) {
            buffers.push(data);
        });
        stream.on('end', function() {
            let buffer = Buffer.concat(buffers);
            let workbook = xlsx.read(buffer, {type: 'buffer'});
            resolve(workbook)
        })
    })
}
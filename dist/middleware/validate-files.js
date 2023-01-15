"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateFileUpload = (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
        return res.status(400).json({
            msg: "no hay archivos para subir"
        });
    }
    next();
};
module.exports = {
    validateFileUpload
};
//# sourceMappingURL=validate-files.js.map
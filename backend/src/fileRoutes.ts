import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    // Here you can add code to process the file, analyze it, etc.
    res.json({ filePath: `/uploads/${req.file.filename}` });
  } else {
    res.json({ error: 'File upload failed' });
  }
});

export default router;

import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { connectToDatabase } from './lib/db.js';
import authRouter from './routes/authRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);
app.use('/uploads', express.static('uploads')); // Serve uploaded files





const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      return cb(null, "./public/images")
    },
    filename: function (req, file, cb) {
      return cb(null, `${Date.now()}_${file.originalname}`)
    }
  })
   
  const upload = multer({storage})

  app.post('/upload', upload.single('image'), async (req, res) => {
    const file = req.file;
    const { name, price } = req.body; // Extract name and price from the request body
  
    if (!file) {
      return res.status(400).send({ message: 'No image uploaded.' });
    }

    try {
        const db = await connectToDatabase();
        const sql = 'INSERT INTO fashion (name, price, image) VALUES (?, ?, ?)';
        const [result] = await db.query(sql, [name, price, imagePath]);
    
        return res.status(200).send({
          message: 'Image uploaded and data saved successfully.',
          data: {
            id: result.insertId,
            name,
            price,
            image: imagePath,
          },
        });
      } catch (err) {
        console.error('Error saving to database:', err.message);
        return res.status(500).json({ error: err.message });
      }
    });

// // Upload image, name, and price
// app.post('/upload', upload.single('image'), async (req, res) => {
//   const file = req.file;
//   const { name, price } = req.body; // Extract name and price from the request body

//   if (!file) {
//     return res.status(400).send({ message: 'No image uploaded.' });
//   }

//   const imagePath = `/uploads/${file.filename}`; // Path to the uploaded file

//   try {
//     const db = await connectToDatabase();
//     const sql = 'INSERT INTO fashion (name, price, image) VALUES (?, ?, ?)';
//     const [result] = await db.query(sql, [name, price, imagePath]);

//     return res.status(200).send({
//       message: 'Image uploaded and data saved successfully.',
//       data: {
//         id: result.insertId,
//         name,
//         price,
//         image: imagePath,
//       },
//     });
//   } catch (err) {
//     console.error('Error saving to database:', err.message);
//     return res.status(500).json({ error: err.message });
//   }
// });


// Fetch all products
app.get('/', async (req, res) => {
    try {
      const db = await connectToDatabase();
      const [rows] = await db.query('SELECT id, name, price, image FROM fashion');
      console.log(rows);
      return res.status(200).json(rows);
    } catch (err) {
      console.error('Error fetching products:', err.message);
      return res.status(500).json({ error: err.message });
    }
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

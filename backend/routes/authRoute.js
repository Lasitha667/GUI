import express from 'express'
import {connectToDatabase} from '../lib/db.js'

import jwt from 'jsonwebtoken'

const router = express.Router()


// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    console.log(req.body); // Debugging

    try {
        const db = await connectToDatabase();

        // Check if user exists
        const [user] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
        console.log("user is exists")

        if (user.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        const foundUser = user[0];

        // Compare password (assuming hashed password in DB)
        // const isMatch = await bcrypt.compare(password, foundUser.password);
        const isMatch = password === foundUser.password; // ❗ Remove this and use bcrypt if passwords are hashed

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
            
        }else{
            console.log("matched")
        }

        // Generate JWT token
        // const token = jwt.sign({ id: foundUser.id, email: foundUser.email }, SECRET_KEY, { expiresIn: "1h" });

        return res.status(200).json({ message: "Login successful", user: { id: foundUser.id, username: foundUser.username, email: foundUser.email } });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});


router.post('/add', async (req, res) => {
     const { username, email, password } = req.body;


    console.log(req.body)

    

    try {
        const db = await connectToDatabase();

        const [existingUser] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(409).json({ message: "User already exists" });
        }
        // const hashPassword = await bcrypt.hash(password, 10);
        
        await db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", 
            [username, email, password]);

        return res.status(201).json({ message: "User added successfully" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});



router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const [rows] = await db.query('SELECT username, email FROM users');
        console.log(rows);
        return res.status(200).json(rows);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});




export default router;
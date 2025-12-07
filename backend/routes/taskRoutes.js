import express from 'express';
const router = express.Router();

// Example task routes
router.get('/', (req, res) => {
  res.json({ message: "Tasks route working" });
});

export default router;

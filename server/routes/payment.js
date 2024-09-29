import express from 'express';

const router = express.Router();

// ROUTE 1
router.get('/get-payment', (req, res) => {
    res.json("Payment Details");
})

export default router
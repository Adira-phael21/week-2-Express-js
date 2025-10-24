const express = require('express');
const router = express.Router();
const db = require('../models/db'); // adjust path if your models index is elsewhere


// Get all products
router.get('/products', async (req, res) => {
    try {
        const products = await db.getAllProducts();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get product by ID
router.get('/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await db.getProductById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create new product
router.post('/products', async (req, res) => {
    try {
        const productData = req.body;
        const newProduct = await db.createProduct(productData);
        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update product by ID
router.put('/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const updates = req.body;
        const updatedProduct = await db.updateProduct(productId, updates);
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete product by ID
router.delete('/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const success = await db.deleteProduct(productId);
        if (!success) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
// db.js - In-memory database for products
const { v4: uuidv4 } = require('uuid');

// Simulate a database connection (for demonstration purposes)
function connectdb() {
  console.log('Connected to the in-memory database');
}

// In-memory storage
let products = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop for professionals',
    price: 1299.99,
    category: 'Electronics',
    inStock: true
  },
  {
    id: '2',
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse',
    price: 29.99,
    category: 'Electronics',
    inStock: true
  },
  {
    id: '3',
    name: 'Office Chair',
    description: 'Comfortable ergonomic office chair',
    price: 249.99,
    category: 'Furniture',
    inStock: false
  },
  {
    id: '4',
    name: 'Desk Lamp',
    description: 'LED desk lamp with adjustable brightness',
    price: 45.00,
    category: 'Furniture',
    inStock: true
  }
];

// Database operations
const db = {
  // Get all products
  getAllProducts() {
    return [...products];
  },

  // Get product by ID
  getProductById(id) {
    return products.find(product => product.id === id);
  },

  // Create new product
  createProduct(productData) {
    const newProduct = {
      id: uuidv4(),
      ...productData
    };
    products.push(newProduct);
    return newProduct;
  },

  // Update product by ID
  updateProduct(id, updates) {
    const index = products.findIndex(product => product.id === id);
    if (index === -1) {
      return null;
    }
    
    products[index] = {
      ...products[index],
      ...updates,
      id: products[index].id
    };
    
    return products[index];
  },

  // Delete product by ID
  deleteProduct(id) {
    const index = products.findIndex(product => product.id === id);
    if (index === -1) {
      return false;
    }
    
    products.splice(index, 1);
    return true;
  },

  // Filter products by category
  getProductsByCategory(category) {
    return products.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  },

  // Search products by name (case-insensitive)
  searchProducts(query) {
    return products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  },

  // Get paginated products
  getPaginatedProducts(page = 1, limit = 10) {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    
    return {
      data: products.slice(startIndex, endIndex),
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(products.length / limit),
        totalItems: products.length,
        itemsPerPage: limit
      }
    };
  },

  // Get statistics
  getStatistics() {
    const categoryCount = {};
    let totalValue = 0;
    let inStockCount = 0;

    products.forEach(product => {
      categoryCount[product.category] = (categoryCount[product.category] || 0) + 1;
      totalValue += product.price;
      if (product.inStock) {
        inStockCount++;
      }
    });

    return {
      totalProducts: products.length,
      inStockCount,
      outOfStockCount: products.length - inStockCount,
      totalValue: totalValue.toFixed(2),
      averagePrice: (totalValue / products.length).toFixed(2),
      categoryCounts: categoryCount
    };
  }
};

module.exports = { connectdb, db };
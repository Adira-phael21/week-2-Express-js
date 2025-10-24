// Product schema definition (for example, if using Mongoose or for validation)
const productSchema = {
    id: { type: 'uuid' },
    name: { type: 'string', minLength: 3, maxLength: 100, required: true },
    description: { type: 'string', required: true, minLength: 10, maxLength: 500 },
    price: { type: 'number', required: true },
    category: { type: 'string', required: true },
    inStock: { type: 'boolean', required: true }
    // Add timestamps in your ORM/ODM configuration if needed
};

// Example in-memory products array
// const products = []; // Removed duplicate declaration

// Update product by ID
function updateProduct(id, updatedData) {
    const index = products.findIndex(product => product.id === id);
    if (index === -1) {
        return null;
    }
    products[index] = {
        ...products[index],
        ...updatedData,
        id: products[index].id // Ensure ID doesn't change
    };
    return products[index];
}

// Create a new product
const { v4: uuidv4 } = require('uuid');
const products = [
  {
    id: '1',
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse',
    price: 29.99,
    category: 'Electronics',
    inStock: true,
  }
];

// Delete a product
const deleteProduct = (id) => {
    const index = products.findIndex(product => product.id === id);
    if (index === -1) {
        return false;
    }
    products.splice(index, 1);
    return true;    
}


module.exports = {
    productSchema,
    products,
    updateProduct,
    deleteProduct
};









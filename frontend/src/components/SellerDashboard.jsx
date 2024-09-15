import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
} from "@mui/material";

const SellerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    imageUrl: "",
    categoryId: "",
  });

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/product/seller",
        { withCredentials: true }
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/category/getAll",
        {
          withCredentials: true,
        }
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      if (newProduct.id) {
        await axios.put(
          `http://localhost:3000/api/product/${newProduct.id}`,
          newProduct,
          {
            withCredentials: true,
          }
        );
      } else {
        await axios.post("http://localhost:3000/api/product/add", newProduct, {
          withCredentials: true,
        });
      }
      fetchProducts();
      setNewProduct({
        name: "",
        description: "",
        price: "",
        stock: "",
        imageUrl: "",
        categoryId: "",
      });
    } catch (error) {
      console.error("Error adding/updating product:", error);
    }
  };

  const handleUpdateProduct = async (id, updatedProduct) => {
    try {
      await axios.put(
        `http://localhost:3000/api/product/${id}`,
        updatedProduct,
        { withCredentials: true }
      );
      fetchProducts();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/product/${id}`, {
        withCredentials: true,
      });
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEditProduct = (product) => {
    setNewProduct({ ...product });
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Seller Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                {newProduct.id ? "Edit Product" : "Add New Product"}
              </Typography>
              <form onSubmit={handleAddProduct}>
                <TextField
                  fullWidth
                  margin="normal"
                  name="name"
                  label="Product Name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  name="description"
                  label="Description"
                  multiline
                  rows={3}
                  value={newProduct.description}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  name="price"
                  label="Price"
                  type="number"
                  value={newProduct.price}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  name="stock"
                  label="Stock"
                  type="number"
                  value={newProduct.stock}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  name="imageUrl"
                  label="Image URL"
                  value={newProduct.imageUrl}
                  onChange={handleInputChange}
                />
                <FormControl fullWidth margin="normal">
                  <InputLabel id="category-label">Category</InputLabel>
                  <Select
                    labelId="category-label"
                    name="categoryId"
                    value={newProduct.categoryId}
                    onChange={handleInputChange}
                    label="Category"
                  >
                    {categories.map((category) => (
                      <MenuItem key={category.id} value={category.id}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  {newProduct.id ? "Update Product" : "Add Product"}
                </Button>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Your Products
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Stock</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>${product.price}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>
                          <Button
                            size="small"
                            variant="outlined"
                            onClick={() => handleEditProduct(product)}
                            sx={{ mr: 1 }}
                          >
                            Edit
                          </Button>
                          <Button
                            size="small"
                            variant="outlined"
                            color="error"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SellerDashboard;

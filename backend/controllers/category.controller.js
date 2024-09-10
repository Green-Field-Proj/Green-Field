const Product = require("../models/product.model");
const Category = require("../models/category.model");
const { Op } = require("sequelize");
require("dotenv").config();
module.exports = {
    getAllCategorys: async (req, res) => {
        try {
          const categorys = await Category.findAll({ include:[Product]});
          res.status(200).send(categorys);
        } catch (error) {
          console.error(error);
          res.status(500).send("Internal server error");
        }
      },
      AddCategory: async (req, res) => {
        try {
          const newCategory = req.body;
          const category = await Category.create(newCategory);
          res.status(200).send(category);
        } catch (error) {
          console.error(error);
          res.status(500).send("Internal server error");
        }
      },
      getCategoryById: async (req, res) => {
        try {
          const category = await Category.findOne({
            where : {
                id : req.params.id
            },
            include:[Product]
        });
          if (category) {
            res.status(200).send(category);
          } else {
            res.status(404).send("Category not found");
          }
        } catch (error) {
          console.error(error);
          res.status(500).send("Internal server error");
        }
      },
      getCategoryByName: async (req, res) => {
        try {
          const category = await Category.findOne({
            where : {
                name : req.params.name
            },
            include:[Product]
        });
          if (category) {
            res.status(200).send(category);
          } else {
            res.status(404).send("Category not found");
          }
        } catch (error) {
          console.error(error);
          res.status(500).send("Internal server error");
        }
      },
      updateCategory: async (req, res) => {
        try {
          const { id } = req.params;
          const updated = await Category.update(req.body, { where: { id } });
          if (updated) {
            const uptodate = await Category.findByPk(id);
            res.status(200).send(uptodate);
          } else {
            res.status(404).send("not found");
          }
        } catch (error) {
          res.status(500).send("Internal server error");
        }
      },
      deleteCategory: async (req, res) => {
        try {
          const { id } = req.params;
          const deleted = await Category.destroy({ where: { id: id } });
          if (deleted) {
            res.status(200).send(" deleted successfully");
          } else {
            res.status(404).send("not found");
          }
        } catch (error) {
          res.status(500).send("Internal server error");
        }
      },


};

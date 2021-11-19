// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const { ProductTag } = require('.');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {
  // static product_tags(body, models) {
  //   return models.ProductTags.create({
  //     product_id: body.product_id,
  //     tag_id: body.tag_id
  //   }).then(() => {
  //     return ProductTag.findAll({
  //       where: {
  //         id: body.product_id
  //       }, 
  //       attributes: [
  //         ['tag_name']
  //       ]
  //     });
  //   });
  // }
}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

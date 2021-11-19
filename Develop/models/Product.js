// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const { Category, Tag } = require('.');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {
  // static productTags(body, models) {
  //   return models.ProductTag.create({
  //     product_id: body.product_id,
  //     tag_id: body.tag_id
  //   }).then(() => {
  //     return Product.findOne({
  //       where: {
  //         id: body.product_id
  //       },
  //       attributes: [
  //         'id',
  //         'product_name',
  //         'price',
  //         'stock'
  //       ],
  //       include: [
  //         {
  //           model: Category,
  //           attributes: ['category_name']
  //         },
  //         {
  //           model: Tag,
  //           attributes: ['tag_name'],
  //           as: 'product_tags'
  //         }
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

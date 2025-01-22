// https://sequelize.org/docs/v7/models/data-types/
const ProductModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^[A-Za-z\s]*$/,
            msg: "Seules les lettres et les espaces sont autorisées.",
          },
          notEmpty: {
            msg: "Le nom ne peut pas être vide.",
          },
          notNull: {
            msg: "Le nom est une propriété obligatoire.",
          },
        },
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          isFloat: {
            msg: "Utilisez uniquement des nombres pour le prix.",
          },
          notEmpty: {
            msg: "Le prix ne peut pas être vide.",
          },
          notNull: {
            msg: "Le prix est une propriété obligatoire.",
          },
        },
      },
    },
    {
      timestamps: true,
      createdAt: "created",
      updatedAt: false,
    }
  );
};
export { ProductModel };

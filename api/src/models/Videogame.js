const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    background_image: {
      type: DataTypes.STRING,
      defaultValue: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freejpg.com.ar%2Fimagenes%2Fpremium%2F1254636533%2Ficono-de-linea-del-controlador-de-juego-gamepad-joystick-vector-sobre-fondo-blanco-aislado-eps-10&psig=AOvVaw36yY4z0uyK-NXZApJhd2Yf&ust=1665876859237000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCJmYfx4PoCFQAAAAAdAAAAABAE",
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false 
    },
    released: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    },
    rating: {
      type: DataTypes.FLOAT,
      validate: {
        max: 5,
        min: 0
      },
      defaultValue: 0
    },
    created_In_DataBase: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },
  {
    timestamps: false
  }
  );
};

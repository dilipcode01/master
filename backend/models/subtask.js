'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subtask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Subtask.belongsTo(models.Tasks, { foreignKey: 'task_id' })
    }
  }
  Subtask.init({
    title: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ['pending', 'completed']
    }
  }, {
    sequelize,
    modelName: 'Subtasks',
  });
  return Subtask;
};
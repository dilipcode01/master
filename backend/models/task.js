'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.hasMany(models.Subtasks, { foreignKey: 'task_id' })
    }
  }
  Task.init({
    title: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ['pending', 'completed']
    }
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  return Task;
};
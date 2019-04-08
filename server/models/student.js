'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    subject: DataTypes.STRING
  }, {});
  student.associate = function(models) {
    // associations can be defined here
    Student.hasMany(models.Subject);
  };
  return student;
};

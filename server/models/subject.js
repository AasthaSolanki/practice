'use strict';
module.exports = (sequelize, DataTypes) => {
  const subject = sequelize.define('subject', {
    sujectname: DataTypes.STRING,
    subjectcode: DataTypes.INTEGER
  }, {});
  subject.associate = function(models) {
    // associations can be defined here
    Subject.belongsTo(models.Student);
  };
  return subject;
};

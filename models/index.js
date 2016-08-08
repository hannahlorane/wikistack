var Sequelize =  require('sequelize');
var db = new Sequelize('postgres://71.190.202.191:5432/wikistack');

var Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: Sequelize.ENUM('open', 'closed'),
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  route: {
    type: Sequelize.VIRTUAL,
    defaultValue: '/wiki/' + this.urlTitle
  }
});

var User = db.define('user', {
  title: Sequelize.STRING,
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true
  }
});

module.exports = {
  Page: Page,
  User: User
};

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('User', {
		awesome_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }, 
		account_type: { type: DataTypes.STRING,  unique: 'compositeIndex' },
		id: { type: DataTypes.STRING,  unique: 'compositeIndex' },
		token: DataTypes.STRING,
		email: DataTypes.STRING,
		name: DataTypes.STRING,
		role: { type: DataTypes.ENUM('student', 'instructor', 'author', 'developer'), defaultValue: 'student' }
	});
};
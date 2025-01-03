// Import modele
const User = require('./User');
const Juriu = require('./Juriu');
const Echipa = require('./Echipa');
const Proiect = require('./Proiect');
const Livrabil = require('./Livrabil');
const Invitatii = require('./Invitatii');

// Relatii
Echipa.hasMany(User, { foreignKey: 'idEchipa' });
User.belongsTo(Echipa, { foreignKey: 'idEchipa' });

Juriu.hasMany(User, { foreignKey: 'idJuriu' });
User.belongsTo(Juriu, { foreignKey: 'idJuriu' });

Echipa.hasOne(Proiect, { foreignKey: 'idEchipa' });
Proiect.belongsTo(Echipa, { foreignKey: 'idEchipa' });

Proiect.hasMany(Livrabil, { foreignKey: 'idProiect' });
Livrabil.belongsTo(Proiect, { foreignKey: 'idProiect' });

Echipa.hasMany(Invitatii, { foreignKey: 'idEchipa' });
Invitatii.belongsTo(Echipa, { foreignKey: 'idEchipa' });

User.hasMany(Invitatii, { foreignKey: 'idUser' });
Invitatii.belongsTo(User, { foreignKey: 'idUser' });

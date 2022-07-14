const mysql = require('mysql');
const getConnectionInstance = () => {
   const conn =  mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'tutorials'
    });
    return conn;
}
module.exports = {
    getConnectionInstance
};
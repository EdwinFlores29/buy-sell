import mysql from 'mysql';
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'edwinf',
    password: 'dariohakuna2*',
    database: 'buy_sell'
 });
 export const db = {
    connect: () => {
        connection.connect((err) => {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log('connected as id ' + connection.threadId);
        });
    },
    query: (sql, args) => {
        return new Promise((resolve, reject) => {
            connection.query(sql, args, (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve({ results });
            });
        });
    },
    end: () => {
        connection.end();
    },
 }

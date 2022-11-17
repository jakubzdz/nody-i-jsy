var mysql =require('mysql2');
var connection = mysql.createConnection({
    host :'localhost',
    user :'spec',
    password:'w9LmBbFJg(g(mP8m',
    database:'spec'
});

connection.connect();
connection.query('SELECT * FROM users',function(error,results,fields){
    if(error) throw error;
    	console.log('The solution is: ', results);
});

function dodajPerm(uid=02, name = Andrzej, data = new Date().toJSON().slice(0, 10), type = Człowiek){
	query(`INSERT INTO users(uid, name, timeStamp, data, type) VALUES ('${uid}','${name}',NULL,'${data}','${type}')`);
}

function usunPerm(uid=02){
	query(`DELETE FROM users WHERE ( uid = '${uid}')`);
}

function aktualizujPerm(uid=02, name = Andre){
	query(`UPDATE users SET(name = '${name}') WHERE (uid = '${uid}')`);
}

function pobierzPerm(uid=02){
	connection.query(`SELECT FROM users WHERE (uid = '${uid}')`);
}

async function main() {
	

	connection.connect();

	let responses = [];
	
	let q1 = await connection.promise().query("SELECT * FROM users");
	responses.push(q1);
	console.log(q1);
	
	
	connection.end();
}
                     
// dodajPerm();
// usunPerm();
// aktualizujPerm();
pobierzPerm();

connection.end();

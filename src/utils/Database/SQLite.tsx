import * as SQLite from 'expo-sqlite';

// Open a database handle
const db = SQLite.openDatabase('database.db');
export function dbStart(){
// Execute SQL commands
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS note (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR, body VARCHAR);'
  );
});
}

export function dbAdd(title, body){
    db.transaction(tx => {
          tx.executeSql(
            'INSERT INTO note (title, body) VALUES (?, ?)',
            [title, body],
            (_, { insertId }) => console.log(`Inserted item with ID ${insertId}`),
            error => console.error(error)
          );
        });
}

export function dbGetAll(){
return new Promise((resolve, reject) => {
    db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM note',
          [],
          (_, { rows }) => {
              const itemArray = rows._array;
              resolve(itemArray);
          },
          error => {
            console.error(error);
            reject(error);
        }
        );
      });
})


}

/*


import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@Notes', JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };

  export async function dbGetAll(){
    console.log("get all")

    const note = await AsyncStorage.getItem('@Notes')

    console.log(note)


  }


export async function dbStart(){
    const note1 = {
        title: "hello",
        body: "This is my first note in my new note app "
    }
    
    await storeData(note1);

}





























/*import * as SQLite from 'expo-sqlite';
  

const db = SQLite.openDatabase("test"); 

export async function dbStart() {
        await db.transactionAsync(async tx => {tx.executeSqlAsync('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR, body VARCHAR);');
        }
        );

const insertSql = `INSERT INTO users (title, body) VALUES (?, ?)`;

        await db.transactionAsync(async tx => {
          tx.executeSqlAsync(insertSql, ['Buy groceries', "0"]); 
          tx.executeSqlAsync(insertSql, ['Walk the dog', "0"]);
        }); 
}

export function dbGetAll() {
    console.log("GETALL")
    db.transaction(async tx => {
        tx.executeSql('SELECT * FROM usersf', [], (_, { rows }) => 
        console.log(JSON.stringify(rows))
        );
    });
}
*/



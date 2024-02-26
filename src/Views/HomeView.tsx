import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from "react-native"
import { dbGetAll } from '../utils/Database/SQLite';

export default function(){
    const navigation = useNavigation();


  

    return(
        <View style={{
            flex:1,
            alignItems:"center", 
            padding:50,
        }}>
            <Text>HomeScreen</Text>
            <Button title='Display All' onPress={()=> getDbItems()}/>
        </View>
    );

}

function getDbItems() {
    dbGetAll().then(itemArray => {
        console.log(itemArray); // Print the returned data
    }).catch(error => {
        console.error("Error:", error); // Handle errors if any
    });
}
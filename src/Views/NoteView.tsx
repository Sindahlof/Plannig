import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button} from 'react-native';
import { TextInput } from 'react-native-paper';
import { dbAdd } from '../utils/Database/SQLite';

export default function NoteView(){
    const navigation = useNavigation();
    const [title,onChangeTitle] = React.useState("");
    const [body,onChangeBody] = React.useState("");

    return (
            <View style={{
                flex:1,
                alignItems:"center", 
                padding:50,
            }}>
                <Text style={{padding:20,}}>NOTES</Text>
                <TextInput
                label={"Title"}
                value={title}
                onChangeText={onChangeTitle}
                multiline={true}
                />
                <TextInput
                label={"Body"}
                value={body}
                onChangeText={onChangeBody}
                multiline={true}
                />
                <Text>{title}</Text>
                <Button title='Save' onPress={()=>dbAdd(title,body)}/>
            </View>
    )

}


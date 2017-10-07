import React, {Component} from 'react'
import {Action} from 'react-native-router-flux'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native'

export default class Patient extends Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <View style= {styles.list} key={this.props.keyval}>
                    <TouchableOpacity
                    onPress={()=> Actions.PatientData({ indexP: this.props.keyval})}>
                    <Text style={styles.addList}>{this.props.val.PName}</Text>
                    <Text style={styles.addList}>{this.props.val.Date}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.deleteList} onPress={this.props.deletePatient}>
                        <Text style={styles.deleteListText}>D</Text>
                    </TouchableOpacity>

            </View>
        );
    }
}




const styles = StyleSheet.create({
    list: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed'
    },
    addList: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },
    deleteList: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    deleteListText: {
        color: 'white'
    }
});


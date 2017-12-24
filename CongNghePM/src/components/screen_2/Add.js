import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    StatusBar
} from 'react-native'
import {
    Container,
    Header,
    Left,
    Right,
    Button,
    Icon,
    Content,
} from 'native-base';
import DatePicker from 'react-native-datepicker'
import styles from "./styles"

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTaskName: '',
             time: "08:00"}
    }

    onAddNewTask = () => {
        this.props.onAddNewTask(this.state.newTaskName, this.state.time);
        this.setState({ time: '08:00',newTaskName: ''})
    }

    render() {
        return (
            <View style={{flexDirection: 'row', padding: 20, backgroundColor: '#fff'}}>
                <DatePicker
                    style={{width: 100}}
                    date={this.state.time}
                    mode="time"
                    placeholder="select date"

                    confirmBtnText="OK"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36,
                            borderBottomWidth: 1,
                            width: 70
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(time) => {this.setState({time: time})}}
                />
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <TextInput
                        returnKeyType="done"
                        value={`${this.state.newTaskName}`}
                        onSubmitEditing={this.onAddNewTask}
                        underlineColorAndroid="transparent"
                        onChangeText={text => this.setState({newTaskName: text})}
                        placeholder="Task name"
                        style={[{flex: 1, marginLeft: 10}, styles.input]}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={this.onAddNewTask}>
                    <Text style={{color: 'white'}}>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
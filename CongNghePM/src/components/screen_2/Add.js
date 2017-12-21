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
import styles from "./styles"

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {newTaskName: ''}
    }

    onAddNewTask = () => {
        this.props.onAddNewTask(this.state.newTaskName);
        this.setState({newTaskName: ''})
    }

    render() {
        return (
            <View style={{flexDirection: 'row', padding: 20, backgroundColor: '#fff'}}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <TextInput
                        returnKeyType="done"
                        underlineColorAndroid="transparent"
                        value={`${this.state.newTaskName}`}
                        onSubmitEditing={this.onAddNewTask}
                        onChangeText={text => this.setState({newTaskName: text})}
                        placeholder="Task name"
                        style={[{flex: 1}, styles.input]}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={this.onAddNewTask}>
                    <Text style={{color: 'white'}}>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
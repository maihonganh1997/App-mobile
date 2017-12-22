import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Platform,
    TextInput,
    Text,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    StatusBar,
    Image,
    View
} from 'react-native';
import {
    Container,
    Header,
    Left,
    Right,
    Button,
    Icon,
    Content,
} from 'native-base';
import Add from "./Add"
import TaskFlatList from "./TaskFlastList"

import styles from "./styles"

export default class Screen_2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            label : this.props.navigation.state.params.lables,
            key: this.props.navigation.state.params.keys,
            data : [
                { title: 'Go to the office', isFinished: true },
                { title: 'Prepare tasks for today', isFinished: false },
                { title: 'Team meeting', isFinished: false },
                { title: 'Commit tasks changed', isFinished: false },
            ]
        }
    }

    onAddNewTask = (taskName) => {
        const newTask = { title: taskName, isFinished: false }
        const newTaskList = [ ...this.state.data, newTask ]

        this.setState({ data: newTaskList });
    }

    onFinishedItem = (index) => {
        let newTaskList = this.state.data;
        newTaskList[index].isFinished = true;
        this.setState({ data: newTaskList });
    }

    onDeleteItem = (index) => {
        let newTaskList = this.state.data.filter( (item, i) => i != index );
        this.setState({ data: newTaskList });
    }

    render() {
        console.log(this.state.label);
        return (
            <View style={ styles.container }>
                <ImageBackground source={require('../../../img/40548485-Abstract-polygonal-background-vector-green-Stock-Vector.jpg')} style={[styles.header]}>
                    <StatusBar translucent={true} backgroundColor='transparent'/>
                    <View style={{flex: 2, alignItems: 'flex-start'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../../../img/icon_back.png')} style={{width: 25, height: 25}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 6}}>
                        <Text style={styles.txt_head}>{this.state.label}</Text>
                    </View>
                    <View style={{flex: 2, alignItems: 'flex-end'}}>
                        <TouchableOpacity>
                            <Text style={{color: '#cecece', fontSize: 17}}>Lưu</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <Add onAddNewTask={ this.onAddNewTask } />
                <TaskFlatList
                    listData={ this.state.data }
                    onFinishedItem={ this.onFinishedItem }
                    onDeleteItem={ this.onDeleteItem }
                />
            </View>
        );
    }
}


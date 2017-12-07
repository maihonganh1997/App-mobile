import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    Dimensions
} from 'react-native'
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Content,
} from 'native-base';
import Screen1 from "../screen1/Screen_1";
import styles from "./styles"

var {height, width} = Dimensions.get('window');
export default class Screen_0 extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../../img/40548485-Abstract-polygonal-background-vector-green-Stock-Vector.jpg')}
                style={{width: '100%', height: '100%'}}>
                <Body style={{alignItems: 'center', justifyContent: 'center'}}>

                <Text style={[styles.txt, {fontWeight: 'bold'}]}>
                    <Text>INSE</Text> <Text>xin chào bạn!!!</Text>
                </Text>

                <View>
                    <Button onPress={() => this.props.navigation.navigate('Screen1')} style={styles.btn}>
                        <Text style={{color: '#fff', fontSize: 20,}}>Tiếp tục</Text>
                    </Button>
                </View>
                </Body>

            </ImageBackground>
        );
    }
}
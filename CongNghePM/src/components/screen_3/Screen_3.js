import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Picker,
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
import Slider from "react-native-slider";

export default class Screen_3 extends Component {
    state = {
        value: 0.2,
        language: 'Giọng nói'
    };

    render(){

        return(
            <Container  style={styles.bg}>
                <ImageBackground source={require('../../../img/40548485-Abstract-polygonal-background-vector-green-Stock-Vector.jpg')} style={[styles.header]}>
                    <StatusBar translucent={true} backgroundColor='transparent'/>
                    <View style={{flex: 2, alignItems: 'flex-start'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../../../img/icon_back.png')} style={{width: 25, height: 25}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 6}}>
                        <Text style={styles.txt_head}>Cài đặt</Text>
                    </View>

                </ImageBackground>
                <Content style={{padding: 20}}>
                    <Text style={styles.txt_alarm}>Âm báo</Text>
                    <View style={{borderWidth: 1, borderColor: '#cecece', marginTop: 20}}>
                        <Picker
                            selectedValue={this.state.language}
                            onValueChange={(lang) => this.setState({language: lang})}>
                            <Picker.Item label="Giọng nói" value="Giọng nói" />
                            <Picker.Item label="Chuông" value="Chuông" />
                            <Picker.Item label="Rung" value="Rung" />
                            <Picker.Item label="Im lặng" value="Im lặng" />
                        </Picker>
                    </View>
                    <Text style={[styles.txt_alarm,{marginTop: 30} ]}>Âm lượng</Text>
                    <View style={styles.container}>
                        <Slider
                            value={this.state.value}
                            onValueChange={value => this.setState({ value })}

                        />
                    </View>
                </Content>
            </Container>
        );
    }
}
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

export default class Screen_2 extends Component {
    render() {
        return (
            <Container style={styles.bg}>
                <ImageBackground source={require('../../../img/40548485-Abstract-polygonal-background-vector-green-Stock-Vector.jpg')} style={[styles.header]}>
                    <StatusBar translucent={true} backgroundColor='transparent'/>
                    <View style={{flex: 2, alignItems: 'flex-start'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../../../img/icon_back.png')} style={{width: 25, height: 25}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 6}}>
                        <Text style={styles.txt_head}>Thứ 2</Text>
                    </View>
                    <View style={{flex: 2, alignItems: 'flex-end'}}>
                        <TouchableOpacity>
                            <Text style={{color: '#cecece', fontSize: 17}}>Lưu</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <Content style={{padding: 20}}>
                    <View style={{ flexDirection:'row'}}>
                        <View style={{flex: 7}}>
                            <TextInput
                                placeholder='Công việc'
                                style={{fontSize: 16}}
                            />
                        </View>
                        <View style={{flex: 1}}/>
                        <Right>
                            <View style={styles.view_add}>

                                <Button style={styles.btn_add}>
                                    <Text style={styles.txt_add}>ADD</Text>
                                </Button>

                            </View>
                        </Right>
                    </View>
                </Content>
            </Container>
        );
    }
}
import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
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
import Screen_2 from "../screen_2/Screen_2";
import Screen_3 from "../screen_3/Screen_3";
let n = 0;
const data= [
    {key : n++, label: 'Thứ 2' },
    {key : n++, label: 'Thứ 3' },
    {key : n++, label: 'Thứ 4' },
    {key : n++, label: 'Thứ 5' },
    {key : n++, label: 'Thứ 6' },
    {key : n++, label: 'Thứ 7' },
    {key : n++, label: 'Chủ nhật' },
];
import styles from "./styles.js"
export default class Screen1 extends Component{
    render(){
        return(
            <Container style={styles.bg}>
                <ImageBackground source={require('../../../img/40548485-Abstract-polygonal-background-vector-green-Stock-Vector.jpg')} style={[styles.header]}>
                    <StatusBar translucent={true} backgroundColor='transparent'/>
                    <View style={{flex: 2, alignItems: 'flex-start'}}>

                    </View>
                    <View style={{flex: 6}}>
                        <Text style={styles.txt_head}>INSE</Text>
                        <View><Text style={{color: '#f3f3f3'}}>Intelligent Secretary</Text></View>
                    </View>
                    <View style={{flex: 2, alignItems: 'flex-end', justifyContent:'flex-end'}}>
                        <TouchableOpacity style={{alignItems: 'flex-end', justifyContent:'flex-end'}} onPress={() => this.props.navigation.navigate('Screen_3')} ><Text style={{color: '#fff'}}>Cài đặt</Text></TouchableOpacity>
                    </View>
                </ImageBackground>
                <Content style={{padding: 20}}>
                    {
                        data.map(item => {
                            return (
                                <View style={styles.bor_bot}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen_2', {lables: item.label, keys: item.key})}>
                                        <View style={styles.listitem}>
                                            <Image style={styles.avata}
                                                   source={require('../../../img/images.jpg')}/>
                                            <Text style={styles.txt_item}>{item.label}</Text>
                                            <Right>
                                                <Image style={{height: 20, width: 12}}
                                                       source={require('../../../img/icon_next_footer.png')}/>

                                            </Right>

                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }

                </Content>
            </Container>
        );
    }
}
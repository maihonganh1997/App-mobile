import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#fff'
    },
    header: {
        backgroundColor: '#69d22e',
        flexDirection: 'row',
        height: 70,
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center'
    },

    icon_head: {
        fontSize: 40,
        color: '#fff'
    },
    txt_head: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    txt_alarm: {
        fontSize: 20,
        marginTop: 20,
    },
    container: {
        flex: 1,
        marginLeft: 10,
        marginTop: 10,
        alignItems: "stretch",
        justifyContent: "center"
    }
});
export default styles
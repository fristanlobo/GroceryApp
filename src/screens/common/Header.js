import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import React from 'react';

const { height, width } = Dimensions.get('window');
const Header = ({
    title,
    leftIcon,
    rightIcon,
    onClickLeftIcon,
    onClickRightIcon
}) => {
    return (
        <View style={styles.headers}>
            <TouchableOpacity style={styles.btn}>
                <Image source={leftIcon} style={styles.leftIcon} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.btn}>
                <Image source={rightIcon} style={styles.leftIcon} />
            </TouchableOpacity>
        </View>
    )
}

export default Header;
const styles = StyleSheet.create({
    headers: {
        width: width,
        height: 60,
        backgroundColor: '#0786DAFD',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40
    },
    leftIcon: {
        width: 30,
        height: 30,
        tintColor: '#fff'
    },
    title: {
        color:'#fff',
        fontSize:20
    }
})
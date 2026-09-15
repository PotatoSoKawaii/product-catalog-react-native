import { StyleSheet, Text, View } from 'react-native';

export default function ProductDetailScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Product Detail
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
    },
});
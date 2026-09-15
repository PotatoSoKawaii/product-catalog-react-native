import { StyleSheet, Text, View } from 'react-native';

export default function ProductListScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Products
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
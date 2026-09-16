import { StyleSheet, TextInput } from 'react-native'

type ProductSearchProps = {
    value: string;
    onChangeText: (text: string) => void;
}

export default function ProductSearch({
    value,
    onChangeText
}: ProductSearchProps) {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder='Search products...'
            style={styles.searchInput}
        />
    )
}

const styles = StyleSheet.create({
    searchInput: {
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 10
    }
})
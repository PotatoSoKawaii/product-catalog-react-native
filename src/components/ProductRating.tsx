import { StyleSheet, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

type ProductRatingProps = {
    rating: number
}

export default function ProductRating({ 
    rating 
}: ProductRatingProps) {
    const processedRating = Math.floor(rating * 2) / 2;

    const fullStars = Math.floor(processedRating);

    const hasHalfStars = processedRating % 1 !== 0;

    const emptyStars = 5 - fullStars - (hasHalfStars ? 1 : 0);

    return (
        <View style={styles.container}>
            {Array.from({ length: fullStars }).map((v, i) => {
                return (
                    <Text key={`fullStars_${i}`} style={styles.star}>
                        <Ionicons name='star' size={18}/>
                    </Text>
                )
            })}

            {hasHalfStars && (
                <Text style={styles.star}>
                    <Ionicons name='star-half' size={18}/>
                </Text>
            )}

            {Array.from({ length: emptyStars }).map((v, i) => {
                return (
                    <Text key={`emptyStars_${i}`} style={styles.star}>
                        <Ionicons name='star-outline' size={18}/>
                    </Text>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 2
    },
    star: {

    }
})
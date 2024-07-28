import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: "https://img.freepik.com/photos-gratuite/magnifique-paysage-montagneux_23-2151151087.jpg?w=1380&t=st=1720563354~exp=1720563954~hmac=d32a0817bbac67e3ea3cd3d86ab842282ff34f22e91a4d9e7c14df652db820b1",
          }}
          style={styles.cardImage}
        ></Image>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City , jaipur</Text>{" "}
          <Text style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city of jaipur,india Built from
            red and pink sandstone,it on the edge of the city Palace
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>{" "}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: "#34495e",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 6,
  },
  cardLabel: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 4,
  },
  cardDescription: {
    color: "#fff",
    fontSize: 12,
    marginTop: 6,
    marginBottom: 12,
    flexShrink: 1,
  },
  cardFooter: {
    color: "#fff",
  },
});

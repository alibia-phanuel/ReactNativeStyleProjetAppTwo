import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function ActionCard() {
  function openWebsite(websideLink: string) {
    Linking.openURL(websideLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>{" "}
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>what's new n javascript - ES12</Text>{" "}
        </View>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1711044899535-3fc99daaeb46?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBodyContainer}>
          <Text numberOfLines={3}>
            describes how any space within a container should be distributed
            among its children along the main axis. After laying out its
            children, a container will distribute any remaining space according
            to the flex grow values specified by its children.
          </Text>
        </View>
        <View style={styles.cardFooterContainer}>
          <TouchableOpacity
            onPress={() => openWebsite("https://www.youtube.com/")}
          >
            <Text style={styles.socialLinks}>Read more</Text>
          </TouchableOpacity>
          <Text style={styles.socialLinks}>Follow me</Text>
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
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  card: {
    width: 350,
    height: 340,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: "#bdc3c7",
  },
  headerText: {
    color: "#000",
    fontWeight: "600",
    fontSize: 16,
  },
  headerContainer: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    height: 100,
  },
  cardBody: {},
  cardBodyContainer: {
    padding: 10,
  },
  cardFooterContainer: {
    padding: 8,
    flexDirection: "row",
    gap: 23,
  },
  socialLinks: {
    fontSize: 16,
    color: "#000",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
});

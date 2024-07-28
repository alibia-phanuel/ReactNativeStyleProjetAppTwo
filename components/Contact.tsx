import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
export default function Contact() {
  const contacts = [
    {
      id: 1,
      name: "Alice",
      status: "Active",
      urlimage:
        "https://images.unsplash.com/photo-1712847331947-9460dd2f264b?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Bob",
      status: "Inactive",
      urlimage:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Charlie",
      status: "Active",
      urlimage:
        "https://images.unsplash.com/photo-1712847331925-bf0e3fd2b7ae?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "David",
      status: "Inactive",
      urlimage:
        "https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?q=80&w=2473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Eve",
      status: "Active",
      urlimage:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Frank",
      status: "Inactive",
      urlimage:
        "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Grace",
      status: "Active",
      urlimage:
        "https://images.unsplash.com/photo-1474533410427-a23da4fd49d0?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Henry",
      status: "Inactive",
      urlimage:
        "https://images.unsplash.com/photo-1504810370725-2585de12e6ee?q=80&w=2474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      name: "Irene",
      status: "Active",
      urlimage:
        "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      name: "Jack",
      status: "Inactive",
      urlimage:
        "https://images.unsplash.com/photo-1446511437394-36cdff3ae1b3?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <View>
      <Text style={styles.headerText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ id, name, status, urlimage }) => (
          <View key={id} style={styles.userCard}>
            <Image
              source={{
                uri: urlimage,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    backgroundColor: "#1abc9c",
  },
  userCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
    backgroundColor: "#2c3e50",
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  userStatus: {
    fontSize: 16,
    color: "#fff",
  },
});

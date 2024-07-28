import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FlatCards from "../../../my-app/components/FlatCards";
import ElevatedCards from "@/components/ElevatedCards";
import FancyCard from "@/components/FancyCard";
import React from "react";
import ActionCard from "@/components/ActionCard";
import Contact from "@/components/Contact";

export default function index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView>
        <ScrollView>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
          <Contact />
          <ActionCard />
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});

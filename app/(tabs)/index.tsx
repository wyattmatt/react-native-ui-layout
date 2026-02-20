import { View, Text, StyleSheet, Image, Alert, Platform, TouchableOpacity } from "react-native";
import React from "react";

const index = () => {
  const images = [
    require("../../assets/images/react-logo.png"),
    require("../../assets/images/splash-icon.png"),
    require("../../assets/images/android-icon-background.png"),
    require("../../assets/images/android-icon-foreground.png"),
    require("../../assets/images/android-icon-monochrome.png"),
    require("../../assets/images/partial-react-logo.png"),
  ];

  const logo = require("../../assets/images/icon.png");

  const showAlert = (message: string) => {
    if (Platform.OS === "web") {
      window.alert(message);
    } else {
      Alert.alert(message);
    }
  };

  const CustomButton = ({ title, style, onPress }: any) => (
    <TouchableOpacity style={[styles.buttonBase, style]} onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.main}>
      <Image source={logo} style={styles.imageContainer} />

      <Text style={styles.textTitle}>Title</Text>

      {/* Top Buttons */}
      <View style={styles.row}>
        <CustomButton title="Button 1" style={styles.buttonPurple} onPress={() => showAlert("Button 1 Pressed!")} />
          <CustomButton title="Button 2" style={styles.buttonBlue} onPress={() => showAlert("Button 2 Pressed!")} />
        </View>

      {/* Grid */}
      <View style={styles.gridContainer}>
        {images.map((img, index) => (
          <Image key={index} source={img} style={styles.gridItem} />
        ))}
      </View>

      {/* Bottom Button */}
      <CustomButton title="Button 3" style={styles.bigButton} onPress={() => showAlert("Button 3 Pressed!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  imageContainer: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 80,
    margin: 10,
  },

  textTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  row: {
    flexDirection: "row",
    marginTop: 40,
  },

  buttonBase: {
    flex: 1,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },

  textButton: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  buttonPurple: {
    backgroundColor: "purple",
  },

  buttonBlue: {
    backgroundColor: "blue",
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },

  gridItem: {
    width: "25%",
    height: 100,
    margin: 10,
  },

  bigButton: {
    backgroundColor: "blue",
    marginTop: 20,
  },
});

export default index
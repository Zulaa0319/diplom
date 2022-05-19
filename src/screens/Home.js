import * as React from "react";
import { Text, View, StyleSheet, Image, Pressable,TouchableOpacity } from "react-native";

export default function (props) {
  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <Image
        source={{
          uri: "https://kalbelearningcentre.kalbe.co.id/Portals/0/EasyDNNnews/52/img-IP.png",
        }}
        style={{ width: "100%", height: "250px", position: "absolute", marginTop: 60 }}
      />
      <View style={{ margin: 10 }}>
        <Image
          source={{
            uri: "https://online.ider.edu.mn/pluginfile.php/1/theme_moove/logo/1642383289/Final%20logo%2002-1green-web.png",
          }}
          style={{ height: 60, position: "relative" }}
        />
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate("Тодорхойлолт")}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.metaContainer}>
              <View>
                <Text style={styles.description}>Тодорхойлолт</Text>
              </View>
            </View>
            <Image
              source={{
                uri: "https://cdn0.iconfinder.com/data/icons/business-finance-shape-colors/48/business_finance_company_printer_print_printing_device-1024.png",
              }}
              style={styles.avatar}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Төлбөр")}>
      <View style={styles.container1} >
        <View style={styles.topContainer}>
          <View style={styles.metaContainer}>
            <View>

              <Text style={styles.description}>Төлбөрийн мэдээлэл</Text>

            </View>
          </View>
          <Image
            source={{
              uri: "https://www.gseb.org/assets/images/grade.png",
            }}
            style={styles.avatar}
          />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Event")}>
      <View style={styles.container2}>
        <View style={styles.topContainer}>
          <View style={styles.metaContainer}>
            <View>

              <Text style={styles.description}>Event үйл ажиллагааг харах</Text>

            </View>
          </View>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1999/1999106.png",
            }}
            style={styles.avatar}
          />
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "200px",
    marginBottom: 20,
    backgroundColor: "#0891b2",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 5,
    alignSelf: "center",
    width: 375,
    maxWidth: "100%",
    opacity: 0.9,
  },
  container1: {
    margin: 20,
    backgroundColor: "#0C4CF7",
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 5,
    alignSelf: "center",
    width: 375,
    maxWidth: "100%",
    opacity: 0.9
  },
  container2: {
    margin: 20,
    backgroundColor: "#F9BC19",
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 5,
    alignSelf: "center",
    width: 375,
    maxWidth: "100%",
    opacity: 0.9
  },
  timings: {
    color: "#fff",
    fontSize: "14px",
  },
  metaContainer: {
    justifyContent: "space-between",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 10,
    opacity: 1
  },
  description: {
    color: "white",
    marginTop: 5,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#22d3ee",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 2,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
    fontSize: 14,
  },
});

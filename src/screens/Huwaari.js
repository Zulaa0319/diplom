import * as React from "react";
import {
  View,
  useWindowDimensions,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component-2";
import { Button, Searchbar } from "react-native-paper";

const element = (data, index) => (
  <TouchableOpacity onPress={() => this._alertIndex(index)}>
    <TouchableOpacity onPress={() => this._alertIndex(index)}>
    </TouchableOpacity>
  </TouchableOpacity>
);
function FirstRoute() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [tableHead] = React.useState([
    "Хичээлйин жил",
    "Улирал",
    "Код",
    "Хичээл",
    "Кредит",
    "Оноо",
    "Дүн",

  ]);
  
  const [tableData] = React.useState([
    ["2021-2022", "Намар", "3", "Англи хэл", "3", "90", "A"],
    ["2021-2022", "Намар", "3", "Дээд тоо", "3", "92", "A"],
    ["2021-2022", "Намар", "3", "Япон хэл", "3", "94", "A"],
    ["2021-2022", "Намар", "3",  "React native", "3", "98", "A"],
  ]);
  return (
    <View style={{ flex: 1 }}>
      <Table borderStyle={{ borderColor: "transparent" }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        {tableData.map((rowData, index) => (
          <TableWrapper key={index} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={cellIndex === 10 ? element(cellData, index) : cellData}
                textStyle={styles.text}
              />
            ))}
          </TableWrapper>
        ))}
        <Button onPress={() => console.log("XML")}>Хэвлэх</Button>
      </Table>
    </View>
  );
}

function SecondRoute() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  const [tableHead] = React.useState([
    "Цаг",
    "Даваа",
    "Мягмар",
    "Лхагва",
    "Пүрэв",
    "Баасан",
    "Бямба",
    "Ням",
  ]);
  const [tableData] = React.useState([
    ["8:00-9:30", "Англи хэл", "React Native", "Япон хэл", "Англи хэл", "Дээд тоо", "4"],
    ["9:40-11:10", "Дээд тоо", "React Native", "Дээд тоо", "Япон хэл", "React Native", "4"],
    ["11:20-12:50", "Япон хэл", "", "Англи хэл", "", "", "4"],
    ["13:10-14:40", "React Native", "", "", "", "", "4"],
  ]);
  return (
    <View style={{ flex: 1 }}>
      <Table borderStyle={{ borderColor: "transparent" }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        {tableData.map((rowData, index) => (
          <TableWrapper key={index} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={cellIndex === 6 ? element(cellData, index) : cellData}
                textStyle={styles.text}
              />
            ))}
          </TableWrapper>
        ))}
      </Table>
    </View>
  );
}
function TwoRoute() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  const [tableHead] = React.useState([
    "......овогтой......нь тус сургуулийн......хөтөлбөрөөр сурдаг нь үнэн болно. Суралцагчийн дугаар: IT... Регистрийн дугаар:...  ",
  ]);
  const [tableData] = React.useState([
  ]);
  return (
    <View style={{ flex: 1 }}>
      <Table borderStyle={{ borderColor: "transparent" }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        {tableData.map((rowData, index) => (
          <TableWrapper key={index} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={cellIndex === 6 ? element(cellData, index) : cellData}
                textStyle={styles.text}
              />
            ))}
          </TableWrapper>
        ))}
        <Button onPress={() => console.log("XML")}>Хэвлэх</Button>
      </Table>
    </View>
  );
}

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  Two: TwoRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Дүн харах" },
    { key: "second", title: "Хуваарь" },
    { key: "Two", title: "Тодорхойлолт" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#FFFFF" },
  text: { margin: 2 },
  row: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
  },
  btn: { width: 58, height: 18, backgroundColor: "red", borderRadius: 2 },
  btn1: { width: 58, height: 18, backgroundColor: "green", borderRadius: 2 },
  btnText: { textAlign: "center", color: "#fff" },
});

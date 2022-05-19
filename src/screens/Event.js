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
    "Зохиогдох ажил",
    "Хариуцах эзэн",
    "Хамтрагч",
    "Хугацаа",

  ]);
  
  const [tableData] = React.useState([
    ["Сагс АШТ", "БУ-АЖ тэнхим", "ФС хүрээлэн", "10/13,14", ],
    ["Програмчлалын өдөр", "МТ тэнхим", "IT zone", "4/4",],
    ["Digital Art", "МТ тэнхим", "IT", "4/14",],
    ["Скийл тэмүүлэл-2030", "БСАЗ тэнхим", "Манайлал акедим",  "5/01",],
    ["IderBestSong", "Гадаад хэл тэнхим", "1-р суваг ТВ",  "5/18",],
    ["Олон улсын соёлын өдөр", "Гадаад хэл тэнхим", "Нарийн гарц",  "5/21",],
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
      </Table>
    </View>
  );
}

const renderScene = SceneMap({
  first: FirstRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Хөтөлбөр" },
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

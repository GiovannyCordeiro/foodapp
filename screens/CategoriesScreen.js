import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTile";

function renderCategoryItem(itemData) {
  return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color}/>
}

export default function CategoriesScreen(){
  return (
    <FlatList 
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
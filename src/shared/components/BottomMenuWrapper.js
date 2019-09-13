import React, { useState } from "react";
import PropTypes from "prop-types";
import { BottomMenu, Item } from "react-native-bottom-menu";

const BottomMenuWrapper = props => {
  const [isActive, setActive] = useState("home");
  const {} = props;
  return (
    <BottomMenu>
      <Item
        size={22}
        name="tasklist"
        text="İşlerim"
        type="Octicons"
        isActive={isActive == "home" ? true : false}
        onPress={() => setActive("home")}
      />
      <Item
        size={22}
        text="Akış"
        name="md-list-box"
        type="Ionicons"
        isActive={isActive == "messages" ? true : false}
        onPress={() => setActive("messages")}
      />
      <Item
        size={22}
        name="md-person"
        text="Profil"
        type="Ionicons"
        isActive={isActive == "cart" ? true : false}
        onPress={() => setActive("cart")}
      />
      <Item
        size={22}
        name="chat"
        text="Sohbet"
        type="MaterialCommunityIcons"
        isActive={isActive == "settings" ? true : false}
        onPress={() => setActive("settings")}
      />
    </BottomMenu>
  );
};

export default BottomMenuWrapper;

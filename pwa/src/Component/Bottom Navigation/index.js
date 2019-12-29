import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles } from "@material-ui/core/styles";
import VideocamIcon from "@material-ui/icons/Videocam";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      style={{
        width: "100%",
        display: "flex",
        maxWidth: 450,
        position: "fixed",
        bottom: 0,
        zlndex: 99
      }}
    >
      <BottomNavigationAction label="Feed" icon={<DynamicFeedIcon />} />
      <BottomNavigationAction label="Shopee Live" icon={<VideocamIcon />} />
      <BottomNavigationAction
        label="Notifikasi"
        icon={<NotificationsNoneIcon />}
      />
      <BottomNavigationAction label="Saya" icon={<PersonOutlineIcon />} />
    </BottomNavigation>
  );
}

export default LabelBottomNavigation;

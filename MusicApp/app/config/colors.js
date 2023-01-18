export let theme = "dark";
let colors = {
  black: "#FFF",
  danger: "#ff5252",
  disabled: "#EBE4E4",
  background100: "#181a20",
  background200: "#e9e9e9",
  border100: "#EEE",
  border200: "#DDD",
  lightText: "#9d9d9d",
  mediumText: "#6e6969",
  primaryColor: "#FF8216",
  primaryText: "#FFF",
  white: "#000"
};

if (theme === "light") {
  colors = {
    black: "#000",
    danger: "#ff5252",
    disabled: "#EBE4E4",
    background100: "#f8f4f4",
    background200: "#e9e9e9",
    border100: "#EEE",
    border200: "#DDD",
    lightText: "#9d9d9d",
    mediumText: "#6e6969",
    primaryColor: "#FF8216",
    primaryText: "#222",
    white: "#FFF"
  };
}

export default colors;

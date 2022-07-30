import "./styles.css";
import ToolTip from "./tooltip";

const tooltip = new ToolTip(document.querySelector(".tooltip"));
console.log(tooltip);
tooltip.init();

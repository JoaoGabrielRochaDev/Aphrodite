import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: { main: "#0800ff", contrastText: "#FFFF" },
    secondary: { main: "#ffdf23", contrastText: "#000" },
    red: { main: "#96031A", contrastText: "#000" },
    textSecondary: { main: "#0800ff", contrastText: "#0800ff" },
    green: { main: "#20BF55", contrastText: "#FBFBFF" },
    solicitationBackground: { main: "#DEE2E6", contrastText: "#343A40" },
    overduePendingContact: { main: "#C9F4AA", contrastText: "#000" },
    pendentContact: { main: "#E97777", contrastText: "#000" },
    linearProgress: { main: "#FF9900", contrastText: "#ffdf23" },
    gray: { main: "#a3a3a3", contrastText: "#ffff" },
  },

  responsivePieChart: {
    background: "#deddda",
    textColor: "#333333",
    fontSize: 11,
    axis: {
      domain: {
        line: {
          stroke: "#777777",
          strokeWidth: 1,
        },
      },
      legend: {
        text: {
          fontSize: 12,
          fill: "#333333",
        },
      },
      ticks: {
        line: {
          stroke: "#777777",
          strokeWidth: 1,
        },
        text: {
          fontSize: 11,
          fill: "#333333",
        },
      },
    },
    grid: {
      line: {
        stroke: "#dddddd",
        strokeWidth: 1,
      },
    },
    legends: {
      title: {
        text: {
          fontSize: 11,
          fill: "#333333",
        },
      },
      text: {
        fontSize: 11,
        fill: "#333333",
      },
      ticks: {
        line: {},
        text: {
          fontSize: 10,
          fill: "#333333",
        },
      },
    },
    annotations: {
      text: {
        fontSize: 13,
        fill: "#333333",
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      link: {
        stroke: "#000000",
        strokeWidth: 1,
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      outline: {
        stroke: "#a51d2d",
        strokeWidth: 2,
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      symbol: {
        fill: "#000000",
        outlineWidth: 20,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
    },
    tooltip: {
      container: {
        background: "#f6f5f4",
        color: "#333333",
        fontSize: 15,
      },
      basic: {},
      chip: {},
      table: {},
      tableCell: {},
      tableCellValue: {},
    },
  },
});

export default theme;

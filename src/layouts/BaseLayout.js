import { Outlet } from "react-router-dom";

import { Paper } from "@material-ui/core";

function BaseLayout() {
  return (
    <Paper
      style={{
        height: "100%",
        width: "100%",
        margin: 0,
        padding: 0,
        backgroundColor: "#e2e2e2",
      }}
    >
      <Outlet />
    </Paper>
  );
}

export default BaseLayout;

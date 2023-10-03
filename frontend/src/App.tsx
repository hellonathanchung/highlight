// src/App.tsx

import React, { useState } from "react";
import "./App.css";
import FileUpload from "./components/FileUpload";
import FileViewer from "./components/FileViewer";
import {
  CssBaseline,
  Theme,
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff5722", // Quirky orange color
    },
    secondary: {
      main: "#00bcd4", // Quirky cyan color
    },
  },
});

const useStyles = makeStyles((theme: Theme) => ({
  quirkyLayout: {
    backgroundColor: "#ffee58", // Quirky yellow background color
    padding: theme.spacing(2),
  },
}));

function App() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={"App"}>
        <FileUpload setFile={setFile} />
        <FileViewer file={file} />
      </div>
    </ThemeProvider>
  );
}

export default App;

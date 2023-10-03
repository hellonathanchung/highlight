// src/components/FileUpload.tsx

import React, { FC, ChangeEvent } from "react";
import { Button, Container, Typography } from "@mui/material";

interface Props {
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const FileUpload: FC<Props> = ({ setFile }) => {
  const onFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Container>
      <input
        type="file"
        accept=".pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        style={{ display: "none" }}
        onChange={onFileUpload}
        id="file-upload-input"
      />
      <label htmlFor="file-upload-input">
        <Button variant="contained" color="primary" component="span">
          Upload File
        </Button>
      </label>
      <Typography variant="body1">Supported formats: PDF, DOC, DOCX</Typography>
    </Container>
  );
};

export default FileUpload;

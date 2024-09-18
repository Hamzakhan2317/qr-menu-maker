import DownloadSvg from "@/public/assets/svg/DownloadSvg";
import { doprzoneStyle, dropzoneText } from "@/styles/DashboarStyling";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function CustomDropzone() {
  const onDrop = useCallback((acceptedFiles) => {}, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={doprzoneStyle}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p style={dropzoneText}>
          <DownloadSvg />
          <span style={{ display: "block" }}>
            Only .jpg, .jpeg and .png files are supported.
          </span>
        </p>
      ) : (
        <p style={dropzoneText}>
          <DownloadSvg />
          <span style={{ display: "block" }}>
            Only .jpg, .jpeg and .png files are supported.
          </span>
        </p>
      )}
    </div>
  );
}

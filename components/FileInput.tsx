import { FileInputType } from "@/types/types";
import React, { ChangeEvent, useState } from "react";

const FileInput: React.FC<FileInputType> = ({
  label,
  title,
  value,
  onChange,
  error,
}) => {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("No File Selected");
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setImage(URL.createObjectURL(file));
      // Pass the file object to the parent component's onChange function if provided
      if (onChange) {
        onChange(file);
      }
    }
  };

  return (
    <>
      <label
        htmlFor={label}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>

      <div className="flex items-center justify-center w-full">
        <label
          htmlFor={label}
          className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer h-36 bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
        >
          <input type="file" id={label} hidden onChange={handleFileChange} />
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {image ? (
              <img
                src={image}
                className="h-24"
                alt={fileName || "Uploaded File"}
              />
            ) : (
              <>
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </>
            )}
          </div>
        </label>
      </div>
      <section>{fileName}</section>
      {error && <span className="text-sm link-error">{error}</span>}
    </>
  );
};

export default FileInput;

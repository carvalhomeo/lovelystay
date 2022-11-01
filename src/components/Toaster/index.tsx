import React from "react";
import { Toaster as Toastr } from "react-hot-toast";

export const Toaster = () => (
  <Toastr
    position="top-right"
    toastOptions={{
      className: "",
      style: {
        padding: "16px",
        color: "#FFFFFF",
        background: "#ac47cc",
      },
    }}
  />
);

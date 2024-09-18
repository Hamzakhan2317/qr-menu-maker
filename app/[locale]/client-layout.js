"use client"; // Mark this as a client component

import { Provider } from 'react-redux';
import { store } from "../../redux/store"; // Adjust the path as needed
import { Toaster } from "sonner";

export default function ClientLayout({ children }) {
  return (
    <>
      <Provider store={store}>
        {children}
      </Provider>
      <Toaster />
    </>
  );
}

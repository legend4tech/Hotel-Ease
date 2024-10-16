// components/PageTitle.js
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = `HotelEase ${location.pathname}`; // Default title

    document.title = pageTitle;
  }, [location]);

  return null; // This component renders nothing
}

export default PageTitle;

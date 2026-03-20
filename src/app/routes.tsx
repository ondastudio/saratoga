import { createBrowserRouter, Outlet, useLocation } from "react-router";
import Homepage from "../imports/Homepage";
import ProductsInsuranceEntityManagement from "../imports/ProductsInsuranceEntityManagement";
import Solutions from "../imports/Solutions";
import Integrations from "../imports/Integrations";
import Alliances from "../imports/Alliances";
import RegulatoryDatabase from "../imports/RegulatoryDatabase";
import AboutUs from "../imports/AboutUs";
import WhySaratoga from "../imports/WhySaratoga";
import DeveloperPortal from "../imports/DeveloperPortal";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function RootLayout() {
  return (
    <div className="w-full" style={{ overflowX: "clip" }}>
      <ScrollToTop />
      <div className="max-w-[1440px] mx-auto w-full relative">
        <Outlet />
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "products/insurance-entity-management",
        element: <ProductsInsuranceEntityManagement />,
      },
      {
        path: "solutions/insurance-agencies-brokers",
        element: <Solutions />,
      },
      {
        path: "partners/integrations",
        element: <Integrations />,
      },
      {
        path: "partners/alliances",
        element: <Alliances />,
      },
      {
        path: "resources/regulatory-database",
        element: <RegulatoryDatabase />,
      },
      {
        path: "company/about-us",
        element: <AboutUs />,
      },
      {
        path: "company/why-saratoga",
        element: <WhySaratoga />,
      },
      {
        path: "partners/developer-portal",
        element: <DeveloperPortal />,
      },
    ],
  },
]);
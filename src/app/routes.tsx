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
import EcosystemPartners from "../imports/EcosystemPartners";
import SolutionsLaunchAnAgency from "../imports/SolutionsLaunchAnAgency";
import LegalRegulatoryAlliances from "../imports/LegalRegulatoryAlliances";
import Careers from "../imports/Careers";
import { useEffect, useState } from "react";
import { SearchOverlay } from "../app/components/SearchOverlay";
import SearchResults from "../imports/SearchResults";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function RootLayout() {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleOpenSearch = () => setSearchOpen(true);
    window.addEventListener("open-search", handleOpenSearch);
    return () => window.removeEventListener("open-search", handleOpenSearch);
  }, []);

  return (
    <div className="w-full" style={{ overflowX: "clip" }}>
      <ScrollToTop />
      <div className="max-w-[1440px] mx-auto w-full relative">
        <Outlet />
      </div>
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
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
        path: "partners/ecosystem-partners",
        element: <EcosystemPartners />,
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
      {
        path: "solutions/launch-an-agency",
        element: <SolutionsLaunchAnAgency />,
      },
      {
        path: "partners/legal-regulatory-alliances",
        element: <LegalRegulatoryAlliances />,
      },
      {
        path: "company/careers",
        element: <Careers />,
      },
      {
        path: "search",
        element: <SearchResults />,
      },
    ],
  },
]);
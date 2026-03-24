import gradientHorizontal from "../../assets/svg/Gradient_Horizontal.svg";
import { Link as RouterLink, useSearchParams } from "react-router";
import { useState } from "react";
import PrimaryNavbar from "../app/components/PrimaryNavbar";
import Footer from "../app/components/Footer";
import CustomersCTA from "./Customers";

// ─── Search Data ──────────────────────────────────────────────────────────────

const SEARCH_DATA = [
  { title: "Insurance Entity Management", path: "/products/insurance-entity-management" },
  { title: "Producer & License Management", path: "/products/producer-license-management" },
  { title: "Contracting & Appointment Management", path: "/products/contracting-appointment-management" },
  { title: "Surplus Lines Management", path: "/products/surplus-lines-management" },
  { title: "E&O Coverage", path: "/products/eo-coverage" },
  { title: "Regulatory Helpdesk", path: "/products/regulatory-helpdesk" },
  { title: "Why Saratoga?", path: "/company/why-saratoga" },
  { title: "Insurance Agencies & Brokers", path: "/solutions/insurance-agencies-brokers" },
  { title: "MGAs & MGUs", path: "/solutions/mgas-mgus" },
  { title: "Wholesale + E&S Brokers", path: "/solutions/wholesale-es-brokers" },
  { title: "Hybrid & Fronting Carriers", path: "/solutions/hybrid-fronting-carriers" },
  { title: "InsurTechs", path: "/solutions/insurtechs" },
  { title: "Insurance Carriers", path: "/solutions/insurance-carriers" },
  { title: "Adjusters & Claims Managers", path: "/solutions/adjusters-claims-managers" },
  { title: "Launch an Agency", path: "/solutions/launch-an-agency" },
  { title: "Mitigate Risk", path: "/solutions/mitigate-risk" },
  { title: "Streamline Operations", path: "/solutions/streamline-operations" },
  { title: "Boost Profitability", path: "/solutions/boost-profitability" },
  { title: "Improve Distribution", path: "/solutions/improve-distribution" },
  { title: "Case Studies", path: "/resources/case-studies" },
  { title: "Blog & Insights", path: "/resources/blog-insights" },
  { title: "Regulatory Database", path: "/resources/regulatory-database" },
  { title: "Events", path: "/resources/events" },
  { title: "Integrations", path: "/partners/integrations" },
  { title: "Developer Portal", path: "/partners/developer-portal" },
  { title: "Ecosystem Partners", path: "/partners/ecosystem-partners" },
  { title: "About Us", path: "/company/about-us" },
  { title: "Careers", path: "/company/careers" },
  { title: "Leadership", path: "/company/leadership" },
  { title: "Press & News", path: "/company/press-news" },
  { title: "Contact Us", path: "/company/contact-us" },
];

const PAGE_SIZE = 5;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isFocused, setIsFocused] = useState(false);

  const results = initialQuery.trim()
    ? SEARCH_DATA.filter(
        (item) =>
          item.title.toLowerCase().includes(initialQuery.toLowerCase()) ||
          item.path.toLowerCase().includes(initialQuery.toLowerCase())
      )
    : [];

  const visibleResults = results.slice(0, visibleCount);

  return (
    <div className="bg-[#110846] flex flex-col items-start relative size-full" data-name="Search Results">
      {/* Header with gradient */}
      <div className="bg-[#110846] h-[470px] overflow-clip relative shrink-0 w-full">
        <img
          src={gradientHorizontal}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <PrimaryNavbar />
        <div className="absolute bottom-[80px] left-[80px] w-[1280px]">
          <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] text-[#af63ff] text-[14px] uppercase mb-[16px]">
            SHOWING SEARCH RESULTS FOR
          </p>
          <h1 className="font-['Saans:Regular',sans-serif] leading-[1.1] text-[#f5f5f5] text-[40px] mb-[16px]">
            {`\u201C${initialQuery}\u201D`}
          </h1>
          <p className="font-['Saans:Regular',sans-serif] leading-[1.4] text-[#9293BA] text-[16px]">
            {`Search finished, found ${results.length} page${results.length !== 1 ? "s" : ""} matching the search query.`}
          </p>
        </div>
      </div>

      {/* Search input + results */}
      <div className="w-full px-[80px] pt-[64px] pb-[120px]">
        {/* Search input */}
        <div className="flex items-center justify-between border border-[#f5f5f5] border-solid rounded-[4px] pl-[16px] pr-[8px] py-[8px] h-[48px] w-[277px] mb-[64px] focus-within:border-[#af63ff] transition-colors duration-200">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && query.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
              }
            }}
            placeholder="Try another search..."
            className="flex-1 bg-transparent border-none outline-none font-['Saans:Regular',sans-serif] text-[16px] text-[#f5f5f5] placeholder:text-[#9293BA] placeholder:opacity-50 leading-[1.2] caret-[#af63ff]"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <button
            onClick={() => {
              if (query.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
              }
            }}
            className={`shrink-0 flex items-center justify-center cursor-pointer transition-all duration-200 rounded-[4px] size-[32px] ${isFocused || query.trim() ? "" : "opacity-50"}`}
          >
            <div className="overflow-clip relative shrink-0 size-[20px]">
              <div className="absolute inset-[6.14%_9.37%_9.37%_6.14%]">
                <svg className="absolute block size-full" fill="none" viewBox="0 0 16.8971 16.8971">
                  <path
                    d="M16.8971 16.0133L12.1771 11.2932C13.3113 9.9316 13.8768 8.1851 13.7561 6.41707C13.6354 4.64904 12.8378 2.99561 11.529 1.80073C10.2203 0.605848 8.50131 -0.0384808 6.72963 0.00177916C4.95794 0.0420392 3.26998 0.763788 2.01688 2.01688C0.763788 3.26998 0.0420392 4.95794 0.00177916 6.72963C-0.0384808 8.50131 0.605848 10.2203 1.80073 11.529C2.99561 12.8378 4.64904 13.6354 6.41707 13.7561C8.1851 13.8768 9.9316 13.3113 11.2932 12.1771L16.0133 16.8971L16.8971 16.0133ZM1.27212 6.89712C1.27212 5.7846 1.60202 4.69706 2.2201 3.77204C2.83819 2.84701 3.71669 2.12604 4.74453 1.7003C5.77236 1.27456 6.90336 1.16316 7.9945 1.3802C9.08565 1.59725 10.0879 2.13297 10.8746 2.91964C11.6613 3.70632 12.197 4.70859 12.414 5.79974C12.6311 6.89088 12.5197 8.02188 12.0939 9.04972C11.6682 10.0776 10.9472 10.9561 10.0222 11.5741C9.09718 12.1922 8.00964 12.5221 6.89712 12.5221C5.40579 12.5205 3.97601 11.9273 2.92147 10.8728C1.86694 9.81824 1.27377 8.38846 1.27212 6.89712Z"
                    fill={isFocused ? "#F5F5F5" : query.trim() ? "#AF63FF" : "#9293BA"}
                    className="transition-colors duration-200"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>

        {/* Results list */}
        <div className="flex flex-col">
          {visibleResults.map((result) => (
            <RouterLink
              key={result.path}
              to={result.path}
              className="flex flex-col gap-[8px] py-[24px] border-t border-[#33317a] border-solid no-underline hover:bg-[#1E195B] transition-colors duration-150 px-[8px]"
            >
              <p className="font-['Saans:Medium',sans-serif] leading-[1.3] text-[18px] text-[#f5f5f5]">
                {result.title}
              </p>
              <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.4] text-[12px] uppercase text-[#AF63FF]">
                {result.path}
              </p>
            </RouterLink>
          ))}
        </div>

        {/* Load more */}
        {visibleCount < results.length && (
          <div className="flex justify-center mt-[40px]">
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="flex h-[40px] items-center justify-center px-[24px] py-[8px] rounded-[4px] border border-[#af63ff] border-solid cursor-pointer hover:bg-[#af63ff] transition-colors duration-200"
            >
              <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">
                LOAD MORE
              </p>
            </button>
          </div>
        )}
      </div>

      <CustomersCTA />
      <Footer variant="dark" />
    </div>
  );
}

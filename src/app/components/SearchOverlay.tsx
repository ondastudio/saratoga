import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router";

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

const INITIAL_RESULTS = 5;

function SearchIcon({ color = "#6A6B9E" }: { color?: string }) {
  return (
    <svg width="17" height="17" viewBox="0 0 16.8971 16.8971" fill="none">
      <path d="M16.8971 16.0133L12.1771 11.2932C13.3113 9.9316 13.8768 8.1851 13.7561 6.41707C13.6354 4.64904 12.8378 2.99561 11.529 1.80073C10.2203 0.605848 8.50131 -0.0384808 6.72963 0.00177916C4.95794 0.0420392 3.26998 0.763788 2.01688 2.01688C0.763788 3.26998 0.0420392 4.95794 0.00177916 6.72963C-0.0384808 8.50131 0.605848 10.2203 1.80073 11.529C2.99561 12.8378 4.64904 13.6354 6.41707 13.7561C8.1851 13.8768 9.9316 13.3113 11.2932 12.1771L16.0133 16.8971L16.8971 16.0133ZM1.27212 6.89712C1.27212 5.7846 1.60202 4.69706 2.2201 3.77204C2.83819 2.84701 3.71669 2.12604 4.74453 1.7003C5.77236 1.27456 6.90336 1.16316 7.9945 1.3802C9.08565 1.59725 10.0879 2.13297 10.8746 2.91964C11.6613 3.70632 12.197 4.70859 12.414 5.79974C12.6311 6.89088 12.5197 8.02188 12.0939 9.04972C11.6682 10.0776 10.9472 10.9561 10.0222 11.5741C9.09718 12.1922 8.00964 12.5221 6.89712 12.5221C5.40579 12.5205 3.97601 11.9273 2.92147 10.8728C1.86694 9.81824 1.27377 8.38846 1.27212 6.89712Z" fill={color} />
    </svg>
  );
}

function Spinner() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="animate-spin">
      <circle cx="10" cy="10" r="8" stroke="#6A6B9E" strokeWidth="2" strokeLinecap="round" strokeDasharray="40 60" />
    </svg>
  );
}

export function SearchOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const typingTimeout = useRef<ReturnType<typeof setTimeout>>();

  const results = query.trim()
    ? SEARCH_DATA.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.path.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const visibleResults = showAll ? results : results.slice(0, INITIAL_RESULTS);

  const handleClose = useCallback(() => {
    setQuery("");
    setShowAll(false);
    setIsTyping(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  const handleInputChange = (value: string) => {
    setQuery(value);
    setShowAll(false);
    if (value.trim()) {
      setIsTyping(true);
      clearTimeout(typingTimeout.current);
      typingTimeout.current = setTimeout(() => setIsTyping(false), 300);
    } else {
      setIsTyping(false);
    }
  };

  const handleResultClick = (path: string) => {
    handleClose();
    navigate(path);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-[#110846]/85 backdrop-blur-[20px] flex flex-col items-center justify-center"
      onClick={(e) => {
        if (e.target === overlayRef.current) handleClose();
      }}
    >
      {/* Search content — always vertically centered */}
      <div
        className="w-[420px] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
      >
        <div className="flex items-center gap-[16px] pb-[8px] border-b border-[#af63ff]">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Search"
            onKeyDown={(e) => {
              if (e.key === "Enter" && query.trim()) {
                handleClose();
                navigate(`/search?q=${encodeURIComponent(query.trim())}`);
              }
            }}
            className="flex-1 bg-transparent border-none outline-none font-['Saans:Regular',sans-serif] text-[24px] text-[#f5f5f5] placeholder:text-[#6A6B9E] leading-[1.2] caret-[#af63ff]"
          />
          <div className={`shrink-0 ${query.trim() ? "cursor-pointer" : ""}`} onClick={() => {
            if (query.trim()) {
              handleClose();
              navigate(`/search?q=${encodeURIComponent(query.trim())}`);
            }
          }}>
            {isTyping ? <Spinner /> : <SearchIcon color={query ? "#f5f5f5" : "#6A6B9E"} />}
          </div>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="mt-[8px] flex flex-col">
            {visibleResults.map((result) => (
              <button
                key={result.path}
                onClick={() => handleResultClick(result.path)}
                className="group text-left px-[16px] py-[16px] cursor-pointer transition-colors duration-150 rounded-[4px] hover:bg-[#D8C1FE]"
              >
                <p className="font-['Saans:Medium',sans-serif] leading-[1.3] text-[16px] text-[#f5f5f5] group-hover:text-[#110846] transition-colors duration-150">
                  {result.title}
                </p>
                <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.4] text-[12px] uppercase mt-[4px] text-[#AF63FF]">
                  {result.path}
                </p>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* SHOW MORE — fixed at 80px from bottom */}
      {results.length > INITIAL_RESULTS && !showAll && (
        <div className="fixed bottom-[80px] left-0 right-0 flex justify-center">
          <button
            onClick={() => {
              handleClose();
              navigate(`/search?q=${encodeURIComponent(query.trim())}`);
            }}
            className="content-stretch flex h-[40px] items-center gap-[16px] pl-[24px] pr-[4px] rounded-[4px] border border-[#af63ff] border-solid cursor-pointer hover:bg-[#af63ff] hover:border-transparent transition-colors duration-200"
          >
            <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">
              Show more
            </p>
            <div className="bg-[#af63ff] flex items-center justify-center rounded-[4px] shrink-0 size-[32px]">
              <svg width="15" height="12.5" viewBox="0 0 15 12.5" fill="none">
                <path d="M8.75 0L7.85625 0.870625L12.5937 5.625H0V6.875H12.5937L7.85625 11.6081L8.75 12.5L15 6.25L8.75 0Z" fill="#F5F5F5" />
              </svg>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

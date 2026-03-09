import { useState } from "react";
import CryptoList from "./CryptoList";

// 1. Removed: type TabType = "tradable" | "gainers" | "new";

const CryptoTrackerNavSection = () => {
  // 2. Removed: <TabType>
  const [activeTab, setActiveTab] = useState("tradable");

  const tabs = [
    { id: "tradable", name: "Tradable" }, // 3. Removed: as TabType
    { id: "gainers", name: "Top gainers" },
    { id: "new", name: "New on Coinbase" },
  ];

  return (
    <div className="bg-black rounded-[45px] py-10 px-10 w-250 h-auto">
      {/* Tabs */}
      <div className="flex gap-8 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`font-bold ${
              activeTab === tab.id
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <CryptoList type={activeTab} />
    </div>
  );
};

export default CryptoTrackerNavSection;
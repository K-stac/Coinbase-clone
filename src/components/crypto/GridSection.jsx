import AdvancedImg from "../../assets/Advanced.png";
import ZeroFees from "../../assets/zero_fees_us.png";
import CB from "../../assets/CB_LOLP__1_.png";

const GridSection = () => {
  const cards = [
    {
      title: "Advanced Trader",
      description: "Get more tools to trade",
      image: AdvancedImg,
      link: "/advanced-trade",
      buttonText: "Get started"
    },
    {
      title: "Zero Fees",
      description: "Trade with no fees on Coinbase One",
      image: ZeroFees,
      link: "/coinbase-one",
      buttonText: "Learn more"
    },
    {
      title: "Coinbase Card",
      description: "Spend crypto and earn rewards",
      image: CB,
      link: "/card",
      buttonText: "Apply now"
    }
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="w-full overflow-hidden rounded-2xl bg-gray-100 aspect-[16/9]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-2xl font-bold leading-8 tracking-tight text-gray-900">
                {card.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {card.description}
              </p>
              <a
                href={card.link}
                className="mt-4 text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
              >
                {card.buttonText} <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridSection;
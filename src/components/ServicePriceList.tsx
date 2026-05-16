export const servicesData = [
  {
    category: "Hair",
    items: [
      { name: "Precision Haircut", price: "₹150 - ₹600" },
      { name: "Fade Cut", price: "₹150 - ₹600" },
      { name: "Textured Cut", price: "₹150 - ₹600" },
      { name: "Buzz Cut", price: "₹150 - ₹600" },
      { name: "Wedding Styling", price: "Ask" },
    ],
  },
  {
    category: "Grooming & Beard",
    items: [
      { name: "Royal Hot Towel Shave", price: "₹100 - ₹400" },
      { name: "Beard Shaping", price: "₹100 - ₹400" },
      { name: "Beard Color", price: "Ask" },
    ],
  },
  {
    category: "Treatments",
    items: [
      { name: "Hair Spa", price: "₹500+" },
      { name: "Anti-Dandruff Treatment", price: "₹500+" },
      { name: "Hair Patch Fix", price: "₹3500+" },
    ],
  },
  {
    category: "Skincare",
    items: [
      { name: "Detan", price: "₹200+" },
      { name: "Blackhead Removal", price: "₹200+" },
      { name: "Facial", price: "₹500 - ₹1500" },
      { name: "Head Massage", price: "₹200+" },
    ],
  },
];

export default function ServicePriceList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 max-w-5xl mx-auto w-full">
      {servicesData.map((group, index) => (
        <div key={index}>
          <h3 className="text-headline-md text-primary mb-8 border-b border-outline-variant/30 pb-2 uppercase tracking-wide">
            {group.category}
          </h3>
          <ul className="space-y-6">
            {group.items.map((service, idx) => (
              <li key={idx} className="flex justify-between items-baseline">
                <span className="text-body-lg text-on-surface font-medium">
                  {service.name}
                </span>
                <div className="flex-grow border-b border-dotted border-outline-variant/50 mx-4"></div>
                <span className="text-label-md text-secondary-fixed whitespace-nowrap">
                  {service.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

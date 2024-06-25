import {
  SiRelianceindustrieslimited,
  SiTesla,
  SiApple,
  SiTata,
  SiToyota,
  SiHonda,
} from "react-icons/si";

const CompanyBar = () => {
  const companyData = [
    { name: "Reliance", logo: <SiRelianceindustrieslimited /> },
    { name: "Tata", logo: <SiTata /> },
    { name: "Apple", logo: <SiApple /> },
    { name: "Tesla", logo: <SiTesla /> },
    { name: "Toyata", logo: <SiToyota /> },
    { name: "Honda", logo: <SiHonda /> },
  ];

  return (
    <div>
      <ul className="flex text-white">
        {companyData.map((item) => (
          <li> 
            {item.logo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyBar;

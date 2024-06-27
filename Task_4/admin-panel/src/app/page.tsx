import CompanyBar from "@/components/CompanBar/CompanyBar";
import ContentCard1 from "@/components/ContentCard/ContectCard1";
import ContentCard2 from "@/components/ContentCard/ContentCard2";
import ContentCard3 from "@/components/ContentCard/contentCard3";
import ContentCard4 from "@/components/ContentCard/ContentCard4";
import ContentCard5 from "@/components/ContentCard/ContentCard5";
import ContentCard6 from "@/components/ContentCard/ContentCrard6";


export default function Home() {
  return (
    <div className="text-white">
    <h2>Top Companies</h2>
    <CompanyBar/>
    <div className="grid">
      <ContentCard1/>
      <ContentCard2/>
      <ContentCard3/>
      <ContentCard4/>
      <ContentCard5/>
      <ContentCard6/>
    </div>
    <div>
      
    </div>
    </div>
  );
}

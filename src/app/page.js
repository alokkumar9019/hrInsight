import Section1 from "../components/Section1";
import SectionChallenges from "../components/SectionChallenges";
import SectionFeatures from "../components/SectionFeatures";
import PowerfulModules from "../components/PowerfulModules";
import Integration from "../components/Integration";
import DemoRequestForm from "../components/DemoRequestForm";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen bg-gray-50 dark:bg-black transition-colors duration-500">
      
      <Section1 />
      <SectionChallenges />
      <SectionFeatures/>
      <PowerfulModules />
      <Integration />
      <DemoRequestForm />

    </div>
  );
}

import { motion } from "framer-motion";
import BrahmaHero from "./brahma/BrahmaHero";
import Marquee from "./brahma/Marquee";
import CodeZoom from "./brahma/CodeZoom";
import BrahmaFeatures from "./brahma/BrahmaFeatures";
import ControlLoop from "./brahma/ControlLoop";
import HumanApproval from "./brahma/HumanApproval";
import ArtifactIntegrity from "./brahma/ArtifactIntegrity";
import ObservabilityTrace from "./brahma/ObservabilityTrace";
import HowItWorks from "./brahma/HowItWorks";
import ArchitectureDiagram from "./brahma/ArchitectureDiagram";
import UseCases from "./brahma/UseCases";
import CtaSection from "./brahma/CtaSection";
import BrahmaFooter from "./brahma/BrahmaFooter";

export default function BrahmaSite({ revealed }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: revealed ? 1 : 0 }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
    >
      <main className="bg-black">
        <BrahmaHero />
        <Marquee />
        <CodeZoom />
        <BrahmaFeatures />
        <ControlLoop />
        <HumanApproval />
        <ArtifactIntegrity />
        <ObservabilityTrace />
        <HowItWorks />
        <ArchitectureDiagram />
        <UseCases />
        <CtaSection />
        <BrahmaFooter />
      </main>
    </motion.div>
  );
}
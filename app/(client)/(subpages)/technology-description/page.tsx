import Image from "next/image";
import {ProcessDiagram} from "@/components/ProcessDiagram";
import {CircularProcessDiagram} from "@/components/CircularProcessDiagram";
import {CostAnalysisGraph} from "@/components/CostAnalysisGraph";

export default function TechnologyDescription() {
  return (
    <div className="container mx-auto px-6 md:px-16 lg:px-24 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        <span className="font-bold">ReSoil®</span> Technology
      </h1>

      <section className="max-w-3xl mx-auto mb-16">
        <p className="text-lg leading-relaxed mb-8">
          <span className="font-bold">ReSoil®</span> is a novel and innovative remediation solution that enables the removal of heavy metals from
          contaminated soils in a closed cycle through an emission-free process without wastewater, while preserving the soil as a natural substrate.
        </p>
      </section>

      <section className="mb-16">
        <ProcessDiagram />
        <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
          This diagram outlines the <span className="font-bold">ReSoil®</span> process: contaminated soil is washed to obtain clean soil, while
          recycling solutions capture heavy metals as solid waste. On the left, toxic metals are removed by EDTA chelation, and iron oxide hydroxides
          bind metalloids like arsenic, which are then released in the wash solution. EDTA prevents re-adsorption of arsenic. On the right, EDTA is
          recycled using a pH gradient from quicklime and sulfuric acid, allowing metals to co-precipitate with iron. Remaining toxic metals in soil
          are immobilized with zero-valent iron.
        </p>
      </section>

      <section className="mb-16">
        <CircularProcessDiagram />
        <div className="max-w-3xl mx-auto mt-8">
          <p className="text-lg leading-relaxed mb-6">
            <span className="font-bold">ReSoil®</span> enables the restoration of soils across various land uses, including agricultural lands, paddy
            fields, brownfields, military sites, and urban areas. The process preserves the soil&apos;s chemical, physical, and biological properties,
            ensuring plant growth remains unaffected while reducing heavy metal concentrations in plants by up to 99%.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            As shown in the photo on the right, leachate collected from vegetable beds in remediated soil displayed insignificant levels of lead and
            cadmium. Soil biological properties—such as enzyme activities for carbon, nitrogen, and phosphorus cycles, microbial respiration, and soil
            mycorrhiza—remained stable. Additionally, earthworms were drawn to the treated soil, and remediation reduced lead in vegetables by up to
            95% (kohlrabi) and cadmium by up to 91% (leek), bringing these metals to safe levels.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-6">Cost Analysis</h2>
          <p className="text-lg leading-relaxed mb-8">
            As can be seen from this figure, <span className="font-bold">ReSoil®</span> follows the principle of economies of scale. As the capacity
            of the remediation system increases, the cost of materials becomes the determining factor. Herein lies the advantage of{" "}
            <span className="font-bold">ReSoil®</span>, which recycles efficient but expensive EDTA, as shown in the tables to the right, with
            inexpensive lime and sulfuric acid.
          </p>
        </div>

        <CostAnalysisGraph />
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Key Process Features</h2>
        <div className="grid gap-4">
          {features.map((feature, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <p className="text-gray-700" dangerouslySetInnerHTML={{__html: feature}} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const features = [
  "In ReSoil® the chelating agent EDTA (ethylenediamine tetraacetate) is used to extract toxic metals: Pb, Cd, Cu, Zn…. and metalloids: As, Sb from the soil.",
  "ReSoil® is a batch process with a soil remediation cycle of < 1.5 hours.",
  "EDTA and all process water are recycled in a pH gradient of 12.5 - 2 given by CaO / Fe2+ and H2SO4.",
  "Metals and metalloids precipitate with Fe and in the form of hydroxides.",
  "Excess and residual reagents are removed from the process solutions, e.g. as Ca salts.",
  "Water is only required to balance the moisture in the remediated soil and for lime hydration.",
  "The washed soil is used as a filter to purify the process solutions.",
  "Emissions from the washed soil are contained by rinsing the soil and adding zero-valent iron (Fe0) to the soil slurry.",
  "Closed cycle: No waste water is produced, only solid waste.",
];

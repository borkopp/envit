import SubpageTemplate from '@/app/components/SubpageTemplate';
import {ProcessDiagram} from "@/components/ProcessDiagram";
import {CircularProcessDiagram} from "@/components/CircularProcessDiagram";
import {CostAnalysisGraph} from "@/components/CostAnalysisGraph";
import { RemediationTable } from "@/components/RemediationTable";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function TechnologyDescription() {
  return (
    <SubpageTemplate>
      {/* Process Overview Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The ReSoil® process combines innovative soil washing techniques with advanced
                recycling solutions to effectively remove heavy metals while preserving soil quality.
              </p>
              <ProcessDiagram />
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Key Process Features</h3>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-700" dangerouslySetInnerHTML={{__html: feature}} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <CircularProcessDiagram />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold mb-6">Sustainable Soil Restoration</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  ReSoil® enables the restoration of soils across various land uses, including agricultural lands,
                  paddy fields, brownfields, military sites, and urban areas.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-green-500">✓</span>
                      Preserves soil&apos;s chemical, physical, and biological properties
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500">✓</span>
                      Reduces heavy metal concentrations by up to 99%
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500">✓</span>
                      Ensures unaffected plant growth
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Analysis Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 md:px-16 lg:px-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold mb-6">Cost Analysis</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              ReSoil® follows the principle of economies of scale, offering cost-effective
              solutions through efficient material recycling and innovative processes.
            </p>
          </div>
          <CostAnalysisGraph />
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 md:px-16 lg:px-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold mb-6">
              Remediation Options Comparison
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              See how ReSoil® compares to conventional remediation methods for
              soils contaminated with heavy metals.
            </p>
          </div>
          
          <div className="overflow-x-auto mb-12 rounded-lg shadow-lg">
            <RemediationTable />
          </div>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Why Choose ReSoil®?</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                ReSoil® offers a more sustainable and efficient alternative to conventional remediation
                methods, being the only solution that efficiently removes toxic metals while preserving
                soil functionality.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Environmental Impact</h4>
                  <p className="text-gray-700">Environmentally friendly and sustainable, with no harmful emissions</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Cost Efficiency</h4>
                  <p className="text-gray-700">Uses low-cost materials to recycle expensive EDTA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 md:px-16 lg:px-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">For more information, contact us!</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contact us to learn more about how ReSoil® Technology can help with your soil remediation needs.
            </p>
            <Link 
              href="/about-us" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all duration-300 group"
            >
              Contact Us 
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </SubpageTemplate>
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

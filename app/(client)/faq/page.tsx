import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mb-10 mx-auto">
          Find answers to common questions about our technology and services.
        </p>

        <Accordion
          type="single"
          collapsible
          className="w-full md:w-4/5 mx-auto"
        >
          {/* FAQ Item 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              Why is your solution better than what currently exists on the
              market?
            </AccordionTrigger>
            <AccordionContent>
              The main competitive advantage of ReSoil® technology is the
              simultaneous removal of metalloid arsenic, and lead and other
              toxic metals from contaminated soils and sediments. Arsenic and
              lead are ranking no. 1 and 2 in the substance priority list
              maintained by the US Agency for Toxic Substances and Disease
              Registry. These are substances which pose the most significant
              threat to human health due to their toxicity and potential for
              human exposure. The ReSoil® is, in addition, compatible with
              bioremediation and natural attenuation for removal of organic
              pollutants. The innovative feature of ReSoil® is recycling of
              process solutions and main reagent in a closed process loop using
              inexpensive reagents and materials, which environmental use is not
              restricted by EU REACH legislation. The ReSoil® pose no secondary
              threat to environment, it is emission free, only solid waste is
              generated. With distinction to other soil-washing technologies no
              wastewater is generated. Of other main requirements the ReSoil®
              preserves soil quality and functioning as a natural resource and
              plant substrate. Minimal infrastructural requirements of ReSoil®
              enables for on-site remedial operations. The ReSoil® is the only
              commercially available technology which removes both toxic
              metalloids and toxic metals (commonly known as “heavy metals”)
              from soil simultaneously, efficiently and sustainably.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              Is ReSoil® technology limited to removal of Pb from contaminated
              soils?
            </AccordionTrigger>
            <AccordionContent>
              EDTA which is used as a chelating agent in ReSoil® technology
              removes Cd, Zn, Cu and other toxic metals non-specifically from
              contaminated soils. Pb is the most ubiquitous of these metals and
              presents the most pervasive and persistent risk to human health.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              Since EDTA acts non-specifically on soil toxic metals, are
              therefore metallic soil micronutrients removed alongside?
            </AccordionTrigger>
            <AccordionContent>
              Soil Cu, Zn and Mn are micronutrients and, when present in
              excessive concentration, pollutants. They are at least partly
              removed by ReSoil technology. For good plant growth in the
              remediated soil fertilization with Mn is usually required. Other
              major soil metals: Fe, Al, Mg and Ca are marginally affected by
              ReSoil.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">
              Can I change my shipping address after placing an order?
            </AccordionTrigger>
            <AccordionContent>
              Unfortunately, once an order is placed, we cannot change the
              shipping address. Please ensure your address is correct before
              completing your order.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">
              Is ReSoil® technology capable of removal of total concentration
              of toxic metals from soil?
            </AccordionTrigger>
            <AccordionContent>
              EDTA is the most potent chelating agent. Nevertheless, fraction of
              toxic metals occluded into the soil minerals and other solid
              materials is chemically and biologically unavailable. This
              fraction of toxic metals cannot be removed from the soil by EDTA.
              Specifically, toxic metals removal efficiency depends on soil
              type, means of pollution (air emissions, alluvial deposits,
              metallurgical tailings etc.) metal speciation (carbonates,
              sulfides/sulphates, oxides etc.) and metal fractionation into soil
              carbonates, organic matter, oxy-hydroxides etc. Typically,
              ReSoil® technology removes up to 95% of Pb from acidic soils and
              up to 75% of Pb from calcareous soil.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left">
              The main human exposure pathway of Pb is through accidental soil
              and soil dust ingestion and inhalation. How does ReSoil® mitigate
              this hazard?
            </AccordionTrigger>
            <AccordionContent>
              Any exposure to Pb is considered as potentially harmful. However,
              ReSoil reduces toxic metals bio-accessibility from soil into the
              simulated human gastro-intestinal fluids for at least 80%.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left">
              How ReSoil® deals with As, which is frequent soil co-contaminant?
            </AccordionTrigger>
            <AccordionContent>
              EDTA does not chelate / remove oxy-anion forming toxic elements
              such as As. However, ReSoil technology enables for efficient
              immobilization of As by introducing iron and iron oxides directly
              into the slurry of remediated soil.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-left">
              What about organic soil co-contaminants?
            </AccordionTrigger>
            <AccordionContent>
              ReSoil® is compatible with ex situ and in situ chemical, physical
              and biological remediation technologies which are used for soils
              contaminated with organic pollutants. For example; ReSoil®
              preserves soil microbial life and can be combined with natural
              attenuation, bio-stimulation and bio-augmentation remediation
              technologies which bio-degrade organic pollutants.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="text-left">
              Soil washing technologies are historically characterized by
              production of large amounts of waste water which is difficult and
              expensive to treat. How much waste water is produced in ReSoil®?
            </AccordionTrigger>
            <AccordionContent>
              ReSoil® technology innovatively treats and recycles all process
              water (washing and rinsing solutions) in a closed process loop
              using inexpensive and waste materials. No waste-water is produced
              in ReSoil.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger className="text-left">
              How much fresh water is used in ReSoil®?
            </AccordionTrigger>
            <AccordionContent>
              ReSoil® uses fresh water to compensate for water loss due to
              difference in moisture in soil entering and exiting the
              remediation process. This difference is usually narrow and little
              fresh water; {"<"} 10% of soil weight is usually consumed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-11">
            <AccordionTrigger className="text-left">
              What about other wastes?
            </AccordionTrigger>
            <AccordionContent>
              ReSoil® technology produces no gaseous emissions. Only the solid
              waste, up to 1.1 kg of per ton of remediated soil is generated.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-12">
            <AccordionTrigger className="text-left">
              Is ReSoil® technology feasible in mobile and on-site remediation
              facility?
            </AccordionTrigger>
            <AccordionContent>
              ReSoil® generates no waste-water and other emissions, produces
              only solid wastes and uses very little fresh water. Energy and
              infrastructural requirements for ReSoil® are modest; mobile and
              on-site setting of the ReSoil® remediation plant is feasible.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-13">
            <AccordionTrigger className="text-left">
              Are solid wastes produced in ReSoil® reusable?
            </AccordionTrigger>
            <AccordionContent>
              Disposal of small quantity of solid wastes represent bearable
              additional cost to remediation. However, in a circular economy
              there is also alternative for solid wastes use. Pb and other
              metals absorbed on waste polysaccharide material (i.e. waste
              paper) can be reclaimed after incineration of absorbent and
              calcinated metal-oxides in a lime cake can be delivered and reused
              in Pb smelting plant.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-14">
            <AccordionTrigger className="text-left">
              How much of the chelating agent is recycled in ReSoil®
              technology?
            </AccordionTrigger>
            <AccordionContent>
              ReSoil® recycles at least 85% of EDTA in washing solution. Some
              EDTA is lost during remediation processes, mainly due to permanent
              absorption on soil solids. The lost chelating agent must be
              resupplied to the process.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-15">
            <AccordionTrigger className="text-left">
              EDTA exhibits poor photo, chemical and biological degradability
              and persists in the environment. Consequently, are there emissions
              of EDTA and EDTA chelates with toxic metals from ReSoil®
              remediated soil, i.e. in leachates?
            </AccordionTrigger>
            <AccordionContent>
              In ReSoil® process EDTA concentration in remediated soil is
              lowered to around 5 mmol kg-1 by closed-loop soil rinsing.
              Inexpensive addition of zero-valent Fe (Fe0, approx. 1% w/w) into
              the soil slurry enables for fast and permanent adsorption of
              residual EDTA and toxic metals chelates. Leaching of EDTA and
              toxic metals from remediated soils is thus minimized to the levels
              close or bellow emissions from original (not-remediated) soil. The
              adsorption of EDTA-chelates on Fe0 is abiotic; poor EDTA
              biodegradability and environmental persistence is not be an issue
              in curbing hazardous toxic emissions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-16">
            <AccordionTrigger className="text-left">
              Is EDTA-soil washing harmful for soils?
            </AccordionTrigger>
            <AccordionContent>
              EDTA-soil washing moderately affects soil chemical, physical and
              biological properties but does not impede vital soil properties.
              Amending soils with compost, inoculum of un-contaminated soil etc.
              restores original soil microbial community composition in few
              weeks. Remediated soils are fully functional, support plant growth
              and provide other expected ecosystem services.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-17">
            <AccordionTrigger className="text-left">
              Can ReSoil® remediated soil be used for safe food production,
              i.e. in urban agriculture?
            </AccordionTrigger>
            <AccordionContent>
              This depends on the level of contamination. Our results with
              low-moderately contaminated soils ({"<"} 1500 mg Pb kg-1) which
              are the most abundant indicate that the Pb concentration in edible
              parts of plants and vegetables produced on remediated soil is
              below values stipulated by EU legislature.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-18">
            <AccordionTrigger className="text-left">
              Why not using biodegradable chelators instead of biologically
              inert EDTA?
            </AccordionTrigger>
            <AccordionContent>
              Current biodegradable chelators are less efficient in toxic metal
              removal compared to EDTA, and more expensive than EDTA. They are
              non-recyclable which increases the environmental impact of their
              use.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-19">
            <AccordionTrigger className="text-left">
              Is ReSoil technology cost-efficient?
            </AccordionTrigger>
            <AccordionContent>
              ReSoil® uses commonly available machinery, energy and water
              consumption are moderate. ReSoil® technology recycles EDTA and
              process waters using inexpensive and waste materials; only small
              amount of solid wastes is produced The remediation cost is
              scale-dependent.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-20">
            <AccordionTrigger className="text-left">
              Are there other available similar soil remediation technologies?
            </AccordionTrigger>
            <AccordionContent>
              ReSoil® is the single commercially available technology which
              efficiently removes toxic metals from soils and sediments,
              recycles reagent and process waters, generates no liquid wastes,
              produces no emissions and preserves remediated soil as a natural
              resource.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQPage;

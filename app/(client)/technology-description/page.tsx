import Image from "next/image";

export default function TechnologyDescription() {
  return (
    <div className="container mx-auto px-6 md:px-16 lg:px-24 py-10">
      <h1 className="text-4xl font-extrabold text-center mb-10">
        Technology Description
      </h1>

      <section className="mb-12">
        <p className="text-xl leading-relaxed mb-6">
          <strong>ReSoil®</strong>, our patented soil remediation technology,
          is the only commercially available solution that efficiently removes{" "}
          <strong>Pb (lead)</strong> and other toxic metals from contaminated
          soils and sediments. It recycles reagents and process waters,
          generates no liquid waste, produces no toxic emissions from remediated
          soil, and preserves remediated soil as a natural resource.
        </p>
      </section>
      <section className="my-12 bg-gray-100 p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="aspect-w-16 aspect-h-9 h-[400px] lg:h-[400px]">
            <iframe
              className="w-full h-full rounded-lg shadow-md"
              src="https://www.youtube.com/embed/r50LNFog-Hc"
              title="ENVIT ReSoil Technology"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Technical Paper</h3>
            <p className="mb-4">
              Learn more about our technology by reading our detailed technical
              paper.
            </p>
            <a
              href="/ReSoil-Technology.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300 text-center"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Soil Contamination with Pb and Other Toxic Metals is Ubiquitous
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Soils are an omnipresent factor of human existence and a valuable,
          limited resource. They are often contaminated with several toxic
          metals that don&apos;t get biodegrade or decay, with{" "}
          <strong>
            Pb presenting the most pervasive and persistent risk to human health
          </strong>
          . Urban soils integrate decades of pollution from Pb-based paint and
          emissions from the combustion of leaded gasoline. In the USA, exterior
          Pb paint was used in 89% of residential structures before 1978.² As an
          example of urban contamination, out of 49 analyzed playgrounds in
          Vilnius, 21 had hazardous levels of Pb contamination.³ Both
          racial/ethnic and income disparities have been documented with respect
          to exposure to Pb in soils.⁴
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Shooting guns at firing ranges is an occupational necessity for
          military, police officers, and security personnel. In the USA alone,
          an estimated 16,000-18,000 firing ranges exist. Following shooting
          activities, the soil at firing ranges accumulates substantial
          quantities of Pb.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          One of the most significant sources of soil Pb is ore mining/smelting.
          According to a global inventory (late 1980s), about{" "}
          <strong>356-857×10⁶ kg Pb was released annually</strong>.⁵ Major
          mining/smelting locations in Europe include Noyelles-Godault/Auby,
          Mortagne-du-Nord, and Bazoches-les-Gallérandes in France; Pribram in
          the Czech Republic; Olkusz and Bukowno in Poland; Avonmouth in the UK;
          Harjavalta in Finland; Rönnskär in Sweden; Lommel in Belgium; Kuklen
          in Bulgaria; Kosovska Mitrovica in Kosovo; and Veles in Macedonia.⁶
          Emissions have decreased in western countries over the last 50 years
          due to the installation of efficient flue gas cleaning systems.⁷
          However, increasing industrial activities on other continents could
          significantly affect global emissions. For example, up to 2007,
          cumulative emissions from mining, ore dressing, and smelting in China
          were about 1.62 ×10⁹ kg Pb.⁸
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Pb is highly toxic to humans. Any exposure is considered potentially
          harmful, and no threshold for adverse effects has been identified.⁹
          Children are a particularly vulnerable group due to accidental
          ingestion.¹⁰ Adults absorb 10–15% of ingested Pb, whereas children may
          absorb up to 50% via the gastrointestinal tract.¹¹ Soil ingestion
          accounts for more than 80% of daily Pb exposure.¹² The high
          gastrointestinal uptake and the permeable blood-brain barrier make
          children especially susceptible to Pb exposure, leading to brain
          damage, neurotoxic effects, and developmental issues.¹³ A recent
          report from the Centers for Disease Control and Prevention (CDC) found
          that 535,000 children between one and five years old in the USA have a
          minimum of 5 µg Pb dL ⁻¹ of blood. This is not much different from the
          results found in 1990.¹⁴ Arguments have been made to clean up areas
          where soil contains high levels of Pb, especially if children
          frequently visit those areas.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The human population is growing, and the world food supply will need
          to be doubled between 2005 and 2050.¹⁵ The scarcity of soil resources
          will inevitably force us to cultivate contaminated areas;
          metal-contaminated land is already used for food production to
          compensate for the loss of agricultural surfaces due to
          urbanization.¹⁶ Urban agriculture is booming worldwide, fulfilling
          diverse functions such as food production, community building,
          reducing socioeconomic tensions, and minimizing food mileage.¹⁷ Urban
          allotment gardens have recently been offered by local governments to
          encourage low-income citizens to produce their own food.¹⁸ In New
          York, with a long history of gardening, 71% of home garden samples
          exceed the respective Soil Clean-up Objective limits for Pb and As.¹⁹
          In Berlin, 52% of crop samples from inner-city vegetable gardens
          exceeded standards²⁰ for Pb concentration in food crops.²¹ Citywide
          studies show that Pb contamination of urban soils is becoming a
          significant human health concern and may pose a major obstacle to the
          adoption of urban agriculture.²²
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Current Remediation Methods are Ineffective in Pb Removal and Waste
          Soil
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          A solution for contamination problems is the reclamation and reuse of
          metal-contaminated land through effective, cost-efficient, and
          sustainable remediation methods that preserve soil. Most countries
          prioritize the cleanup and restoration of contaminated land.
          Historically, excavation to landfill (dig and dump) has been a quick
          solution to remove pollution sources from the soil. However, more
          countries are now implementing legislature with heavy restrictions on
          landfill. Other current options, such as soil sealing and the
          separation of contaminated fines, also result in waste soil. In
          response, the concept of{" "}
          <strong>Gentle Remediation Options (GRO)</strong> has emerged. These
          techniques aim to maintain soil functionality and manage risks.²³ For
          metal-contaminated soils, GRO includes immobilization and
          phytoextraction. To date, plant hyperaccumulation of Pb, Cu, Co, and
          Tl remains largely unconfirmed.²⁴ ²⁵ Immobilization using various
          additives (phosphates, zeolites, iron, and iron oxides) reduces metal
          uptake by plants but does not remove toxic metals from the soil.²⁶
          Only a fraction of Pb-contaminated soils is currently treated due to
          the lack of efficient and sustainable remediation technologies.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Soil washing and the removal of toxic metals with chelants preserve
          basic soil functions.²⁷ ²⁸ In particular, soil washing with{" "}
          <strong>ethylenediamine tetraacetate (EDTA)</strong>—the most
          effective, benchmark chelant—has been intensively studied over the
          last two decades by research groups worldwide. However, difficulties
          with cost-effective treatment of vast quantities of process
          solutions²⁹, the absence of feasible EDTA recycling, and toxic
          emissions from remediated soil due to poor EDTA biodegradability and
          environmental persistence remain unsolved problems—until now.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          ReSoil® - Cost-Efficient, Effective, Soil-Preserving, and
          Emission-Free Remediation Technology
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          We developed a unique soil-washing technology (patent families US
          9108233B2 and EP 3153246B) in which{" "}
          <strong>EDTA and process waters are recycled</strong> in an imposed pH
          gradient within a closed process loop (Figure 1). To achieve cost
          efficiency, the ReSoil technology uses inexpensive and waste
          materials. The alkalinity imposed by Ca-containing bases (e.g., lime)
          destabilizes EDTA chelates with toxic metals.³⁰ ³¹ Consequently, Pb
          and other toxic metals (Me) are replaced in the EDTA chelate by Ca,
          and toxic metals precipitate from the reaction as insoluble
          hydroxides. The chelant in the recycled Ca-EDTA form is much less
          aggressive to soil than commonly used Na-EDTA.³² To shift the chemical
          equilibrium further towards product formation, we introduced alkaline
          adsorption of released toxic metals on polysaccharide materials (i.e.,
          waste paper, R3C-OH) for the substitution/adsorption/precipitation
          reaction:³³
        </p>
        <p className="text-lg leading-relaxed mb-6 bg-gray-100 p-4 rounded-lg">
          2Ca²⁺ + 4(OH)⁻ + PbNa₂(EDTA) → Pb(OH)₂(s)↓ + Na₂Ca(EDTA)
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The alkaline part of the process yields more than 90% of recycled
          EDTA. The remaining EDTA is recycled in insoluble acidic form (H4EDTA,
          pK4 = 2.7)after addition of sulfuric acid (H2SO4). Excess SO4²⁻ from
          the acidic and Ca²⁺ from the alkaline part of the process forms
          insoluble gypsum (CaSO4) which is removed with the remediated soil.
          The build-up of salty ions and deterioration of process solutions
          throughconsecutive batches is thus prevented. Gypsum is a plant
          nutrient source and beneficial soil conditioner.³⁴ Remediated soil is
          milled to obtain artificial soil aggregates, and then mixed with the
          cleansed oversized soil material, fertilized and formulated. The
          post-remedial toxic emissions from soil are mitigated to the levels
          close orbellow limits of quantification by effective soil rinsing
          which reduces toxic metals and EDTA concentration in the downstream
          process waters (Figure 2) and addition of zero-valent Fe (Fe⁰) into
          the soil slurry (Patent appl. GB 1720126.0) which enables for fast and
          permanent adsorption of small residual quantities of EDTA and toxic
          metals chelates. The process is abiotic; poor EDTA biodegradability is
          not an issue even if exceedingly high chelant concentrations are used
          in soil washing. Furthermore, Fe⁰ slurry addition simultaneously
          immobilize As which is a common soil co-contaminant to soil Pb.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-12">
          <div>
            <Image
              src="/technology-desc1.png"
              alt="Soil Remediation Process"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <p className="text-sm italic mt-6 text-center">
              <strong>Figure 1.</strong> The ReSoil® technology flowchart. The
              recovered EDTA and process waters are reused in a closed cycle.
              The washed soil is rinsed 3-times with recycled process water and
              at the end with water to compensate for difference in soil
              moisture between contaminated soil entering and remediation soil
              leaving the process.
            </p>
          </div>
          <div>
            <Image
              src="/technology-desc2.jpg"
              alt="Washing Process"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <p className="text-sm italic mt-6 text-center">
              <strong>Figure 2.</strong> Consecutive rinsing reduces EDTA and
              toxic metals (i.e. Pb) concentration in the downstream process
              waters and in the remediated soil.
            </p>
          </div>
        </div>
        <p className="text-lg leading-relaxed mb-6">
          ReSoil is an ex situ remediation technology – the contaminated soil is
          excavated and transported to the remediation facility and the
          remediated soil returned to the site of excavation. Soil washing by
          EDTA has shown to result in high multimetal (Pb, Zn, Cd, Cu) removal
          efficiency,³⁵ ³⁶ especially from bioavailable soil fractions.³⁷ ³⁸ Up
          to 95% of Pb removal from contaminated soils by EDTA has been
          documented by other research groups.³⁹ The ReSoil process generates
          less than 1.1% weight of solid wastes, no liquid wastes are produced.
          The technology was developed from laboratory / pilot-scale to
          demonstrational remediation plant with the capacity of 6 tons of soil
          per day in the city of Prevalje in Meza Valley, Slovenia. The cost of
          remediation is 136-186 $ per ton of soil, without profit.{" "}
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Ecosystem services of EDTA remediated soil
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Realistically tended vegetable gardens with EDTA-remediated soil have
          supported the growth of vegetables,⁴⁰ grasses and horticultural plants
          (Figure 3).³⁷ Pb uptake by plants was prevented or significantly
          reduced (Table 1). Remediation with high EDTA doses affected the soil
          C and N cycles, soil enzyme activities and the structure and abundance
          of soil microbial populations, especially arbuscular mycorrhizae.⁴¹ ⁴²
          However, using simple and inexpensive revitalization measures, e.g.,
          addition of compost, healthy un-polluted soil and commercial or
          indigenous microbial AM inoculum, restored microbial life.⁴¹ ⁴² ⁴³ The
          chemical and physical properties of remediated soil were mainly
          preserved.³⁴ ⁴⁴ The ReSoil technology is fully consistent with
          criteria set by GRO concept.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <Image
              src="/technology-desc3.jpg"
              alt="Soil Remediation Process"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <p className="text-sm italic mt-2 text-center">
              <strong>Figure 3.</strong> Remediated soil is functional and
              possess fully restored quality.
            </p>
          </div>
          <div>
            <Image
              src="/technology-desc4.png"
              alt="Washing Process"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <p className="text-sm italic mt-2 text-center">
              <strong>Table 1.</strong> Concentrations of Pb in vegetables
              cultivated on original (1585 mg kg⁻¹Pb) and remediated calcareous
              soil (320 mg kg⁻¹Pb). Data in bold exceed the Pb limit for food
              safety. LOQ, limit of quantification.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download } from "lucide-react";
import Image from "next/image";
import { FaFilePdf } from "react-icons/fa6";

export default function TechnologyDescription() {
  return (
    <div className="container  mx-auto px-6 md:px-16 lg:px-24 py-10">
      <h1 className="text-3xl font-semibold text-center mb-10">
        Technology Description
      </h1>

      <section className="mb-12">
        <p className="text-lg leading-relaxed mb-6">
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
            <h3 className="text-2xl flex items-center gap-2 font-semibold mb-4">
              Technical Paper
              <FaFilePdf />
            </h3>
            <p className="mb-4">
              Learn more about our technology by reading our detailed technical
              paper.
            </p>
            <a
              href="/ReSoil-Technology.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 flex justify-center items-center gap-2 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300 text-center"
            >
              Download PDF
              <Download />
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
          <strong>Pb is highly toxic to humans.</strong> Any exposure is
          considered potentially harmful, and no threshold for adverse effects
          has been identified.⁹ Children are a particularly vulnerable group due
          to accidental ingestion.¹⁰ Adults absorb{" "}
          <strong>10–15% of ingested Pb</strong>, whereas children may absorb{" "}
          <strong>up to 50%</strong> via the gastrointestinal tract.¹¹ Soil
          ingestion accounts for more than 80% of daily Pb exposure.¹² The high
          gastrointestinal uptake and the permeable blood-brain barrier make
          children especially susceptible to Pb exposure, leading to brain
          damage, neurotoxic effects, and developmental issues.¹³ A recent
          report from the Centers for Disease Control and Prevention (CDC) found
          that <strong> 535,000 children</strong> between one and five years old
          in the USA have a minimum of 5 µg Pb dL ⁻¹ of blood. This is not much
          different from the results found in 1990.¹⁴ Arguments have been made
          to clean up areas where soil contains high levels of Pb, especially if
          children frequently visit those areas.
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
          <strong>ReSoil®</strong> - Cost-Efficient, Effective,
          Soil-Preserving, and Emission-Free Remediation Technology
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          We developed a unique soil-washing technology (patent families US
          9108233B2 and EP 3153246B) in which{" "}
          <strong>EDTA and process waters are recycled</strong> in an imposed pH
          gradient within a closed process loop (Figure 1). To achieve cost
          efficiency, the <strong>ReSoil®</strong> technology uses inexpensive
          and waste materials. The alkalinity imposed by Ca-containing bases
          (e.g., lime) destabilizes EDTA chelates with toxic metals.³⁰ ³¹
          Consequently, Pb and other toxic metals (Me) are replaced in the EDTA
          chelate by Ca, and toxic metals precipitate from the reaction as
          insoluble hydroxides. The chelant in the recycled Ca-EDTA form is much
          less aggressive to soil than commonly used Na-EDTA.³² To shift the
          chemical equilibrium further towards product formation, we introduced
          alkaline adsorption of released toxic metals on polysaccharide
          materials (i.e., waste paper, R3C-OH) for the
          substitution/adsorption/precipitation reaction:³³
        </p>
        <p className="text-lg font-semibold text-center leading-relaxed mb-6 bg-gray-100 p-4 rounded-lg">
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
              <strong>Figure 1.</strong> The <strong>ReSoil®</strong>technology
              flowchart. The recovered EDTA and process waters are reused in a
              closed cycle. The washed soil is rinsed 3-times with recycled
              process water and at the end with water to compensate for
              difference in soil moisture between contaminated soil entering and
              remediation soil leaving the process.
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
          <strong>ReSoil®</strong> is an <strong>ex situ</strong> remediation
          technology – the contaminated soil is excavated and transported to the
          remediation facility and the remediated soil returned to the site of
          excavation. Soil washing by <strong>EDTA</strong> has shown to result
          in high multimetal (Pb, Zn, Cd, Cu) removal efficiency,³⁵ ³⁶
          especially from bioavailable soil fractions.³⁷ ³⁸ Up to{" "}
          <strong>95%</strong> of Pb removal from contaminated soils by EDTA has
          been documented by other research groups.³⁹ The{" "}
          <strong>ReSoil®</strong> process generates less than
          <strong>1.1%</strong> weight of solid wastes, no liquid wastes are
          produced. The technology was developed from laboratory / pilot-scale
          to demonstrational remediation plant with the capacity of{" "}
          <strong>6 tons of soil per day</strong> in the city of Prevalje in
          Meza Valley, Slovenia. The cost of remediation is{" "}
          <strong>136-186 $ per ton of soil</strong>, without profit.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Ecosystem services of EDTA remediated soil
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Realistically tended vegetable gardens with EDTA-remediated soil have
          supported the growth of <strong>vegetables</strong>,⁴⁰{" "}
          <strong>grasses</strong>
          and <strong>horticultural plants</strong> (Figure 3).³⁷ Pb uptake by
          plants was prevented or significantly reduced (Table 1). Remediation
          with high EDTA doses affected the soil <strong>C and N cycles</strong>
          , soil enzyme activities and the structure and abundance of soil
          microbial populations, especially{" "}
          <strong>arbuscular mycorrhizae</strong>. ⁴¹ ⁴² However, using simple
          and inexpensive revitalization measures, e.g., addition of{" "}
          <strong>compost</strong>, healthy un-polluted soil and commercial or
          indigenous microbial AM inoculum, restored microbial life.⁴¹ ⁴² ⁴³ The
          chemical and physical properties of remediated soil were mainly
          preserved.³⁴ ⁴⁴ The <strong>ReSoil®</strong> technology is fully
          consistent with criteria set by GRO concept.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="mt-6">
            <Image
              src="/technology-desc3.jpg"
              alt="Soil Remediation Process"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <p className="text-sm italic mt-4 text-center">
              <strong>Figure 3.</strong> Remediated soil is functional and
              possess fully restored quality.
            </p>
          </div>
          <div className="mt-6">
            <Image
              src="/technology-desc4.png"
              alt="Washing Process"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <p className="text-sm italic mt-4 text-center">
              <strong>Table 1.</strong> Concentrations of Pb in vegetables
              cultivated on original (1585 mg kg⁻¹Pb) and remediated calcareous
              soil (320 mg kg⁻¹Pb). Data in bold exceed the Pb limit for food
              safety. LOQ, limit of quantification.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-gray-100 p-4 ">
              References
            </AccordionTrigger>
            <AccordionContent className="bg-gray-100">
              <ol className="space-y-4 p-4">
                <li>
                  1. Cai M, McBride MB, Kaiming L (2016) Bioaccessibility of Ba,
                  Cu, Pb, and Zn in urban garden and orchard soils. Environ
                  Pollut 208A: 145-152.
                </li>
                <li>
                  2. Ryan JA, Scheckl KG, Berti WR, Brown SL, Casteel SW, Chaney
                  RL, Hallfrisch J, Doolan B, Grevatt P, Maddaloni M, Mosby D
                  (2004) Reducing children’s risk from lead in soil. Environ Sci
                  Technol 38: 18-24.
                </li>
                <li>
                  3. Kumpiene J, Brännvall E, Taraskevicius R, Aksamitauskas C,
                  Zinkute R (2011) Spatial variability of topsoil contamination
                  with trace elements in preschools in Vilnius, Lithuania. J
                  Geochem Explor 108: 15-20.
                </li>
                <li>
                  4. Aelion CM, Davis HT, Lawson AB, Cai B, McDermott S (2013)
                  Associations between soil lead concentrations and populations
                  by race/ethnicity and income-to-poverty ratio in urban and
                  rural areas. Environ Geochem Health 35: 1-12.
                </li>
                <li>
                  5. Nriagu JO, Pacyna JM (1988) Quantitative assessment of
                  worldwide contamination of air, water and soils by trace
                  metals. Nature 333: 134-139.
                </li>
                <li>
                  6. Ettler V (2016) Soil contamination near non-ferrous metal
                  smelters: A review. Applied Geochem 64: 56 74.
                </li>
                <li>
                  7. Pacyna JM, Pacyna EG, Aas W (2009) Changes of emissions and
                  atmospheric deposition of mercury, lead, and cadmium. Atmos
                  Environ 43: 117–127.
                </li>
                <li>
                  8. Zhang X, Yang L, Li Y, Li H, Wang W, Ge Q (2011) Estimation
                  of lead and zinc emissions from mineral exploitation based on
                  characteristics of lead/zinc deposits in China. Trans.
                  Nonferrous Met. Soc. China 21: 2513–2519.
                </li>
                <li>
                  9. Miranda ML, Kim D, Galeano MAO, Paul CJ, Hull AP, Morgan SP
                  (2007) The relationship between early childhood blood lead
                  levels and performance on end-of-grade tests. Environ Health
                  Perspect 115: 1242 1247.
                </li>
                <li>
                  10. Kranz BD, Simon DL, Leonardi BG (2004) The behavior and
                  routes of lead exposure in pregrasping infants. J Exp Anal
                  Environ Epidem 14: 300-311.
                </li>
                <li>
                  11. Mohaje R, Salehi MH, Mohammadi J, Emami MH, Azarm T (2013)
                  The status of lead and cadmium in soils of high prevalenct
                  gastrointestinal cancer region of Isfahan. J Res Med Sci 18:
                  210-214.
                </li>
                <li>
                  12. Clark HF, Hausladen DM, Brabander DJ (2008) Urban gardens:
                  Lead exposure, recontamination mechanisms, and implications
                  for remediation design. Environ Research 107: 312-319.
                </li>
                <li>
                  13. Järup L (2003) Hazards of heavy metal contamination.
                  British Med Bullet 68: 167-182.
                </li>
                <li>
                  14. https://www.pollutionsolutions online.com/news/soi... 15.
                  FAO. Global agriculture towards 2050. High-level expert forum.
                  Rome, 12-13 Oct. 2009.
                </li>
                <li>
                  16. Chen, J. 2007. Rapid urbanization in China: a real
                  challenge to soil protection and food security. Catena. 69:
                  1-15 17. Alaimo K, Reischl TM, Allen JO (2010) Community
                  gardening, neighborhood meetings, and social capital. J Commun
                  Psychol 38: 497–514.
                </li>
                <li>
                  18. Tei F, Benincasa P, Farneselli M, Caprai M (2010)
                  Allotment gardens for senior citizens in Italy: current status
                  and technical proposals. Acta Hortic 881: 91-96.
                </li>
                <li>
                  19. Cheng Z, Paltseva A, Li I, Morin T, Huot H, Egendorf S,
                  Zulema YR, Singh K, Lee L, Grinshtein M, Liu Y, Green K, Wai
                  W, Wazed B, Shaw R (2015) Trace Metal Contamination in New
                  York City Garden Soils. Soil Sci 180: 167-174.
                </li>
                <li>
                  20. EC No 1881/2006. Commission regulation of 19 December 2006
                  setting maximum levels for certain contaminants in foodstuffs.
                </li>
                <li>
                  21. Säumel I, Kotsyuk I, Hölscher M, Lenkereit C, Weber F,
                  Kowarik I (2012) How healthy is urban horticulture in high
                  traffic areas? Trace metal concentrations in vegetable crops
                  from plantings within inner city neighborhoods in Berlin,
                  Germany. Environ Pollut 165:124-32.
                </li>
                <li>
                  22. Delbecque N, Verdoodt A (2016) Spatial patterns of heavy
                  metal contamination by urbanization. J Environ Qual 45: 9-17.
                </li>
                <li>
                  23. Cundy AB, Bardos RP, Church A, Puschenreiter M,
                  Friesl-Hanl W, Muller I, Neu S, Mench M, Witters N,
                  Vangronsveld J (2013) Developing principles of sustainability
                  and stakeholder engagement for “gentle” remediation
                  approaches: The European contex. J Environ Managem 129:
                  283-291.
                </li>
                <li>
                  24. Robinson BH, Anderson CWN, Dickson NM (2015)
                  Phytoextraction: Where is the action? J Geochem Explor 151:
                  34-40.
                </li>
                <li>
                  25. Van der Ent A, Baker AJM, Reeves RD, Pollard AJ, Schat H
                  (2013) Hyperaccumulators of metal and metalloid trace
                  elements: Fact and fiction. Plant Soil 362: 319-334.
                </li>
                <li>
                  26. Friesl-Hanl W, Platzer K, Horak O, Gerzabek MH. (2009)
                  Immobilizing of Cd, Pb, and Zn contaminated arable soils close
                  to a former Pb/Zn smelter: a field study in Austria over 5
                  years. Environ Geochem Health 31: 581-594.
                </li>
                <li>
                  27. Ferraro A, Fabbricino M, van Hullebusch ED, Esposito G,
                  Pirozzi F (2016) Effect of soil / contamination
                  characteristics and process operational conditions on
                  aminopolycarboxylates enhanced soil washing for heavy metals
                  removal: A review. Rev Environ Sci Biotechnol 15: 111-145.
                </li>
                <li>
                  28. Udovic M, Lestan D (2012) EDTA and HCl leaching of
                  calcareous and acidic soils polluted with potentially toxic
                  metals: Remediation efficiency and soil impact. Chemosphere
                  88: 718-724.
                </li>
                <li>
                  29. Voglar D, Lestan D (2014) Chelant soil-washing technology
                  for metal-contaminated soil. Environ Technol 35: 1389-1400.
                </li>
                <li>
                  30. Pociecha M, Lestan D (2012) Novel EDTA and process water
                  recycling method after soil washing of multi-metal
                  contaminated soils. J Hazard Mater 201-202: 273-279.
                </li>
                <li>
                  31. Pociecha M, Lestan D (2012) Washing of metal contaminated
                  soil with EDTA and process water recycling. J Hazard Mater
                  235-236: 384-387.
                </li>
                32. Papassiopi N, Tambouris S, Kontopoulos A (1999). Removal of
                heavy metals from calcareous contaminated soils by EDTA
                Leaching. Water Air Soil Pollut 109: 1-15.
                <li>
                  33. Lestan D (2017) Novel chelant-based washing method for
                  soil contaminated with Pb and other metals: A pilot-scale
                  study. L Degrad Dev 28: 258 –2595.
                </li>
                <li>
                  34. Watts DB, Warren AD (2014) Sustainable uses of FDG gypsum
                  in agricultural systems: Introduction. J Environ Qual 43:
                  246-252.
                </li>
                <li>
                  35. Voglar D, Lestan D (2013) Pilot-scale washing of Pb, Zn
                  and Cd contaminated soil using EDTA and process water
                  recycling. Chemosphere 91: 76-82.
                </li>
                <li>
                  36. Voglar D, Lestan D (2010) Electrochemical separation and
                  reuse of EDTA after extraction of Cu contaminated soil. J
                  Hazard Matter 180: 152-157.
                </li>
                <li>
                  37. Jelusic M, Lestan D (2015) Remediation and reclamation of
                  soils heavily contaminated with toxic metals as a substrate
                  for greening with ornamental plants and grasses. Chemosphere
                  138: 1001-1007.
                </li>
                <li>
                  38. Udovic M, Lestan D (2009) Pb, Zn and Cd mobility,
                  availability and fractionation in aged soil remediated by EDTA
                  leaching. Chemosphere 74: 1367-1373.
                </li>
                <li>
                  39. Nowack B, Schulin R, Robinson BH (2006) Critical
                  assessment of chelant-enhanced metal phytoextraction. Env Sci
                  Technol 40: 5225-5232.
                </li>
                <li>
                  40. Jelusic M, Vodnik D, Macek I, Lestan D (2014) Effect of
                  EDTA washing of metal polluted garden soils. Part II: Can
                  remediated soil be used as a plant substrate? Sci Total
                  Environ 475: 142-52.
                </li>
                <li>
                  41. Jelusic M, Vodnik D, Lestan D (2014). Revitalization of
                  EDTA-remediated soil by fertilization and soil amendments.
                  Ecol Eng 73: 42 –438.
                </li>
                <li>
                  42. Kaurin A, Cernilogar Z, Lestan D (2018) Revitalisation of
                  metal-contaminated, EDTA-washed soil by addition of unpolluted
                  soil, compost and biochar: Effects on soil enzyme activity,
                  microbial community composition and abundance. Chemosphere
                  193: 726–736.
                </li>
                <li>
                  43. Maček I, Šibanc N, Kavšček M, Lestan D (2016)Diversity of
                  arbuscular mycorrhizal fungi in metal polluted and EDTA washed
                  garden soils before and after soil revitalization with
                  commercial and indigenous fungal inoculum. Ecol Eng 95:
                  330–339.
                </li>
                <li>
                  44. Zupanc V, Kastelec D, Lestan D, Grcman H (2014) Soil
                  physical characteristics after EDTA washing and amendment with
                  inorganic and organic additives. Environ Pollut 186: 56–62.
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}

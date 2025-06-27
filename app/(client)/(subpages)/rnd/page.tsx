"use client";

import {useState} from "react";
import Image from "next/image";
import SubpageTemplate from "@/app/components/SubpageTemplate";

export default function RnD() {
  return (
    <SubpageTemplate>
      <div className="container mx-auto px-6 md:px-16 lg:px-24 py-10">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6">SCIENTIFIC COOPERATION WITH UNIVERSITY AND RESEARCH INSTITUTES</h1>

        {/* Paragraph */}
        <p className="text-lg mb-8">
          Our organization is dedicated to advancing scientific research and innovation through collaborative efforts with prestigious universities
          and research institutes. By combining our expertise and resources, we strive to tackle complex challenges and drive forward cutting-edge
          discoveries. This synergy not only enhances our research capabilities but also contributes to the broader scientific community&quot;s
          knowledge base and technological advancements. Our commitment to these partnerships reflects our belief in the power of collective knowledge
          and collaboration.
        </p>

        {/* Full-Width Image */}
        <div className="relative w-full h-80 md:h-[500px] mb-12">
          <Image src="/rnd.jpg" alt="Scientific Cooperation" layout="fill" objectFit="cover" className="w-full h-full" />
        </div>

        {/* Scientific Papers Section */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">ReSoil® Scientific Papers</h2>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>MORALES ARTEAGA, Juan, Francisco, ZUPANC, Mojca, DULAR, Matevz, LESTAN, Domen, and KAURIN, Anela.</strong>{" "}
              <a href="https://doi.org/10.3390/ijerph20032544" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                Removal of Toxic Metals from Sewage Sludge by Acid Hydrolysis Coupled with EDTA Washing in a Closed-Loop Process
              </a>
              . International journal of environmental research and public health, 2023, 20(3), p.2544.
            </li>
            <li>
              <strong>MACEK, Irena, PINTARIC, Sara, SIBANC, Natasa, RAJNIS, Tatjana, KASTELEC, Damijana, LESTAN, Domen and SUHADOLC, Metka.</strong>{" "}
              <a href="https://doi.org/10.3389/fenvs.2022.978850" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                Plants play a crucial role in the development of soil fungal communities in the remediated substrate after EDTA washing of
                metal-contaminated soils
              </a>
              . Frontiers in Environmental Science, 2022, 10, p.978850.
            </li>
            <li>
              <strong>NOLLER, Christoph, FRIESL-HANL, Wolfgang, HOOD-NOWOTNY, Rebecca and WATRZINGER, Andrea.</strong>{" "}
              <a href="https://doi.org/10.3390/toxics10110652" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                Toxics, 2022, 10(11), p.652.
              </a>
            </li>
            <li>
              <strong>MORALES-ARTEAGA, Juan, Francisco, KAURIN, Anela and LESTAN, Domen.</strong>{" "}
              <a
                href="https://doi.org/10.1016/j.chemosphere.2022.135917"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                Removal of toxic metals from sewage sludge by EDTA in a closed-loop washing process
              </a>
              . Chemosphere, 2022, p.135917.
            </li>
            <li>
              <strong>MORALES-ARTEAGA, Juan, Francisco, GLUHAR, Simon, KAURIN, Anela and LEŠTAN, Domen.</strong>{" "}
              <a
                href="https://doi.org/10.1016/j.envpol.2022.118656"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                Simultaneous removal of arsenic and toxic metals from contaminated soil: Laboratory development and pilot scale demonstration
              </a>
              . Environmental Pollution, 2022, 294, p.118656.
            </li>
            <li>
              <strong>NOLLER, Christoph, FRIESL-HANL, Wolfgang, HOOD-NOWOTNY, Rebecca, PUSCHENREITER, Markus and WATRZINGER, Andrea.</strong>{" "}
              <a
                href="https://link.springer.com/article/10.1007/s11270-021-05356-0"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                Effect of Chelant-Based Soil Washing and Post-Treatment on Pb, Cd, and Zn Bioavailability and Plant Uptake
              </a>
              . Water, Air, & Soil Pollution, 2021, 232(10), pp.1-14.
            </li>
            <li>
              <strong>GLUHAR, Simon, KAURIN, Anela, VODNIK, Dominik, KASTELEC, Damjana, ZUPANC, Vesna and LEŠTAN, Domen.</strong>{" "}
              <a
                href="https://doi.org/10.1016/j.scitotenv.2021.148521"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                Demonstration gardens with EDTA-washed soil. Part III: Plant growth, soil physical properties and production of safe vegetables
              </a>
              . Science of The Total Environment, 2021, p.148521.
            </li>
            <li>
              <strong>KAURIN, Anela, GLUHAR, Simon, MAČEK, Irena, KASTELEC, Damjana and LEŠTAN, Domen.</strong>{" "}
              <a
                href="https://doi.org/10.1016/j.scitotenv.2021.148522"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                Demonstrational gardens with EDTA-washed soil. Part II: Soil quality assessment using biological indicators
              </a>
              . Science of The Total Environment, 2021, p.148522.
            </li>
            <li>
              <strong>GLUHAR, Simon, KAURIN, Anela, FINŽGAR, Neža, GERL, Marko, KASTELEC, Damjana and LEŠTAN, Domen.</strong>{" "}
              <a
                href="https://doi.org/10.1016/j.scitotenv.2021.149060"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                Demonstrational gardens with EDTA-washed soil. Part I: Remediation efficiency, effect on soil properties and toxicity hazards
              </a>
              . Science of The Total Environment, 2021, p.149060.
            </li>
            <li>
              <strong>JEŽ, Erika, BRAVO, Carlo, LESTAN, Domen, GLUHAR, Simon, MARTIN-NETO, Ladislau, De NOBILI, Maria and CONTIN, Marco.</strong>{" "}
              <a
                href="https://link.springer.com/article/10.1007%2Fs11356-021-15406-z"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                Changes in Organic Matter Composition Caused by EDTA Washing of two Soils Contaminated with Toxic Metals
              </a>
              . Environmental Science and Pollution Research, 2021.
            </li>
            <li>
              <strong>KAURIN, Anela, GLUHAR, Simon, TILIKJ, Natasha, LEŠTAN, Domen.</strong>{" "}
              <a
                href="https://www.sciencedirect.com/science/article/abs/pii/S0045653520318683"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                Soil washing with biodegradable chelating agents and EDTA: Effect on soil properties and plant growth
              </a>
              . Chemosphere, 2020, 260, 127673.
            </li>
            <li>
              <strong>GLUHAR, Simon, KAURIN, Anela, LEŠTAN, Domen.</strong>{" "}
              <a
                href="https://www.sciencedirect.com/science/article/abs/pii/S0045653520314193"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                Soil washing with biodegradable chelating agents and EDTA: Technological feasibility, remediation efficiency and environmental
                sustainability
              </a>
              . Chemosphere, 2020, vol. 257, 127226.
            </li>
            <li>
              <strong>GLUHAR, Simon, JEŽ, Erika, LEŠTAN, Domen.</strong>{" "}
              <a
                href="http://www.envit.si/uploads/JKlRWLtA/PagesfromChemosphere2019Useofzerovalentironforemissioncurbing.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                The use of zero-valent Fe for curbing toxic emissions after EDTA-based washing of Pb, Zn and CD contaminated calcareous and acidic
                soil
              </a>
              . Chemosphere, 2018, vol. 215, p-482-489.
            </li>
            <li>
              <strong>KAURIN, Anela and LEŠTAN, Domen.</strong>{" "}
              <a
                href="https://doi.org/10.1016/j.chemosphere.2017.11.082"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                Multi-substrate induced microbial respiration, nitrification potential and enzyme activities in metal-polluted, EDTA-washed soils
              </a>
              . Environmental pollution, 2018, vol 243, p- 238-245.
            </li>
            <li>
              <strong>KAURIN, Anela, CERNILOGAR, Zarja, LEŠTAN Domen.</strong>{" "}
              <a
                href="http://www.envit.si/uploads/orrZSlYW/PagesfromChemosphere2018vol193726-736.Revitalisationbycompostsoilandbiocharaddition.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                Revitalisation of metal-contaminated, EDTA-washed soil by addition of unpolluted soil, compost and biochar: Effects on soil enzyme
                activity, microbial community composition and abundance
              </a>
              . Chemosphere, 2017, vol 193, p- 726-736.
            </li>
            <li>
              <strong>LEŠTAN, Domen.</strong>{" "}
              <a
                href="http://www.envit.si/uploads/Fg8g7duP/PagesfromLanddegraddevelop2017.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                Novel chelant-based washing method for soil contaminated with Pb and other metals: A pilot-scale study
              </a>
              . Land Degrad Develop., 2017, vol. 28,p. 2585-2595.
            </li>
          </ul>
        </section>

        {/* Conference Contributions Section */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Scientific Conference Contributions</h2>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>GLUHAR, Simon, KAURIN, Anela, VOGLAR, Grega E., FINŽGAR, Neža, LEŠTAN, Domen.</strong> Case studies of ReSoil® – novel
              technology for efficient and sustainable removal of heavy metals from contaminated soils. V: ICOBTE & ICHMET 2023: book of abstracts:
              1st Joint International Conference of Biochemistry of Trace Elements & 21st International Conference of Heavy Metals: 6-10 September
              2023, Wuppertal: Clean environment. Human health. Our future. [S. l.: s. n., 2023]. p. 443.{" "}
              <a
                href="https://icobte-ichmet-2023.com/custom/media/ICOBTE23/Abstract_Book_Final_3.pdf"
                className="text-blue-500 "
                target="_blank"
                rel="noopener noreferrer">
                Link
              </a>
            </li>
            <li>
              <strong>LEŠTAN, Domen, GLUHAR, Simon, KAURIN, Anela, VOGLAR, Grega E.</strong> Efficient and sustainable removal of toxic metals and
              metalloids from soils with ReSoil® technology. V: Open science inspires: 2023 ASA, CSSA, SSSA International annual meeting: October 29
              - November 1, 2023, St. Louis, Missouri, and limited virtual. Madison: American Society of Agronomy.{" "}
              <a
                href="https://scisoc.confex.com/scisoc/2023am/meetingapp.cgi/Paper/153960"
                className="text-blue-500 "
                target="_blank"
                rel="noopener noreferrer">
                Link
              </a>
            </li>
            <li>
              <strong>GLUHAR, Simon, KAURIN, Anela, MORALES ARTEAGA, Juan Francisco, LEŠTAN, Domen</strong> Simultaneous removal of arsenic and toxic
              metals from contaminated soil: Laboratory development and pilot scale demonstration. V: ICOBTE & ICHMET 2023: Book of abstracts: 1st
              Joint International Conference of Biochemistry of Trace Elements & 21st International Conference of Heavy Metals: 6-10 September 2023,
              Wuppertal: Clean environment. Human health. Our future. [S. l.: s. n., 2023]. p. 148.{" "}
              <a
                href="https://icobte-ichmet-2023.com/custom/media/ICOBTE23/Abstract_Book_Final_3.pdf"
                className="text-blue-500 "
                target="_blank"
                rel="noopener noreferrer">
                Link
              </a>
            </li>
            <li>
              <strong>SHEN, Jian, VOGLAR, Grega E., GLUHAR, Simon, KAURIN, Anela, LEŠTAN, Domen</strong> Current trends and Chinese perspective of the
              soil remediation methods using remediation trains. V: DI MARCELLO, Sara (ur.). L&#39;innovazione per la sostenibilità ambientale
              nell&#39;epoca della multitransizione : RemTech Expo 2023 : Libro degli abstract. Roma: Consiglio Nazionale delle Ricerche, 2023. p.
              514-517. ISBN 978-88-8080-574-8.
            </li>
            <li>
              <strong>LEŠTAN, Domen, MORALES ARTEAGA, Juan Francisco, GLUHAR, Simon, KAURIN, Anela</strong> Simultaneous removal of toxic metalloids
              and metals from soil using ReSoil® technology. V: DI MARCELLO, Sara (ur.). L&#39;innovazione per la sostenibilità ambientale
              nell&#39;epoca della multitransizione : RemTech Expo 2023 : Libro degli abstract. Roma: Consiglio Nazionale delle Ricerche, 2023. p.
              475-477. ISBN 978-88-8080-574-8.
            </li>
            <li>
              <strong>LEŠTAN, Domen, VOGLAR, Grega E.</strong> Can we clean up contaminated soils? : 7th Annual Urban Soils Symposium, Metabolism of
              Cities. Developing mutualistic relationships between built & natural systems. November 16-17, 2022, New York.{" "}
              <a href="https://www.facebook.com/NYCUSI/photos/a.175889624" className="text-blue-500 " target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </li>
            <li>
              <strong>LEŠTAN, Domen, VOGLAR, Grega E., GLUHAR, Simon, KAURIN, Anela, FINŽGAR, Neža</strong> ReSoil - novel technology for efficient
              and sustainable removal of heavy metals from contaminated soils. V: Communication and public engagement for healthy people and a healthy
              planet: 2022 ASA, CSSA, SSSA International annual meeting: November 6-9, 2022, Baltimore, Maryland and limited virtual. Madison:
              American Society of Agronomy.{" "}
              <a href="https://scisoc.confex.com/scisoc/2022am/meetingapp" className="text-blue-500 " target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </li>
            <li>
              <strong>VOGLAR, Grega E., GLUHAR, Simon, KAURIN, Anela, LEŠTAN, Domen</strong> Large-scale demonstration of ReSoil, a sustainable
              technology for soil washing of metal contaminated soil. In: SUITMA 11, in Berlin (Germany), September 5-9, 2022.
            </li>
            <li>
              <strong>GLUHAR, Simon, VOGLAR, Grega E., FINŽGAR, Neža, GERL, Marko, LEŠTAN, Domen</strong> Large-scale demonstration of RESOIL, a
              sustainable technology for soil washing of metal contaminated soil: Remtech EXPO international event, 20.-24.09. 2021.{" "}
              <a href="https://www.facebook.com/watch/?v=603552011096332" className="text-blue-500 " target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </li>
            <li>
              <strong>
                GLUHAR, Simon, KAURIN, Anela, ZUPANC, Vesna, VODNIK, Dominik, MAČEK, Irena, KASTELEC, Damijana, FINŽGAR, Neža, GERL, Marko, LEŠTAN,
                Domen
              </strong>{" "}
              <a href="" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                Large-scale demonstration of ReSoil, a sustainable technology for soil washing of metal contaminated soil.
              </a>
              In: EUROSOIL 2020, in Geneva (Switzerland), August 23-27, 2021.
            </li>
            <li>
              <strong>KAMMERER, Gerhard, ZUPANC, Vesna, GLUHAR, Simon, LEŠTAN, Domen</strong>{" "}
              <a
                href="https://meetingorganizer.copernicus.org/EGU2017/EGU2017-16530.pdf"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer">
                Effect of soil washing for lead and zinc removal on soil hydraulic properties
              </a>
              . In: European Geosciences Union, General Assembly 2017, Vienna, Austria, 23-28 April 2017. München: European Geosciences Union, 2017.
              Geophysical research abstracts, vol. 19. ISSN 1607-7962.
            </li>
            <li>
              <strong>GLUHAR, Simon, LEŠTAN, Domen</strong>{" "}
              <a
                href="https://icobte.github.io/abstracts/Abstracts/S12/535-Gluhar-S-S12.docx.html"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer">
                Combined EDTA soil washing and stabilization of residual toxic metals
              </a>
              . In: Abstracts. 14th International Conference on the Biogeochemistry of Trace Elements, 16-20 July, 2017 - ETH Zurich, Switzerland.
            </li>
            <li>
              <strong>GLUHAR, Simon, JEŽ, Erika, LEŠTAN, Domen</strong>{" "}
              <a
                href="http://liferesoil.envit.si/wp-content/uploads/ZBORNIK-RESOIL1.pdf"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer">
                Elimination of harmful emissions from remediated soil by adding zero valant Fe = Odprava škodljivih emisij iz remediranih tal z
                dodajanjem nič valentnega Fe
              </a>
              . In: FINŽGAR, Neža (ed.). Demonstracija inovativne tehnologije pranja s toksičnimi kovinami močno onesnaženih vrtnih tal : zbornik
              konference = Demonstration of innovative soil washing technology for removal of toxic metals from highly contaminated garden soil :
              proceedings of the conference. Ljubljana: Envit, 2018. Str. 60-62, ilustr. ISBN 978-961-288-861-9.
            </li>
            <li>
              <strong>GLUHAR, Simon, JEŽ, Erika, LEŠTAN, Domen</strong>{" "}
              <a href="https://plus.si.cobiss.net/opac7/bib/COBIB/9010553" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                Curbing of toxic emissions after EDTA-based washing of Pb, Zn and Cd contaminated calcareous and acidic soil
              </a>
              . In: 2018 ICHMET. 19th International Conference on Heavy Metals in the Environment, July 22-25, 2018 Athens, GA USA. Athens: University
              of Georgia, 2018. No. 163.
            </li>
            <li>
              <strong>GLUHAR, Simon, LEŠTAN, Domen</strong>{" "}
              <a
                href="https://icobte.github.io/abstracts/Abstracts/S12/535-Gluhar-S-S12.docx.html"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer">
                Testing biodegradable chelators in realistic soil-washing process conditions: feasibility, efficiency and effect on soil properties
              </a>
              . In: ICOBTE 2019. 15th International Conference on the Biogeochemistry of Trace Elements (ICOBTE 2019) in Nanjing, May 5th - 9th, 2019.
              [S.l.: S.n.], 2019. p. 1.
            </li>
            <li>
              <strong>LEŠTAN, Domen, GLUHAR, Simon, FINŽGAR, Neža, GERL, Marko</strong>{" "}
              <a
                href="https://icobte.github.io/abstracts/Abstracts/S12/71-Lestan-D-S12.docx.html"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer">
                Large-scale demonstration of novel, entirely sustainable chelator-based washing of heavy metals contaminated soils
              </a>
              . In: ICOBTE 2019. 15th International Conference on the Biogeochemistry of Trace Elements (ICOBTE 2019) in Nanjing, May 5th - 9th, 2019.
              [S.l.: S.n.], 2019. p. 1.
            </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Projects</h2>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>
                <a href="https://www.envit.si/uploads/3NfuhiZ6/ProjectCopperinVineyards-shortinfo.pdf" className="text-blue-500">
                  Remediation of Copper-Contaminated Soils in a Closed-Loop Process as a Sustainable Solution in Viticulture
                </a>
              </strong>
              <br />
              <strong>Financer:</strong> Slovenian Research and Innovation Agency
              <br />
              <strong>Duration:</strong> 01.01.2025 - 31.12.2027
            </li>
            <li>
              <strong>
                <a href="https://cordis.europa.eu/project/id/101112723" className="text-blue-500">
                  Achieving Remediation And GOverning Restoration of contaminated soils Now - ARAGORN
                </a>
              </strong>
              <br />
              <strong>Financer:</strong> ARAGORN has received funding from HORIZON-RIA - HORIZON Research and Innovation Actions (2021-2027) under
              grant agreement No 101112723
              <br />
              <strong>Duration:</strong> 01.10.2023 – 30.09.2027
            </li>
            <li>
              <strong>
                <a href="http://www.envit.si/uploads/Im8mGA5d/Objavazaspletnostran_ProjektV1-2280.pdf" className="text-blue-500">
                  Remediation with toxic metals and metalloids and organic pollutants of contaminated soil at a model military shooting range -
                  demonstration and recommendations for further measures
                </a>
              </strong>
              <br />
              <strong>Financer:</strong> Ministry of Defence of the Republic of Slovenia & Slovenian Research and Innovation Agency
              <br />
              <strong>Duration:</strong> 01.10.2022 – 01.10.2024
            </li>
            <li>
              <strong>
                <a href="https://cris.cobiss.net/ecris/si/sl/project/18649" className="text-blue-500">
                  Remediation of soil contaminated with toxic metals, metalloids and organic pollutants
                </a>
              </strong>
              <br />
              <strong>Financer:</strong> Slovenian Research and Innovation Agency
              <br />
              <strong>Duration:</strong> 01.10.2021 – 30.09.2023
            </li>
            <li>
              <strong>
                <a href="https://cordis.europa.eu/project/id/776838" className="text-blue-500">
                  POlluted SIte DecontaminatiON - Pre-commercial procurement (PCP)
                </a>
              </strong>
              <br />
              <strong>Financer:</strong> European Union&#39;s Horizon 2020 research and innovation programme under grant agreement N. 776838.
              <br />
              <strong>Duration:</strong> 01.02.2018 – 28.08.2021
            </li>
            <li>
              <strong>
                <a
                  href="https://www.sicris.si/public/jqm/prj.aspx?lang=eng&opdescr=search&opt=2&subopt=400&code1=prj&code2=auto&psize=1&hits=1&page=1&count=&search_term=1763&id=12501&slng=&order_by="
                  className="text-blue-500">
                  Gardens with remediated soils: hazard mitigation and safe food production
                </a>
              </strong>
              <br />
              <strong>Co-financer:</strong> Slovenian Research and Innovation Agency
              <br />
              <strong>Duration:</strong> 01.06.2017 – 31.05.2020
            </li>
            <li>
              <strong>
                <a
                  href="https://www.sicris.si/public/jqm/prj.aspx?lang=eng&opdescr=search&opt=2&subopt=400&code1=prj&code2=auto&psize=1&hits=1&page=1&count=&search_term=1763&id=9300&slng=&order_by="
                  className="text-blue-500">
                  Green and sustainable remediation of contaminated soils for urban land use
                </a>
              </strong>
              <br />
              <strong>Co-financer:</strong> Slovenian Research and Innovation Agency
              <br />
              <strong>Duration:</strong> 01.07.2014 – 30.06.2017
            </li>
            <li>
              <strong>Life ReSoil: </strong>
              <strong>
                <a href="http://liferesoil.envit.si/" className="text-blue-500">
                  Demonstration of innovative soil washing technology for removal of toxic metals from highly contaminated garden soil
                </a>
              </strong>
              <br />
              <strong>Co-financer:</strong> LIFE, reference: LIFE12 ENV/SI/000969
              <br />
              <strong>Duration:</strong> 01.07.2013 – 31.12.2017
            </li>
            <li>
              <strong>
                <a
                  href="https://www.sicris.si/public/jqm/prj.aspx?lang=eng&opdescr=search&opt=2&subopt=400&code1=prj&code2=auto&psize=1&hits=1&page=1&count=&search_term=1763&id=8698&slng=&order_by="
                  className="text-blue-500">
                  Control of harmful cyanobacteria bloom in fresh-water bodies
                </a>
              </strong>
              <br />
              <strong>Co-financer:</strong> Slovenian Research and Innovation Agency
              <br />
              <strong>Duration:</strong> 01.08.2013 – 31.07.2016
            </li>
            <li>
              <strong>
                <a
                  href="http://www.sicris.si/public/jqm/prj.aspx?lang=eng&opdescr=search&opt=2&subopt=400&code1=cmn&code2=auto&psize=1&hits=1&page=1&count=&search_term=V4-1648&id=6686&slng=&order_by="
                  className="text-blue-500">
                  Quality and functioning of contaminated garden soil as a plant substrate after remediation
                </a>
              </strong>
              <br />
              <strong>Co-financer:</strong> Slovenian Research and Innovation Agency
              <br />
              <strong>Duration:</strong> 01.01.2010 – 30.04.2013
            </li>
            <li>
              <strong>
                <a
                  href="https://www.sicris.si/public/jqm/prj.aspx?lang=eng&opdescr=search&opt=2&subopt=400&code1=cmn&code2=auto&psize=1&hits=1&page=1&count=&search_term=univerza%20na%20primorskem&id=7122&slng=&order_by="
                  className="text-blue-500">
                  Remediation model for garden soils in Upper Meža valley
                </a>
              </strong>
              <br />
              <strong>Co-financer:</strong> Slovenian Research and Innovation Agency
              <br />
              <strong>Duration:</strong> 01.07.2011 – 30.06.2013
            </li>
            <li>
              <strong>
                <a
                  href="https://www.sicris.si/public/jqm/prj.aspx?lang=eng&opdescr=search&opt=2&subopt=410&code1=prj&code2=auto&psize=1&hits=1&page=1&count=&search_term=1763&id=6505&slng=&order_by=&signific=home&period=final&year=2013"
                  className="text-blue-500">
                  Development of electrolytic cell for recycling of EDTA in solution after the washing of polluted soil
                </a>
              </strong>
              <br />
              <strong>Co-financer:</strong> The Slovene Enterprise Fund
            </li>
          </ul>
        </section>
      </div>
    </SubpageTemplate>
  );
}

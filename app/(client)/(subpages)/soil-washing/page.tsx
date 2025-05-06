import SubpageTemplate from '@/app/components/SubpageTemplate';
import ImageGallery from "@/app/components/image-gallery";
import GallerySlider from "@/app/components/GallerySlider";

export default function SoilWashing() {
  const stationaryImages = [
    { asset: { url: "/washing/1.jpg" } },
    { asset: { url: "/washing/2.jpeg" } },
    { asset: { url: "/washing/3.jpeg" } },
    { asset: { url: "/washing/4.jpg" } },
    { asset: { url: "/washing/5.jpg" } },
    { asset: { url: "/washing/6.jpeg" } },
    { asset: { url: "/washing/7.jpg" } },
    { asset: { url: "/washing/8.jpg" } },
  ];

  const mobileImages = [
    { asset: { url: "/demo-resoil-plant/demo1.png" } },
    { asset: { url: "/demo-resoil-plant/demo2.jpg" } },
    { asset: { url: "/demo-resoil-plant/demo3.jpeg" } },
    { asset: { url: "/demo-resoil-plant/demo4.jpg" } },
    { asset: { url: "/demo-resoil-plant/demo5.jpg" } },
    { asset: { url: "/demo-resoil-plant/demo6.jpg" } },
    { asset: { url: "/demo-resoil-plant/demo7.jpeg" } },
    { asset: { url: "/demo-resoil-plant/demo8.jpg" } },
    { asset: { url: "/demo-resoil-plant/demo9.jpg" } },
  ];

  return (
    <SubpageTemplate>
      <div className="container mx-auto px-6 md:px-16 lg:px-24 py-10">
        {/* ReSoil® Stationary Remediation Plant Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">ReSoil® Stationary Remediation Plant</h2>
          <p className="text-lg mb-6">
            The <strong>soil-washing plant</strong> with <strong>ReSoil</strong>{" "}
            technology was constructed in city of Prevalje which sits in a{" "}
            <strong>contaminated area</strong> of Meža Valley, Slovenia. The
            mission of this facility is to prove the <strong>scalability</strong>{" "}
            of ReSoil technology. With the capacity of <strong>6 t/day</strong> it
            enables demonstrational remediation of local sites as well as
            demonstration of ReSoil technology to stakeholders. The{" "}
            <strong>Technology Readiness Level</strong> of plant operation is{" "}
            <strong>TRL 7</strong> (EU, NASA methodology).
          </p>
          <p className="text-lg mb-8">
            The permit for construction of this soil washing plant was granted by
            Slovenian Environmental Protection Agency in 2017. The permit was
            based on proofs of <strong>ReSoil</strong>&reg; closed process cycles
            operation and <strong>zero-emissions</strong>. Construction of the
            plant was co-financed from EU LIFE + Programme with 50% contribution
            of 1.1 M EUR. The operating permit for this soil-washing plant was
            obtained in July 2018. The <strong>ReSoil</strong>&reg; technology
            uses common process equipment such are <strong>sieves</strong>,{" "}
            <strong>mixing vessels</strong> and <strong>filter presses</strong>.
            The remediation process can be controlled manually and the innovative
            part of <strong>ReSoil</strong>&reg; technology, i.e. in press soil
            rinsing, <strong>EDTA</strong> and process water recycling, can also
            be controlled automatically by the <strong>SCADA</strong>{" "}
            (supervisory, control and data acquisition) system.
          </p>
          <GallerySlider images={stationaryImages} />
        </div>

        {/* Mobile Pilot Remediation Plant with ReSoil® technology Section */}
        <div className="mt-16 mb-12">
          <h2 className="text-2xl font-bold mb-6">Mobile Pilot Remediation Plant with ReSoil® technology</h2>
          <p className="text-lg mb-8 leading-relaxed">
            Small mobile <strong>ReSoil®</strong> plant (up to 300 kg of soil /
            day) was constructed in mobile containers for POSIDON PCP H2020
            project. In this way we were able to investigate the future lay-up of
            the machinery, installations, and realistically simulate{" "}
            <strong>ReSoil®</strong> working process. The demo{" "}
            <strong>ReSoil®</strong> plant enables 3 soil remediation batches per
            day with the average time for single remediation batch less than 3h.{" "}
            <strong>ReSoil®</strong> technology does not generate wastewaters and
            other emissions, and preserves soil quality and soil properties as
            plant substrate.
          </p>
          <GallerySlider images={mobileImages} />
        </div>
      </div>
    </SubpageTemplate>
  );
}

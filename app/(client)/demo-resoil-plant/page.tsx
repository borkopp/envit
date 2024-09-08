import GallerySlider from "@/app/components/GallerySlider";

export default function DemoResoilPlant() {
  const galleryImages = [
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
    <div className="container mx-auto px-6 md:px-16 lg:px-24 py-10">
      <h1 className="text-3xl font-semibold text-center mb-10">
        Demo ReSoil Plant
      </h1>

      <section className="mb-12">
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
      </section>

      <section className="mb-12">
        <GallerySlider images={galleryImages} />
      </section>
    </div>
  );
}

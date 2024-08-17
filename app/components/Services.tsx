const ServiceItem = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <div className="text-green-500 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: "🌱",
      title: "Soil Remediation",
      description:
        "We offer advanced soil remediation techniques to restore contaminated land and improve soil health.",
    },
    {
      icon: "🔬",
      title: "Environmental Consulting",
      description:
        "Our expert consultants provide guidance on environmental regulations and sustainable practices.",
    },
    {
      icon: "🌿",
      title: "Green Technology",
      description:
        "We develop and implement innovative green technologies for various environmental challenges.",
    },
    {
      icon: "🌍",
      title: "Ecosystem Restoration",
      description:
        "Our team specializes in restoring damaged ecosystems and promoting biodiversity.",
    },
    {
      icon: "📊",
      title: "Environmental Impact Assessment",
      description:
        "We conduct thorough assessments to evaluate the environmental impact of projects and activities.",
    },
    {
      icon: "🚰",
      title: "Water Management",
      description:
        "Our services include sustainable water management solutions for both urban and rural areas.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100" id="service">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of environmental services to help create a
            sustainable future. Our expert team is dedicated to providing
            innovative solutions for various environmental challenges.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

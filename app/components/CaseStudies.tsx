import Image from "next/image";
import Link from "next/link";

const CaseStudyItem = ({
  image,
  date,
  title,
  content,
}: {
  image: string;
  date: string;
  title: string;
  content: string;
}) => (
  <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
    <Image
      className="w-full h-48 object-cover mb-4"
      src={image}
      alt={title}
      width={400}
      height={200}
    />
    <p className="text-white bg-gray-800 px-4 py-2 text-sm w-fit mb-2">
      {date}
    </p>
    <h4 className="text-xl text-black font-semibold mb-2">{title}</h4>
    <p className="text-gray-700 mb-4">{content}</p>
    <Link
      href="#"
      className="inline-block bg-green-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-green-600 transition duration-300"
    >
      View Details
    </Link>
  </div>
);

const CaseStudies = () => {
  const caseStudies = [
    {
      image: "/blog1.jpeg",
      date: "Nov 2017",
      title: "Remediation case #1",
      content:
        "Construction of vegetable garden with raised beds with remediated soil from City of Prevalje, Meza Valley, Slovenia",
    },
    {
      image: "/blog2.jpeg",
      date: "Aug 2018",
      title: "Remediation case #2",
      content:
        "Construction of vegetable garden with raised beds with remediated soil from city of Arnoldstein, Austria",
    },
    {
      image: "/blog3.png",
      date: "Oct 2021",
      title: "Remediation case #3",
      content:
        "Z1-3196 Postdoc project: Remediation of soil contaminated with toxic metals, metalloids and organic pollutants",
    },
    {
      image: "/blog4.jpeg",
      date: "Jan 2022",
      title: "Remediation case #4",
      content:
        "Finished after Phase 2 Z1-3196 Postdoc project: Remediation of soil contaminated with toxic metals, metalloids and organic pollutants",
    },
  ];

  return (
    <section className="py-16 bg-white" id="case-studies">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl text-gray-800 font-bold mb-4">
            Case Studies
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {caseStudies.map((study, index) => (
            <CaseStudyItem key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

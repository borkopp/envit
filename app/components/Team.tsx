import Image from "next/image";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const TeamMember = ({
  image,
  name,
  role,
  social,
}: {
  image: string;
  name: string;
  role: string;
  social: { facebook: string; twitter: string; linkedin: string };
}) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
    <div className="bg-white rounded-lg overflow-hidden shadow-md relative group">
      <Image
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
        width={400}
        height={200}
      />
      <div className="p-4">
        <h3 className="text-xl text-black font-semibold mb-1">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
      <div className="absolute inset-0 bg-green-500 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href={social.facebook}
          className="text-white mx-2 hover:text-gray-200"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href={social.twitter}
          className="text-white mx-2 hover:text-gray-200"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href={social.linkedin}
          className="text-white mx-2 hover:text-gray-200"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      image: "/about1.jpeg",
      name: "Domen Leštan",
      role: "CEO & CTO",
      social: {
        facebook: "https://facebook.com/domen",
        twitter: "https://twitter.com/domen",
        linkedin: "https://linkedin.com/in/domen",
      },
    },

    {
      image: "/about2.jpeg",
      name: "Neža Finžgar",
      role: "CAO",
      social: {
        facebook: "https://facebook.com/domen",
        twitter: "https://twitter.com/domen",
        linkedin: "https://linkedin.com/in/domen",
      },
    },
    {
      image: "/about3.png",
      name: "Dragan Martinovič",
      role: "COO",
      social: {
        facebook: "https://facebook.com/domen",
        twitter: "https://twitter.com/domen",
        linkedin: "https://linkedin.com/in/domen",
      },
    },
    {
      image: "/about4.png",
      name: "Grega E. Voglar",
      role: "Bussines Developer and International Project Coordinator",
      social: {
        facebook: "https://facebook.com/domen",
        twitter: "https://twitter.com/domen",
        linkedin: "https://linkedin.com/in/domen",
      },
    },
  ];

  return (
    <section className="py-16 bg-gray-100" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-800 font-bold mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of experts who are passionate about creating
            a sustainable future through innovative environmental solutions.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

import Image from "next/image";
import {FaFacebook, FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

interface TeamProps {
  backgroundColor?: string;
}

const TeamMember = ({
  image,
  name,
  role,
  social,
  aosdelay,
}: {
  image: string;
  name: string;
  role: string;
  social: {facebook?: string; twitter?: string; linkedin?: string};
  aosdelay: number;
}) => (
  <div data-aos="fade-up" data-aos-delay={aosdelay} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
    <div className="bg-white rounded-lg overflow-hidden shadow-md relative group">
      <Image src={image} alt={name} className="w-full h-64 object-cover" width={400} height={200} />
      <div className="p-4 h-[120px]">
        <h3 className="text-xl text-black font-semibold mb-1">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
      <div className="absolute inset-0 bg-green-700 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {social.facebook && (
          <a href={social.facebook} className="text-white mx-2 hover:text-gray-200">
            <FaFacebook size={24} />
          </a>
        )}
        {social.twitter && (
          <a href={social.twitter} className="text-white mx-2 hover:text-gray-200">
            <FaXTwitter size={24} />
          </a>
        )}
        {social.linkedin && (
          <a href={social.linkedin} className="text-white mx-2 hover:text-gray-200">
            <FaLinkedin size={24} />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Team: React.FC<TeamProps> = ({backgroundColor = "bg-gray-100"}) => {
  const teamMembers = [
    {
      image: "/team/domenlestan.jpg",
      name: "Prof. Domen Leštan",
      role: "CEO, CTO & Co-founder",
      social: {
        twitter: "https://twitter.com/envitltd",
        linkedin: "https://www.linkedin.com/in/domen-lestan-083093b",
      },
      aosdelay: 0,
    },

    {
      image: "/team/neza.jpeg",
      name: "Neža Finžgar, PhD",
      role: "Co-founder & Finance",
      social: {
        twitter: "https://twitter.com/envitltd",
        linkedin: "https://www.linkedin.com/in/domen-lestan-083093b",
      },
      aosdelay: 0,
    },

    {
      image: "/team/grega.jpg",
      name: "Grega E. Voglar, PhD",
      role: "Business Developer & Project Manager",
      social: {
        twitter: "https://x.com/yamamaartmuzik",
        linkedin: "https://www.linkedin.com/in/grega-e-voglar-bab60963",
      },
      aosdelay: 300,
    },

    {
      image: "/team/simongluhar.jpg",
      name: "Simon Gluhar, PhD",
      role: "Researcher & ReSoil® developer",
      social: {
        twitter: "https://twitter.com/envitltd",
        linkedin: "https://www.linkedin.com/in/neza-finzgar-6b791b18",
      },
      aosdelay: 100,
    },
    {
      image: "/team/anelakaurin.jpg",
      name: "Anela Kaurin, PhD",
      role: "Project Manager & Researcher",
      social: {
        linkedin: "https://www.linkedin.com/in/dragan-martinovic-3974335",
      },
      aosdelay: 200,
    },
  ];

  return (
    <section className={`py-16 ${backgroundColor}`} id="team">
      <div className="container mx-auto px-4">
      <div className="space-y-4 items-center text-center mb-14">
          <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Team</h3>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl">The ENVIT Core Team</h2>
          <p className="text-neutral-500 text-[1rem] max-w-2xl mx-auto my-4 text-center relative">
            Meet our dedicated team of experts who are passionate about creating a sustainable future through innovative environmental solutions.
          </p>
        </div>
        <div className="flex flex-row -mx-2">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

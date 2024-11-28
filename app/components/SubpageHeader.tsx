type SubpageHeaderProps = {
  title: string;
  description?: string;
  backgroundImage?: string;
};

export default function SubpageHeader({ 
  title, 
  description,
  // backgroundImage = "/hero-bg.jpeg" 
}: SubpageHeaderProps) {
  return (
    <section 
      className="relative h-[50vh] bg-cover bg-center font-montserrat bg-[#1B4B2A] bg-gradient-to-br from-[hsl(141.13,59.66%,23.33%)] via-[hsl(141.13,59.66%,28%)] to-[hsl(141.13,59.66%,33%)]" 
      // style={{backgroundImage: `url('${backgroundImage}')`}}
    >
      <div className="relative z-10 h-full flex flex-col justify-center container mx-auto px-6 md:px-16 lg:px-24 pt-24">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-semibold text-white mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-2xl text-gray-200 leading-relaxed font-lato max-w-5xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
} 
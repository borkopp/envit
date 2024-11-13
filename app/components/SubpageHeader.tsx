type SubpageHeaderProps = {
  title: string;
  description?: string;
  backgroundImage?: string;
};

export default function SubpageHeader({ 
  title, 
  description,
  backgroundImage = "/hero-bg.jpeg" 
}: SubpageHeaderProps) {
  return (
    <section 
      className="relative h-[50vh] bg-cover bg-center font-montserrat" 
      style={{backgroundImage: `url('${backgroundImage}')`}}
    >
      <div className="absolute inset-0 bg-primary opacity-60"></div>
      <div className="relative z-10 h-full flex flex-col justify-center container mx-auto px-6 md:px-16 lg:px-24 pt-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-semibold text-white mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-gray-200 leading-relaxed font-lato max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
} 
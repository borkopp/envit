import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

type SubpageHeaderProps = {
  title: string;
  description?: string;
};

export default function SubpageHeader({ 
  title, 
  description,
}: SubpageHeaderProps) {
  return (
    <div className="h-[50vh]">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(236, 253, 245)" // Light mint green
        gradientBackgroundEnd="rgb(209, 250, 229)" // Slightly darker mint
        firstColor="34, 197, 94"    // Green-500
        secondColor="16, 185, 129"  // Emerald-500
        thirdColor="52, 211, 153"   // Green-400
        fourthColor="110, 231, 183" // Emerald-300
        fifthColor="167, 243, 208"  // Green-200
        pointerColor="20, 184, 166" // Teal-500
        blendingValue="screen"      // Changed for better light color blending
        size="50%"                  // Smaller size for subpage header
        containerClassName="h-[50vh]"
      >
        <div className="absolute z-10 inset-0 flex items-center justify-start px-4">
          <div className="max-w-4xl mx-auto flex flex-col items-start space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold text-left text-emerald-900">
              {title}
            </h1>
            {description && (
              <p className="text-lg md:text-xl text-emerald-800/80 font-lato max-w-3xl">
                {description}
              </p>
            )}
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function ResoilInbrief() {
  return (
    <div className="container mx-auto px-6 md:px-16 lg:px-24 py-10">
      {/* Full-width Image Section with Link */}
      <section className="mb-10">
        <Link href="https://www.youtube.com/watch?v=Hv2PSm1W1E8">
          <Image
            src="/GrafiKOn56.001.jpeg" // Replace with your image source
            alt="Descriptive Alt Text"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
          />
        </Link>
      </section>

      {/* Two Side-by-Side Paragraphs */}
      <section className="flex flex-col md:flex-row gap-10 mb-10">
        <div className="md:w-1/2">
          <h2 className="text-lg font-bold mb-4">Heading 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            bibendum turpis in est pulvinar, et luctus velit placerat. Integer
            feugiat neque ac lorem dapibus, sed tempus mauris dignissim.
          </p>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-lg font-bold mb-4">Heading 2</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae.
          </p>
        </div>
      </section>

      {/* Three Sections with Read More Buttons */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg shadow-md">
          <h3 className="text-md font-bold mb-2">Section 1</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Link href="/section-1">
            <span className="text-blue-500 hover:underline">Read More</span>
          </Link>
        </div>
        <div className="p-6 border rounded-lg shadow-md">
          <h3 className="text-md font-bold mb-2">Section 2</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Link href="/section-2">
            <span className="text-blue-500 hover:underline">Read More</span>
          </Link>
        </div>
        <div className="p-6 border rounded-lg shadow-md">
          <h3 className="text-md font-bold mb-2">Section 3</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Link href="/section-3">
            <span className="text-blue-500 hover:underline">Read More</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

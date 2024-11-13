import Image from "next/image";

export function CircularProcessDiagram() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Soil Types and Uses */}
        <div className="space-y-6">
          <div>
            <Image src="/technology-description/peatsoil.png" alt="Peat soil" width={300} height={200} className="rounded-lg mb-2" />
            <p className="text-sm text-gray-600">Treatment of different soil types.</p>
          </div>

          <div className="bg-orange-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Restoration of soils from different uses:</h3>
            <ul className="list-disc pl-5">
              <li>Urban soils</li>
              <li>Brownfields</li>
              <li>Agricultural land</li>
              <li>Paddy fields</li>
              <li>Military polygons</li>
              <li>Excavated & disposed soil</li>
            </ul>
          </div>
        </div>

        {/* Center - Process Circle */}
        <div className="relative md:-ml-12 mt-24">
          <div className="bg-green-100 rounded-full w-[200px] h-[200px] flex items-center justify-center">
            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">ReSoil®</h3>
              <p className="text-sm">Process solutions</p>
            </div>
          </div>

          {/* Results boxes */}
          <div className="absolute -top-20 right-0 bg-orange-100 p-4 rounded-lg">
            <p className="text-sm font-semibold">Removal of up to:</p>
            <ul className="text-sm">
              <li>95% of lead</li>
              <li>95% of zinc</li>
              <li>70% of copper</li>
              <li>65% of arsenic</li>
              <li>55% of antimony</li>
            </ul>
          </div>

          <div className="absolute bottom-0 right-0 left-6">
            <Image src="/technology-description/growthresult.png" alt="Plant growth results" width={300} height={200} className="rounded-lg" />
            <p className="text-sm mt-1">Plant growth is not impaired, heavy metal concentration reduced by up to 99%.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

const CmsNavbar = () => {
  return (
    <div className="flex-row justify-between items-center py-1 px-5 mb-4">
      <Link href="/">
        <Image
          src="/logo2.png"
          alt="Logo"
          width={120}
          height={50}
          objectFit="contain"
          className="w-full h-20"
          quality={100}
        />
      </Link>
    </div>
  );
};

export default CmsNavbar;

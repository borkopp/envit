import Image from "next/image";
import Link from "next/link";

const CmsNavbar = () => {
  return (
    <div className="flex-row justify-between items-center py-1 px-5 mb-4">
      {/* <Link href="/">
        <Image
          src="/logo2.png"
          alt="Logo"
          width={200}
          height={100}
          objectFit="contain"
          className="w-full"
          quality={100}
        />
      </Link> */}
    </div>
  );
};

export default CmsNavbar;

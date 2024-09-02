import Image from "next/image";
import Link from "next/link";

const CmsNavbar = () => {
  return (
    <div className="flex justify-between items-center py-1 px-5">
      <Link href="/">
        <Image
          src="/logo2.png"
          alt="Logo"
          width={100}
          height={50}
          className=""
        />
      </Link>
    </div>
  );
};

export default CmsNavbar;

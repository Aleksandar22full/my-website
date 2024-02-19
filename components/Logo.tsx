import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/logo 2.png"
        className="p-1"
        height={80}
        width={80}
        alt="logo"
      />
    </div>
  );
};

export default Logo;

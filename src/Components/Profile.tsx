import Image from "next/image";

export default function Profile() {
  return (
    <>
      <Image
        src="/UserImage.png"
        alt="User image"
        width={100}
        height={100}
        className="w-full h-full rounded-full md:h-[40px] md:w-[40px]"
      />
    </>
  );
}

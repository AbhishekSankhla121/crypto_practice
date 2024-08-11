import Image from "next/image";

export default function Profile() {
  return (
    <>
      <Image
        src="/UserImage.png"
        className="w-full h-full rounded-full md:h-[40px] md:w-[40px]"
        alt="User image"
      />
    </>
  );
}

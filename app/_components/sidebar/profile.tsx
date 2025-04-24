import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex flex-col items-center mt-24">
      <Image
        alt="Profile Picture"
        src="/img/profile.jpg"
        width={80}
        height={80}
        className="rounded-full size-20 border-2 border-white shadow-[0_0_5px_rgb(0,0,0,0.25)] mb-2"
      />
      <div className="font-medium text-lg">Yusuf Praditya Rahman</div>
      <div className="text-sm">Software Engineer</div>
    </div>
  );
}

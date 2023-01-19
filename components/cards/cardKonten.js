import Image from "next/image";

export default function CardKonten() {
  return (
    <>
      <div className="relative z-10 shadow-md cursor-pointer">
        <Image
          src="/imgs/halUnik/solarWind.jpg"
          alt="bg"
          width={512}
          height={512}
          priority
          Layout="fill"
          className="w-96 aspect-video object-cover rounded-xl"
        />
        <p className="absolute bottom-5 left-5 font-medium">Solar Wind</p>
      </div>
    </>
  );
}

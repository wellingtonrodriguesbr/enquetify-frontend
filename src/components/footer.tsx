import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full relative md:absolute bottom-0">
      <div className="flex items-center justify-center">
        <Image
          src="/illustration-2.svg"
          alt=""
          // className="hidden md:block"
          width={400}
          height={400}
        />
        <Image
          src="/illustration-9.svg"
          alt=""
          className="hidden md:block"
          width={400}
          height={400}
        />
        <Image
          src="/illustration-11.svg"
          alt=""
          className="hidden xl:block"
          width={400}
          height={400}
        />
        <Image
          src="/illustration-6.svg"
          alt=""
          className="hidden xl:block"
          width={400}
          height={400}
        />
      </div>
    </footer>
  );
}

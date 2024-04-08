import Image from "next/image";

export function Footer() {
  return (
    <footer className="absolute bottom-0">
      <div className="grid grid-cols-2 md:grid-cols-4">
        <Image
          src="/illustration-2.svg"
          alt=""
          // className="hidden md:block"
          width={700}
          height={700}
        />
        <Image
          src="/illustration-9.svg"
          alt=""
          className="hidden md:block"
          width={700}
          height={700}
        />
        <Image
          src="/illustration-11.svg"
          alt=""
          className="hidden md:block"
          width={700}
          height={700}
        />
        <Image
          src="/illustration-6.svg"
          alt=""
          // className="hidden md:block"
          width={700}
          height={700}
        />
      </div>
    </footer>
  );
}

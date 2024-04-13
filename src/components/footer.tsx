import Image from "next/image";

export function Footer() {
  return (
    <footer className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-cols-fr place-items-center place-content-center">
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
          className="hidden lg:block"
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

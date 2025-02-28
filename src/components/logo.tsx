import Link from "next/link";
import { SmilePlus } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1">
      <SmilePlus className="size-6" />
      <span className="text-2xl font-logo font-bold underline">enquetify.</span>
    </Link>
  );
}

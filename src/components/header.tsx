import { SmilePlus } from "lucide-react";

export function Header() {
  return (
    <header className="w-full flex items-center py-4 h-16 border-b">
      <div className="flex items-center justify-between w-full max-w-screen-2xl mx-auto px-4">
        <div className="flex items-center gap-1">
          <div className="bg-black text-white rounded-md">
            <SmilePlus className="size-8" />
          </div>
          <span className="font-display text-2xl">Pollify</span>
        </div>
      </div>
    </header>
  );
}

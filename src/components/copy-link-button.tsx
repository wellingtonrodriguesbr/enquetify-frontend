import { useState } from "react";
import { Button } from "./ui/button";
import { Check, Copy } from "lucide-react";

interface CopyLinkButtonProps {
  pollId: string;
}

export function CopyLinkButton({ pollId }: CopyLinkButtonProps) {
  const [copyLink, setCopyLink] = useState(false);

  async function handleCopyLink(pollId: string) {
    await navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN_URL}/enquete/${pollId}/votos`
    );

    setCopyLink(true);

    setTimeout(() => {
      setCopyLink(false);
    }, 2000);
  }
  return (
    <Button
      onClick={() => handleCopyLink(pollId)}
      size="sm"
      variant="secondary"
      className="gap-2 hover:brightness-95"
    >
      {copyLink ? (
        <>
          Copiado
          <Check className="size-4" />
        </>
      ) : (
        <>
          Copiar
          <Copy className="size-4" />
        </>
      )}
    </Button>
  );
}

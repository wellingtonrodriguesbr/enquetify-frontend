import ReCAPTCHA from "react-google-recaptcha";

export function Recaptcha({
  onChange,
}: {
  onChange: (token: string | null) => void;
}) {
  return (
    <ReCAPTCHA
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      onChange={onChange}
    />
  );
}

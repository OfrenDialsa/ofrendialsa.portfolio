import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function SocialButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium hover:bg-muted transition w-full sm:w-auto shadow-sm hover:shadow-md active:scale-[0.98]"
    >
      {icon}
      {label}
      <ArrowUpRight className="w-4 h-4" />
    </Link>
  );
}
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { capitalize, cn } from "~/lib/utils";
export interface NavlinkProps {
  name: string;
  path: string;
}
export function Navlink({ name, path }: NavlinkProps) {
  const currentPath = usePathname();
  return (
    <Link
      href={path}
      className={cn(
        "hover:border-border hidden  rounded-2xl border border-transparent px-4 py-2 text-sm font-semibold transition-all md:block ",
        path == currentPath ? "text-primary" : "",
      )}
    >
      {capitalize(name)}
    </Link>
  );
}

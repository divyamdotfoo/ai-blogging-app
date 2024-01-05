"use client";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { cn } from "~/lib/utils";
export function Aside() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant={"outline"} className="md:hidden">
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="flex w-64 flex-col items-start gap-2"
      >
        <SheetHeader className=" text-left">
          <SheetTitle className=" text-xl">T3 Blogging app</SheetTitle>
          <SheetDescription>
            This app is built with trpc, Nextjs, Typescript, Nextauth and
            prisma.
          </SheetDescription>
        </SheetHeader>
        <div className=" flex w-full flex-col items-start gap-1">
          <AsideLink name="My Feeds" path="/" />
          <AsideLink name="Explore" path="/explore" />
          <AsideLink name="Discussions" path="/discussion" />
        </div>
      </SheetContent>
    </Sheet>
  );
}

function AsideLink({ name, path }: { name: string; path: string }) {
  const currentPath = usePathname();
  return (
    <Link
      className={cn(
        "hover:bg-accent block w-full rounded-md px-2 py-3 ",
        currentPath == path ? "text-primary font-semibold" : " font-medium",
      )}
      href={path}
    >
      {name}
    </Link>
  );
}

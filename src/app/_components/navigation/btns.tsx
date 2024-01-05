"use client";
import { Button } from "~/components/ui/button";
import {
  MagnifyingGlassIcon,
  MagicWandIcon,
  BellIcon,
} from "@radix-ui/react-icons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";
import { SearchBox } from "../search/searchBox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { NotificationContent } from "../notification/content";
export function SearchBtn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={"icon"}
          variant={"link"}
          className=" hover:border-border rounded-full border border-transparent"
        >
          <MagnifyingGlassIcon className=" h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className=" top-[20%]">
        <SearchBox />
      </DialogContent>
    </Dialog>
  );
}

export function ThemeBtn() {}

export function Login() {
  return (
    <Button className=" flex items-center gap-2 rounded-2xl font-bold">
      <span className="">Get Started</span>
    </Button>
  );
}

export function Write() {
  return (
    <Button className=" flex items-center gap-2 rounded-2xl font-semibold">
      <MagicWandIcon />
      <span className=" text-sm">Write</span>
    </Button>
  );
}

export function Notification() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant={"outline"} size={"icon"} className=" rounded-full">
          <BellIcon className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <NotificationContent />
      </PopoverContent>
    </Popover>
  );
}

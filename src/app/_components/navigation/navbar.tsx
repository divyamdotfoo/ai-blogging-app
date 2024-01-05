import Link from "next/link";
import { Navlink } from "./navlink";
import { Login, Notification, SearchBtn, Write } from "./btns";
import { Aside } from "./aside";

export default function Navbar() {
  return (
    <div className=" flex w-full items-center justify-between px-4 py-2">
      <div>
        <Aside />
        <Link href={"/"} className=" hidden text-xl font-extrabold md:block">
          Blogging
        </Link>
      </div>
      <div className=" flex items-center gap-2">
        <Navlink name={"My Feed"} path="/" />
        <Navlink name={"Discussions"} path="/discussions" />
        <Navlink name={"Explore"} path="/explore" />
      </div>
      <div className=" flex items-center gap-2">
        <SearchBtn asFooter={false} />
        <Write />
        <Notification />
      </div>
    </div>
  );
}

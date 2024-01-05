import Link from "next/link";
import { Navlink } from "./navlink";
import { Login, Notification, SearchBtn, Write } from "./btns";

export default function Navbar() {
  return (
    <div className=" flex w-full items-center justify-between p-2">
      <Link href={"/"}>Blogging</Link>
      <div className=" flex items-center gap-2">
        <Navlink name={"My Feed"} path="/" />
        <Navlink name={"Discussions"} path="/discussions" />
        <Navlink name={"Explore"} path="/explore" />
      </div>
      <div className=" flex items-center gap-2">
        <SearchBtn />
        <Write />
        <Notification />
      </div>
    </div>
  );
}

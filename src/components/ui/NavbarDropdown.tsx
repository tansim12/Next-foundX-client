"use client";

import { privateRotes } from "@/src/constant";
import { useUser } from "@/src/context/user.provider";
import { logoutFn } from "@/src/services/auth.service";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

import { usePathname, useRouter } from "next/navigation";

export default function NavbarDropdown() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  const { user, setIsLoading: userSetLoading } = useUser();

  return (
    <>
      {user?.email ? (
        <Dropdown>
          <DropdownTrigger>
            <Avatar className="cursor-pointer" name="Joe" />
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem onClick={() => handleNavigation("/profile")}>
              Profile
            </DropdownItem>
            <DropdownItem onClick={() => handleNavigation("/profile/settings")}>
              Settings
            </DropdownItem>
            <DropdownItem
              onClick={() => handleNavigation("/profile/create-post")}
            >
              Create Post
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                logoutFn();
                userSetLoading(true);
                if (privateRotes.some((route) => route === pathname)) {
                  router.push("/");
                }
              }}
              key="delete"
              className="text-danger"
              color="danger"
            >
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <Button onClick={() => handleNavigation("/login")}>Login</Button>
      )}
    </>
  );
}

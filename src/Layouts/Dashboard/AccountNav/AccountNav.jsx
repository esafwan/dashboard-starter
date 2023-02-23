import { useState, useEffect } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
} from "@radix-ui/react-icons";
import "./styles.css";

const AccountNav = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [person, setPerson] = useState("");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item
            className="DropdownMenuItem"
            onClick={console.log("ok")}
          >
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            Billing
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.CheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Enable Beta <div className="RightSlot">⌘+B</div>
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.Label className="DropdownMenuLabel">
            User Settings
          </DropdownMenu.Label>
          {/* <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenu.RadioItem
              className="DropdownMenuRadioItem"
              value="pedro"
            >
              <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator"></DropdownMenu.ItemIndicator>
              Edit Profile
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem
              className="DropdownMenuRadioItem"
              value="colm"
            >
              <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                
              </DropdownMenu.ItemIndicator>
              Logout
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup> */}
          <DropdownMenu.Item className="DropdownMenuItem" onClick={console.log("ok")}>
            Edit Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem" onClick={console.log("ok")}>
            Logout
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default AccountNav;

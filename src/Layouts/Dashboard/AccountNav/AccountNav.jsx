import { useState} from "react";
import {useTranslation} from "react-i18next";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  CheckIcon,
} from "@radix-ui/react-icons";
import "./styles.css";

const AccountNav = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const {t}=useTranslation();
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
          >
            {t("profile")}
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            {t("billing")}
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
            {t("enable beta")} <div className="RightSlot">⌘+B</div>
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.Label className="DropdownMenuLabel">
            {t("user settings")}
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
          <DropdownMenu.Item className="DropdownMenuItem">
            {t("edit profile")}
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            {t("logout")}
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default AccountNav;

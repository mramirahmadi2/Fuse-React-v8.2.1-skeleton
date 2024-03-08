import { ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Hidden from "@mui/material/Hidden";
import Toolbar from "@mui/material/Toolbar";
import clsx from "clsx";
import { memo } from "react";
import { useSelector } from "react-redux";
import {
  selectFuseCurrentLayoutConfig,
  selectToolbarTheme,
} from "app/store/fuse/settingsSlice";
import { selectFuseNavbar } from "app/store/fuse/navbarSlice";
import AdjustFontSize from "../../shared-components/AdjustFontSize";
import FullScreenToggle from "../../shared-components/FullScreenToggle";
import LanguageSwitcher from "../../shared-components/LanguageSwitcher";
import NotificationPanelToggleButton from "../../shared-components/notificationPanel/NotificationPanelToggleButton";
import NavigationShortcuts from "../../shared-components/NavigationShortcuts";
import NavigationSearch from "../../shared-components/NavigationSearch";
import NavbarToggleButton from "../../shared-components/NavbarToggleButton";
import UserMenu from "../../shared-components/UserMenu";
import QuickPanelToggleButton from "../../shared-components/quickPanel/QuickPanelToggleButton";
import ChatPanelToggleButton from "../../shared-components/chatPanel/ChatPanelToggleButton";

function ToolbarLayout1(props) {
  const config = useSelector(selectFuseCurrentLayoutConfig);
  const navbar = useSelector(selectFuseNavbar);
  const toolbarTheme = useSelector(selectToolbarTheme);

  return (
    <ThemeProvider theme={toolbarTheme}>
      <AppBar
        id="fuse-toolbar"
        className={clsx("flex relative z-20 shadow-md", props.className)}
        color="default"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? toolbarTheme.palette.background.paper
              : toolbarTheme.palette.background.default,
        }}
        position="static"
      >
        <Toolbar className="p-0 min-h-48 md:min-h-64">
          <div className="flex flex-1 px-16">
            <Hidden lgDown>
              <div className="border-2 p-6 rounded-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1602 10.87C12.0602 10.86 11.9402 10.86 11.8302 10.87C10.6824 10.831 9.59486 10.3468 8.79784 9.51995C8.00083 8.69307 7.55696 7.58844 7.56021 6.43999C7.56021 3.98999 9.54022 1.99999 12.0002 1.99999C12.5826 1.98948 13.1614 2.0938 13.7035 2.30697C14.2456 2.52014 14.7404 2.838 15.1597 3.2424C15.5789 3.6468 15.9144 4.12982 16.147 4.66388C16.3796 5.19794 16.5047 5.77258 16.5152 6.35499C16.5257 6.9374 16.4214 7.51618 16.2082 8.05828C15.9951 8.60038 15.6772 9.09518 15.2728 9.51444C14.8684 9.9337 14.3854 10.2692 13.8513 10.5018C13.3173 10.7344 12.7426 10.8595 12.1602 10.87ZM7.16021 14.56C4.74021 16.18 4.74021 18.82 7.16021 20.43C9.91021 22.27 14.4202 22.27 17.1702 20.43C19.5902 18.81 19.5902 16.17 17.1702 14.56C14.4302 12.73 9.92021 12.73 7.16021 14.56Z"
                    stroke="#28293D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div className="border-2 p-6 rounded-lg ml-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 10.5V15.5C22 19 20 20.5 17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H14"
                    stroke="#28293D"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 9L10.13 11.5C11.16 12.32 12.85 12.32 13.88 11.5L15.06 10.56M19.5 8C20.163 8 20.7989 7.73661 21.2678 7.26777C21.7366 6.79893 22 6.16304 22 5.5C22 4.83696 21.7366 4.20107 21.2678 3.73223C20.7989 3.26339 20.163 3 19.5 3C18.837 3 18.2011 3.26339 17.7322 3.73223C17.2634 4.20107 17 4.83696 17 5.5C17 6.16304 17.2634 6.79893 17.7322 7.26777C18.2011 7.73661 18.837 8 19.5 8Z"
                    stroke="#28293D"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </Hidden>
          </div>

          {config.navbar.display && config.navbar.position === "right" && (
            <>
              <Hidden lgDown>
                {!navbar.open && (
                  <NavbarToggleButton className="w-40 h-40 p-0 mx-0" />
                )}
              </Hidden>

              <Hidden lgUp>
                <NavbarToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8" />
              </Hidden>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(ToolbarLayout1);

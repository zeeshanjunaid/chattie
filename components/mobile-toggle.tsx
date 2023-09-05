import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import NavigationSidebar from "./navigation/navigation-sidebar";
import React from "react";
import ServerSidebar from "./server/sever-sidebar";

interface MobileToggleProps {
  serverId: string;
}
const MobileToggle = ({ serverId }: MobileToggleProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 flex gap-0">
        <div className="w-[72px]">
          <NavigationSidebar />
        </div>
        <ServerSidebar serverId={serverId} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileToggle;

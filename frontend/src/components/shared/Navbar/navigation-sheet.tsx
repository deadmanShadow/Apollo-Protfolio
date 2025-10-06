import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="bg-[#000018] border-none">
        <Button
          variant="outline"
          size="icon"
          className="bg-transparent text-blue-600 border-none hover:bg-gray-100"
        >
          <Menu />
        </Button>
      </SheetTrigger>
       <SheetContent className="bg-[#000018] text-white border-none text-center">
        <NavMenu orientation="vertical" className="mt-6 gap-2 text-white" />
      </SheetContent>
    </Sheet>
  );
};

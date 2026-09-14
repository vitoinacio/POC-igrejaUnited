"use client";

import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ChevronDown, ChevronRight, PanelLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import * as SheetPrimitive from "@radix-ui/react-sheet";
import { cva, type VariantProps } from "class-variance-authority";

const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

const sidebarVariants = cva(
  "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex data-[side=left]:left-0 data-[side=right]:right-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
  {
    variants: {
      variant: {
        sidebar: "border-r border-sidebar-border bg-sidebar-background",
        floating: "border border-sidebar-border bg-sidebar-background shadow-lg",
        inset: "border-r border-sidebar-border bg-sidebar-background",
      },
    },
    defaultVariants: {
      variant: "sidebar",
    },
  }
);

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
}) {
  const [openMobile, setOpenMobile] = React.useState(false);
  const [state, setState] = React.useState<"expanded" | "collapsed">("expanded");

  const contextValue = React.useMemo(
    () => ({
      state,
      openMobile,
      setOpenMobile,
      toggleSidebar: () => setState((s) => (s === "expanded" ? "collapsed" : "expanded")),
    }),
    [state, openMobile]
  );

  return (
    <SidebarProvider value={contextValue}>
      <div className="group relative h-svh w-(--sidebar-width) transition-[width] duration-200 ease-linear" style={{ "--sidebar-width": SIDEBAR_WIDTH }}>
        <SheetPrimitive.Root open={openMobile} onOpenChange={setOpenMobile}>
          <SheetPrimitive.Content
            data-sidebar="sidebar"
            data-variant={variant}
            data-side={side}
            data-collapsible={collapsible}
            className={cn(
              sidebarVariants({ variant }),
              "fixed inset-y-0 z-50 h-svh transition-[left,right,width] duration-200 ease-linear",
              side === "left" ? "left-0" : "right-0",
              "md:hidden"
            )}
            style={{
              width: SIDEBAR_WIDTH_MOBILE,
              left: side === "left" ? "calc(var(--sidebar-width) * -1)" : "auto",
              right: side === "right" ? "calc(var(--sidebar-width) * -1)" : "auto",
            }}
            {...props}
          >
            <div className="flex h-full flex-col">{children}</div>
            <SheetPrimitive.Close className="hidden md:hidden" />
          </SheetPrimitive.Content>
        </SheetPrimitive.Root>
        <div
          className={cn(
            "fixed inset-y-0 z-40 hidden h-svh w-full md:block",
            side === "left" ? "left-0" : "right-0"
          )}
          aria-hidden="true"
        />
      </div>
    </SidebarProvider>
  );
}
Sidebar.displayName = "Sidebar";

const SidebarProvider = React.createContext<{
  state: "expanded" | "collapsed";
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  toggleSidebar: () => void;
} | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarProvider);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}

function SidebarHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex h-16 shrink-0 items-center gap-2 overflow-x-auto px-3 text-sidebar-foreground",
        className
      )}
      {...props}
    />
  );
}
SidebarHeader.displayName = "SidebarHeader";

function SidebarFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex h-16 shrink-0 items-center gap-2 overflow-x-auto px-3 text-sidebar-foreground",
        className
      )}
      {...props}
    />
  );
}
SidebarFooter.displayName = "SidebarFooter";

function SidebarContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex grow overflow-y-auto px-3 py-2 text-sidebar-foreground",
        className
      )}
      {...props}
    />
  );
}
SidebarContent.displayName = "SidebarContent";

function SidebarGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...props} />
  );
}
SidebarGroup.displayName = "SidebarGroup";

function SidebarGroupLabel({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "px-2 py-1.5 text-xs font-medium text-sidebar-foreground/70",
        className
      )}
      {...props}
    />
  );
}
SidebarGroupLabel.displayName = "SidebarGroupLabel";

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("", className)} {...props} />;
}
SidebarGroupContent.displayName = "SidebarGroupContent";

function SidebarGroupAction({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-2",
        className
      )}
      {...props}
    />
  );
}
SidebarGroupAction.displayName = "SidebarGroupAction";

function SidebarMenu({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <ul className={cn("flex flex-col gap-1", className)} {...props} />
  );
}
SidebarMenu.displayName = "SidebarMenu";

function SidebarMenuItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return <li className={cn("", className)} {...props} />;
}
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva(
  "flex w-full items-center gap-2 overflow-hidden rounded-lg px-2 py-1.5 text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group/menu-button data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8 group-data-[collapsible=icon]:p-0",
  {
    variants: {
      variant: {
        default: "",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface SidebarMenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  isActive?: boolean;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  className,
  ...props
}: SidebarMenuButtonProps) {
  const Comp = asChild ? Slot : "button";
  const { state } = useSidebar();

  return (
    <Comp
      className={cn(
        sidebarMenuButtonVariants({ variant, size }),
        className
      )}
      data-active={isActive}
      data-state={state}
      {...props}
    />
  );
}
SidebarMenuButton.displayName = "SidebarMenuButton";

function SidebarMenuAction({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const { state } = useSidebar();

  return (
    <button
      className={cn(
        "absolute right-1 flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground/40 transition-opacity hover:text-muted-foreground opacity-0 group-hover/menu-button:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:opacity-100 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      data-state={state}
      {...props}
    />
  );
}
SidebarMenuAction.displayName = "SidebarMenuAction";

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex h-5 min-w-5 items-center justify-center rounded px-1 text-xs font-medium tabular-nums text-sidebar-foreground/70",
        className
      )}
      {...props}
    />
  );
}
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const sidebarMenuSubButtonVariants = cva(
  "flex w-full items-center gap-2 overflow-hidden rounded-lg px-2 py-1.5 text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
  {
    variants: {
      variant: {
        default: "",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function SidebarMenuSub({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul className={cn("mx-1.5 flex flex-col gap-1 border-l-2 border-sidebar-border pl-2.5 py-0.5", className)} {...props} />
  );
}
SidebarMenuSub.displayName = "SidebarMenuSub";

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return <li className={cn("", className)} {...props} />;
}
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

function SidebarMenuSubButton({
  asChild = false,
  isActive = false,
  variant = "default",
  className,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean; isActive?: boolean; variant?: "default" | "outline" }) {
  const Comp = asChild ? Slot : "button";
  const { state } = useSidebar();

  return (
    <Comp
      className={cn(sidebarMenuSubButtonVariants({ variant }), className)}
      data-active={isActive}
      data-state={state}
      {...props}
    />
  );
}
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

function SidebarRail({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      className={cn(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 ltr:-translate-x-1/2 rtl:translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:start-1/2 after:w-[2px] sm:flex",
        className
      )}
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
      {...props}
    >
      <PanelLeft className="h-4 w-4 text-sidebar-foreground/50 rtl:rotate-180" />
    </button>
  );
}
SidebarRail.displayName = "SidebarRail";

function SidebarTrigger({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      className={cn("size-8 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent", className)}
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
      {...props}
    >
      <PanelLeft className="h-4 w-4 rtl:rotate-180" />
      <span className="sr-only">Toggle sidebar</span>
    </button>
  );
}
SidebarTrigger.displayName = "SidebarTrigger";

function SidebarInset({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex min-h-svh flex-1 flex-col", className)} {...props} />
  );
}
SidebarInset.displayName = "SidebarInset";

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-8 w-full rounded-md bg-background px-3 text-sm outline-none ring-sidebar-ring placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}
SidebarInput.displayName = "SidebarInput";

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<"hr">) {
  return (
    <hr className={cn("mx-2 border-sidebar-border", className)} {...props} />
  );
}
SidebarSeparator.displayName = "SidebarSeparator";

export {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarGroupAction,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarRail,
  SidebarTrigger,
  SidebarInset,
  SidebarInput,
  SidebarSeparator,
  useSidebar,
};
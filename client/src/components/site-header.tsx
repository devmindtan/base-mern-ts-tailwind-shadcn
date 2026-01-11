"use client"

import {useLocation} from "react-router-dom"
import {Separator} from "@/components/ui/separator"
import {SidebarTrigger} from "@/components/ui/sidebar"

const routeTitles: Record<string, string> = {
  "/user/dashboard": "Dashboard",
  "/user/lifecycle": "Lifecycle",
  "/user/analytics": "Analytics",
  "/user/settings": "Settings",
  "/user/library": "Data Library",
}

export function SiteHeader() {
  const location = useLocation()

  const currentTitle = routeTitles[location.pathname] || "Documents"

  return (
    <header
      className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1"/>
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">{currentTitle}</h1>
      </div>
    </header>
  )
}
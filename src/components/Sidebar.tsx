import { Home, Users, Video, Settings } from "lucide-react";

export default function Sidebar() {
  const links = [
    { name: "Dashboard", icon: <Home />, href: "#" },
    { name: "Workers", icon: <Users />, href: "#" },
    { name: "Videos", icon: <Video />, href: "#" },
    { name: "Settings", icon: <Settings />, href: "#" },
  ];

  return (
    <aside className="hidden md:flex w-64 flex-col bg-white dark:bg-zinc-900 border-r dark:border-zinc-800 p-6 space-y-6">
      <div className="text-xl font-bold">🎛️ Dashboard</div>
      <nav className="space-y-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            {link.icon}
            {link.name}
          </a>
        ))}
      </nav>
    </aside>
  );
}

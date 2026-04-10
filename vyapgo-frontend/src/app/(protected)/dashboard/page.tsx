import { redirect } from "next/navigation";

export default function DashboardPage() {
  // Keep /dashboard usable until dedicated dashboard UI is shipped.
  redirect("/account");
}

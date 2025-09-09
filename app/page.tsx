import XCard from "@/libs/app/components/XCard/XCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className={"h-dvh bg-gray-100 flex items-center justify-center"}>
        <XCard>
            <div className={"space-y-2"}>
                <p>Welcome to business management app click to sign in link landing page is not ready</p>
                <Link href={"auth/sign-in"} className={"text-sky-500 hover:text-sky-600"}>Sign in</Link>
            </div>
        </XCard>
    </div>
  );
}

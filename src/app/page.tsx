import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Link href={`/documents/123`}>
        <Button variant={"link"}>Go to document</Button>
      </Link>
    </div>
  );
}

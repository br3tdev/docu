import { Button } from "@/components/ui/button";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Button variant={"outline"}>Project initialized</Button>
    </div>
  );
}

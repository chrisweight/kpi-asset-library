import { Button } from "@/components/button";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="mb-8">
        <Link href={`/`}>
          <Button text={"Back"}></Button>
        </Link>
      </div>
      <div className="bg-white rounded-md p-8">
        <h1 className="font-extrabold text-xl mb-4">Request access to resource</h1>
        <p>TODO: Not defined beyond very generic requirement</p>
      </div>
    </>
  )
}
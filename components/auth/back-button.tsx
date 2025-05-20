/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  href: string
  label: string
}

export function BackButton({ label, href }: BackButtonProps) {
  return (
    <Button 
      variant="link"
      className="font-normal w-full"
      size="sm"
      asChild
    >
      <Link href={href}>{label}</Link>
      {/* <Link href="/">Back to Home page</Link> */}
    </Button>
  )
}
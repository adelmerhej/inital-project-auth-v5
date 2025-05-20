"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { BackButton } from "@/components/auth/back-button";
import { Social } from "@/components/auth/social";
import { AuthHeader } from "@/components/auth/header";

interface CardWrapperProps {
  children: React.ReactNode;
  headerIcon: string;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export function CardWrapper({
    children,
    headerIcon,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial,
}: CardWrapperProps) {
 return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <AuthHeader header={headerIcon} label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton 
          label={backButtonLabel} 
          href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

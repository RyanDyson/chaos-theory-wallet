"use client";

// import { useWeb3Modal } from "@web3"
import { useAccount, useDisconnect } from "wagmi";
import { useAppKit } from "@reown/appkit/react";
import { Button } from "@/components/ui/button";
import { LogOut, LogIn, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function ModalButton({ className }: Props) {
  const { open } = useAppKit();
  const { disconnect } = useDisconnect();
  const { isConnected, isConnecting } = useAccount();

  if (isConnected) {
    return (
      <Button
        onClick={() => disconnect()}
        className={cn(className, "w-full cursor-pointer")}
      >
        <LogOut className="h-6 w-6" />
        <p>Disconnect Wallet</p>
      </Button>
    );
  }

  return (
    <Button
      onClick={() => open()}
      className={cn(className, "w-full cursor-pointer")}
    >
      {isConnecting ? (
        <LoaderCircle />
      ) : (
        <>
          <LogIn className="h-6 w-6" />
          <p>Connect Wallet</p>
        </>
      )}
    </Button>
  );
}

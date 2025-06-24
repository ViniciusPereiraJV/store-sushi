"use client"
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { StepUser } from "@/components/chekout/StepUser";
import { StepAdress } from "@/components/chekout/StepAdress";
import { StepFinish } from "@/components/chekout/StepFinish";
import { Steps } from "@/types/Steps";



type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CheckoutDialog = ({ open, onOpenChange }: Props) => {
  const [step, setStep] = useState<Steps>("user");

  let progessPct = 0;
  switch (step) {
    case "user":
        progessPct = 33
      break;
    case "adress":
        progessPct = 66
        break;
    case "finish":
        progessPct = 100
      break;
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {step === "user" && "Personal data"}
            {step === "adress" && "Adress delivery"}
            {step === "finish" && "Sending to WhatsApp"}
          </DialogTitle>
        </DialogHeader>
        <Progress value={progessPct} />
        <div className="flex flex-col gap-3">
                {step ==="user" && <StepUser setStep={setStep}/>}
                {step ==="adress" && <StepAdress setStep={setStep}/>}
                {step ==="finish" && <StepFinish/>}
        </div>
      </DialogContent>
    </Dialog>
  );
};

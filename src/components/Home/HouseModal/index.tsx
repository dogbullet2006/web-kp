import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/Dialog";
import { FC } from "react";
import { HouseCard } from "../HouseCard";
import { HouseItem } from "../HouseCard/type";

interface Props {
  open: boolean;
  onClose: () => void;
  data: HouseItem;
}

export const HouseModal: FC<Props> = ({ open, onClose, data }) => {
  return (
    <Dialog
      open={open}
      onOpenChange={open => {
        if (!open) {
          onClose();
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-[#1a1a1a]">{data.title}</DialogTitle>
        </DialogHeader>
        <div className="text-[#1a1a1a]">
          <HouseCard {...data} />
        </div>
        <DialogFooter>
          <Button onClick={() => onClose()} type="submit">
            Окідокі
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

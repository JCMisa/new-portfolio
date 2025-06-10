import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader className="hidden">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">My Resume</h2>
            <Button
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>
          <div className="flex-1 w-full h-full">
            <iframe
              src="/resume.pdf"
              className="w-full h-full rounded-lg"
              title="Resume PDF Viewer"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;

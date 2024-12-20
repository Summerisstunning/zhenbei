"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface IcebergDialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
}

export default function IcebergDialog({ isOpen, onClose, title, content }: IcebergDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-blue-50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-gray-800">{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 text-gray-700 whitespace-pre-line">
          {content}
        </div>
      </DialogContent>
    </Dialog>
  )
}

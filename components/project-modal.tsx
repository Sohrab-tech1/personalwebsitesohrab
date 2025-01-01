'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    details: string
  }
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">{project.title}</DialogTitle>
          <DialogDescription className="pt-4 text-lg">
            {project.details}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}


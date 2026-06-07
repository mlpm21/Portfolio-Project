import { useState, useCallback } from "react";

/** Shared interaction state for all draft card styles. */
export function useProjectCardState() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const openPreview = useCallback(() => setPreviewOpen(true), []);
  const closePreview = useCallback(() => setPreviewOpen(false), []);
  const onEnter = useCallback(() => setHovered(true), []);
  const onLeave = useCallback(() => setHovered(false), []);

  return {
    previewOpen,
    hovered,
    openPreview,
    closePreview,
    onEnter,
    onLeave,
    setPreviewOpen,
  };
}

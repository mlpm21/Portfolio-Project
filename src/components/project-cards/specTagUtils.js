/**
 * Maps project.status → display lifecycle for spec-tag cards.
 * Override per project with lifecycle: "completed" | "in-progress" | "planned"
 */

export const LIFECYCLE_STYLES = {
  completed: {
    label: "Completed",
    bg: "#3d5c4a",
    text: "#d4e8d8",
    dot: "#7ecf9a",
  },
  "in-progress": {
    label: "In Progress",
    bg: "#5c4f3a",
    text: "#f0e6d0",
    dot: "#e8b86a",
  },
  planned: {
    label: "Planned",
    bg: "#3a4250",
    text: "#c8d0e0",
    dot: "#8aa4c8",
  },
};

export function getLifecycle(project) {
  if (project.lifecycle && LIFECYCLE_STYLES[project.lifecycle]) {
    return { key: project.lifecycle, ...LIFECYCLE_STYLES[project.lifecycle] };
  }

  const s = (project.status || "").toLowerCase();

  if (
    s.includes("progress") ||
    s === "active" ||
    s === "prototype" ||
    s === "in progress"
  ) {
    return { key: "in-progress", ...LIFECYCLE_STYLES["in-progress"] };
  }

  if (
    s.includes("archived") ||
    s === "completed" ||
    s === "capstone" ||
    s === "featured" ||
    s === "stable"
  ) {
    return { key: "completed", ...LIFECYCLE_STYLES.completed };
  }

  return { key: "planned", ...LIFECYCLE_STYLES.planned };
}

/** Project ref code from index — PR-01, PR-02, … */
export function projectCode(project) {
  const num = project.index?.replace(/\D/g, "") || "0";
  return `PR-${num.padStart(2, "0")}`;
}

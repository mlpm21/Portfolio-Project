/**
 * ProjectCard — production router (two styles only).
 *
 *   "spectag" → SpecTagCard   industrial data plate
 *   "plate"   → PlateCard     visual decal
 */

import SpecTagCard from "./project-cards/SpecTagCard";
import PlateCard from "./project-cards/PlateCard";

const cardMap = {
  spectag: SpecTagCard,
  plate: PlateCard,
};

export default function ProjectCard({ project, cardStyle, delay = 0 }) {
  const style = cardStyle || project.variant;
  const Card = cardMap[style] ?? SpecTagCard;
  return <Card project={project} delay={delay} />;
}

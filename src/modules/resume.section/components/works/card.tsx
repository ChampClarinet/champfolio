import { type FC } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import { Building2 } from "lucide-react";

import { workSkillTags } from "./skills";

export interface WorkCardProps {
  workKey: string;
  title: string;
  date: string;
  institution: string;
  description: string;
  references?: string[];
}
const WorkCard: FC<WorkCardProps> = ({
  workKey,
  title,
  date,
  institution,
  description,
  references = [],
}) => {
  const skills = workSkillTags.find((skill) => workKey == skill.key)?.skills ?? [];
  return (
    <Card className="bg-card/50 max-w-full border-transparent">
      <CardHeader className="flex flex-col gap-2">
        <div className="flex w-full flex-col justify-between gap-x-2 gap-y-1 @sm:flex-row">
          <Text className="font-medium">{title}</Text>
          <Badge className="mt-0.5 h-fit">{date}</Badge>
        </div>
        <div className="*:text-foreground/70 flex gap-2">
          <Building2 className="h-4! w-4! shrink-0 text-sm" />
          <Text variant="small">{institution}</Text>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        {!!skills?.length && (
          <div className="flex flex-wrap gap-1">
            {skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        )}
        <Text className="text-foreground/70 mt-2 text-sm">{description}</Text>
        {!!references.length && (
          <>
            <Text className="text-foreground/70 text-xs font-semibold">References:</Text>
            {references.map((ref, i) => (
              <Link key={i} link={ref}>
                <Text className="text-foreground/70 text-xs underline">{ref}</Text>
              </Link>
            ))}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default WorkCard;

// src/components/sections/projects/TechnologyChart.tsx
"use client";

import { Code } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface TechnologyChartProps {
  technologies: string[];
}

export function TechnologyChart({ technologies }: TechnologyChartProps) {
  // Technology categorization
  const techCategories: Record<string, string> = {
    React: "Frontend",
    "Next.js": "Frontend",
    TypeScript: "Frontend",
    JavaScript: "Frontend",
    HTML: "Frontend",
    CSS: "Frontend",
    SCSS: "Frontend",
    "Tailwind CSS": "Frontend",
    Pug: "Frontend",
    "Node.js": "Backend",
    "Express.js": "Backend",
    JWT: "Backend",
    WebSockets: "Backend",
    MongoDB: "Database",
    Mongoose: "Backend",
    PostgreSQL: "Database",
    Prisma: "Database",
    Clerk: "Authentication",
    "React Calendar": "UI Component",
    "Framer Motion": "Animation",
    MagicUI: "UI Component",
    "Shadcn UI": "UI Component",
    Nodemailer: "Utility",
    Redis: "Database",
    GraphQL: "Backend",
  };

  // Group technologies by category
  const techByCategory: Record<string, number> = {};
  technologies.forEach((tech) => {
    const category = techCategories[tech] || "Other";
    techByCategory[category] = (techByCategory[category] || 0) + 1;
  });

  // Create chart data
  const chartData = Object.entries(techByCategory).map(([category, count]) => ({
    category,
    count,
    fill: `var(--color-${category.toLowerCase().replace(/\s+/g, "-")})`,
  }));

  // Create chart config
  const chartConfig: ChartConfig = {
    count: {
      label: "Technologies",
    },
  };

  // Add category colors to config
  Object.keys(techByCategory).forEach((category, index) => {
    const key = category
      .toLowerCase()
      .replace(/\s+/g, "-") as keyof typeof chartConfig;
    chartConfig[key] = {
      label: category,
      color: `hsl(var(--chart-${(index % 9) + 1}))`,
    };
  });

  // Get primary focus
  const getPrimaryFocus = () => {
    let maxCategory = "";
    let maxCount = 0;

    Object.entries(techByCategory).forEach(([category, count]) => {
      if (count > maxCount) {
        maxCount = count;
        maxCategory = category;
      }
    });

    return maxCategory;
  };

  const primaryFocus = getPrimaryFocus();

  return (
    <Card className="border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">
          Technology Breakdown
        </CardTitle>
        <CardDescription>
          Distribution of technologies by category
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px] [&_.recharts-text]:fill-foreground dark:[&_.recharts-text]:fill-slate-200"
        >
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  nameKey="count"
                  formatter={(value, name, entry) => [
                    `${value} technologies`,
                    entry.payload.category,
                  ]}
                />
              }
            />
            <Pie
              data={chartData}
              dataKey="count"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={2}
            >
              <LabelList
                dataKey="category"
                position="outside"
                className="fill-slate-700 dark:fill-slate-200"
                stroke="none"
                fontSize={12}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

        {/* Technology Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700 
                      text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm border-t border-slate-200 dark:border-slate-700 pt-4">
        <div className="flex gap-2 font-medium leading-none">
          <Code className="h-4 w-4" /> Primary focus: {primaryFocus}
        </div>
        <div className="leading-none text-muted-foreground">
          {technologies.length} technologies across{" "}
          {Object.keys(techByCategory).length} categories
        </div>
      </CardFooter>
    </Card>
  );
}

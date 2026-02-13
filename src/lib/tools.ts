export const STRIPE_LINK = "https://buy.stripe.com/REPLACE_ME";

export type ToolField = {
  name: string;
  label: string;
  type: "text" | "date" | "select" | "toggle";
  default?: string | boolean;
  options?: { label: string; value: string }[];
  required?: boolean;
};

export type Tool = {
  name: string;
  slug: string;
  description: string;
  free: boolean;
  icon: string;
  fields: ToolField[];
};

export const tools: Tool[] = [
  {
    name: "Today Page",
    slug: "today",
    description: "Plan your day with priorities, schedule, and notes.",
    free: true,
    icon: "01",
    fields: [
      { name: "title", label: "Page title", type: "text", default: "Today" },
      { name: "date", label: "Date", type: "date" },
      { name: "fontSize", label: "Font size", type: "select", default: "normal", options: [{ label: "Normal", value: "normal" }, { label: "Large", value: "large" }] },
      { name: "showPriorities", label: "Top 3 priorities", type: "toggle", default: true },
      { name: "showSchedule", label: "Schedule", type: "toggle", default: true },
      { name: "showNotes", label: "Notes section", type: "toggle", default: true },
    ],
  },
  {
    name: "Week Planner",
    slug: "week",
    description: "A simple weekly overview with goals and daily blocks.",
    free: false,
    icon: "02",
    fields: [
      { name: "title", label: "Page title", type: "text", default: "This Week" },
      { name: "date", label: "Week of", type: "date" },
      { name: "startDay", label: "Start of week", type: "select", default: "monday", options: [{ label: "Monday", value: "monday" }, { label: "Sunday", value: "sunday" }] },
      { name: "fontSize", label: "Font size", type: "select", default: "normal", options: [{ label: "Normal", value: "normal" }, { label: "Large", value: "large" }] },
      { name: "showGoals", label: "Weekly goals", type: "toggle", default: true },
    ],
  },
  {
    name: "Waiting On",
    slug: "waiting",
    description: "Track things you're waiting on from other people.",
    free: false,
    icon: "03",
    fields: [
      { name: "title", label: "Page title", type: "text", default: "Waiting On" },
      { name: "date", label: "Date", type: "date" },
      { name: "fontSize", label: "Font size", type: "select", default: "normal", options: [{ label: "Normal", value: "normal" }, { label: "Large", value: "large" }] },
      { name: "showNotes", label: "Notes section", type: "toggle", default: true },
    ],
  },
  {
    name: "Notes Page",
    slug: "notes",
    description: "A clean lined or blank page for writing things down.",
    free: true,
    icon: "04",
    fields: [
      { name: "title", label: "Page title", type: "text", default: "Notes" },
      { name: "date", label: "Date", type: "date" },
      { name: "lineStyle", label: "Line style", type: "select", default: "lined", options: [{ label: "Lined", value: "lined" }, { label: "Blank", value: "blank" }, { label: "Dotted", value: "dotted" }] },
      { name: "fontSize", label: "Font size", type: "select", default: "normal", options: [{ label: "Normal", value: "normal" }, { label: "Large", value: "large" }] },
    ],
  },
  {
    name: "Decision Helper",
    slug: "decision",
    description: "Weigh pros, cons, and factors for a clear decision.",
    free: false,
    icon: "05",
    fields: [
      { name: "title", label: "Page title", type: "text", default: "Decision" },
      { name: "date", label: "Date", type: "date" },
      { name: "fontSize", label: "Font size", type: "select", default: "normal", options: [{ label: "Normal", value: "normal" }, { label: "Large", value: "large" }] },
      { name: "showFactors", label: "Key factors section", type: "toggle", default: true },
      { name: "showConclusion", label: "Conclusion section", type: "toggle", default: true },
    ],
  },
  {
    name: "Admin Checklist",
    slug: "admin",
    description: "A structured checklist for recurring admin tasks.",
    free: false,
    icon: "06",
    fields: [
      { name: "title", label: "Page title", type: "text", default: "Admin" },
      { name: "date", label: "Date", type: "date" },
      { name: "fontSize", label: "Font size", type: "select", default: "normal", options: [{ label: "Normal", value: "normal" }, { label: "Large", value: "large" }] },
      { name: "showCategories", label: "Category headers", type: "toggle", default: true },
      { name: "showNotes", label: "Notes section", type: "toggle", default: true },
    ],
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

import { Zap, BookOpen, Smile, MousePointerClick, BarChart3, Bot } from "lucide-react";

const features = [
  {
    icon: Smile,
    title: "Expressive Otter Mascot",
    description: "Your otter reacts in real-time — confused when errors appear, happy when your code is clean.",
    emoji: "🦦",
  },
  {
    icon: Zap,
    title: "AI-Powered Explanations",
    description: "Select problematic code and get clear, beginner-friendly explanations powered by AI.",
    emoji: "🤖",
  },
  {
    icon: MousePointerClick,
    title: "One-Click Insights",
    description: "Click the OtterDr status bar button to instantly trigger analysis on your highlighted code.",
    emoji: "📊",
  },
  {
    icon: BookOpen,
    title: "Learn, Don't Just Fix",
    description: "Understand the 'why' behind errors so you write more resilient code over time.",
    emoji: "🧠",
  },
  {
    icon: Bot,
    title: "Integrated VS Code Panel",
    description: "AI explanations and suggestions appear directly in a dedicated panel — no context switching.",
    emoji: "🎯",
  },
  {
    icon: BarChart3,
    title: "Belly Scratches Included",
    description: "Scratch OtterDr's belly to brighten your dev session. Because debugging should be fun!",
    emoji: "😊",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Developers Love OtterDr
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Error messages shouldn't be scary. OtterDr makes debugging less intimidating, more educational, and a lot more fun.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 hover-float shadow-sm hover:shadow-md transition-shadow"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-2xl">
                  {feature.emoji}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

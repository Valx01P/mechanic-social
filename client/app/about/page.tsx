import { Users, Target, Heart, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const teamMembers = [
  {
    name: "Alexandra Chen",
    role: "Co-Founder & CEO",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&auto=format",
    bio: "Former automotive engineer with a passion for making car care transparent and accessible.",
  },
  {
    name: "Michael Torres",
    role: "Co-Founder & CTO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format",
    bio: "Full-stack engineer who built his first app in his garage. Loves cars and clean code equally.",
  },
  {
    name: "Samantha Wright",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&auto=format",
    bio: "Operations guru with a background in logistics and marketplace management.",
  },
  {
    name: "David Park",
    role: "Head of Mechanic Relations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format",
    bio: "Former master mechanic turned community builder. Advocates for fair pay and transparency.",
  },
]

const stats = [
  { value: "500+", label: "Verified Mechanics" },
  { value: "10,000+", label: "Happy Customers" },
  { value: "50,000+", label: "Bookings Completed" },
  { value: "4.8★", label: "Average Rating" },
]

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "Every mechanic on our platform is verified and reviewed by real customers. No hidden fees, no surprises.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We empower local mechanics and help them grow their businesses while connecting them with drivers who need their expertise.",
  },
  {
    icon: Target,
    title: "Quality Assurance",
    description:
      "We maintain strict quality standards and continuously monitor reviews to ensure every customer gets the service they deserve.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description:
      "Our support team is available seven days a week to help you with booking, disputes, or any automotive questions.",
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-500 text-white py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About MechanicFinder</h1>
          <p className="text-lg text-blue-100 leading-relaxed">
            We started MechanicFinder because finding a trustworthy mechanic should not feel like a gamble.
            Our platform connects drivers with verified, reviewed local mechanics — making car care easy, transparent, and stress-free.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-white border-b border-[hsl(var(--border))]">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-blue-600 mb-1">{stat.value}</p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-[hsl(var(--background))]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              We believe every driver deserves honest, professional car care at a fair price.
              These are the principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <CardContent className="p-6 flex gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg h-fit shrink-0">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                      {description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Team */}
      <section className="py-16 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
            <p className="text-[hsl(var(--muted-foreground))]">
              The people behind MechanicFinder are passionate about cars, technology, and great customer experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center overflow-hidden">
                <div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover object-top"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-0.5">{member.name}</h3>
                  <p className="text-xs text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

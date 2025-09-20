import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Users, 
  Calendar, 
  BookOpen, 
  Activity, 
  TrendingUp, 
  Heart, 
  MessageCircle,
  Plus,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";

const quickStats = [
  {
    title: "Wellness Score",
    value: "84%",
    change: "+12%",
    icon: Activity,
    color: "text-success",
  },
  {
    title: "Mood Streak",
    value: "7 days",
    change: "Personal best",
    icon: Heart,
    color: "text-accent",
  },
  {
    title: "Active Pods",
    value: "3",
    change: "2 new messages",
    icon: Users,
    color: "text-primary",
  },
  {
    title: "Sessions Completed",
    value: "12",
    change: "+3 this week",
    icon: Brain,
    color: "text-primary",
  },
];

const recentActivities = [
  {
    type: "mood",
    title: "Mood logged: Optimistic",
    time: "2 hours ago",
    icon: Heart,
    color: "bg-success/10 text-success",
  },
  {
    type: "pod",
    title: "New message in Study Support Pod",
    time: "4 hours ago",
    icon: MessageCircle,
    color: "bg-primary/10 text-primary",
  },
  {
    type: "session",
    title: "Completed VR meditation session",
    time: "Yesterday",
    icon: Brain,
    color: "bg-accent/10 text-accent",
  },
  {
    type: "journal",
    title: "Journal entry: Gratitude practice",
    time: "2 days ago",
    icon: BookOpen,
    color: "bg-muted text-muted-foreground",
  },
];

const aiInsights = [
  {
    title: "Your stress levels tend to peak on Tuesdays",
    suggestion: "Consider scheduling your meditation sessions on Monday evenings",
    confidence: 89,
  },
  {
    title: "You're most positive after peer pod interactions",
    suggestion: "Try engaging more in your Study Support Pod",
    confidence: 76,
  },
  {
    title: "Your sleep quality affects next-day mood significantly",
    suggestion: "Focus on your evening routine this week",
    confidence: 94,
  },
];

export default function Dashboard() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("week");

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-semibold text-foreground mb-2">
            Welcome back, Jordan
          </h1>
          <p className="text-muted-foreground">
            Here's your mental wellness overview for today.
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="card-premium hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                    <Badge variant="secondary" className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-2xl font-serif font-semibold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.title}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* AI Insights */}
            <Card className="card-warm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span>EmotionTwin AI Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {aiInsights.map((insight, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">
                          {insight.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {insight.suggestion}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-muted-foreground">
                            {insight.confidence}% confidence
                          </span>
                          <Progress value={insight.confidence} className="w-20 h-1" />
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="btn-minimal">
                        Apply
                      </Button>
                    </div>
                    {index < aiInsights.length - 1 && (
                      <hr className="border-border/30" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Link to="/emotion-twin">
                    <Button variant="outline" className="w-full h-20 flex-col space-y-2 hover-lift">
                      <Brain className="w-6 h-6" />
                      <span className="text-sm">Log Mood</span>
                    </Button>
                  </Link>
                  
                  <Link to="/journal">
                    <Button variant="outline" className="w-full h-20 flex-col space-y-2 hover-lift">
                      <BookOpen className="w-6 h-6" />
                      <span className="text-sm">Write Journal</span>
                    </Button>
                  </Link>
                  
                  <Link to="/calmscapes">
                    <Button variant="outline" className="w-full h-20 flex-col space-y-2 hover-lift">
                      <MessageCircle className="w-6 h-6" />
                      <span className="text-sm">Start Session</span>
                    </Button>
                  </Link>
                  
                  <Link to="/peer-pods">
                    <Button variant="outline" className="w-full h-20 flex-col space-y-2 hover-lift">
                      <Users className="w-6 h-6" />
                      <span className="text-sm">Join Pod</span>
                    </Button>
                  </Link>
                  
                  <Link to="/counselor">
                    <Button variant="outline" className="w-full h-20 flex-col space-y-2 hover-lift">
                      <Calendar className="w-6 h-6" />
                      <span className="text-sm">Book Session</span>
                    </Button>
                  </Link>
                  
                  <Button variant="outline" className="w-full h-20 flex-col space-y-2 hover-lift">
                    <Plus className="w-6 h-6" />
                    <span className="text-sm">More Actions</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${activity.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">
                          {activity.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Weekly Goal */}
            <Card className="card-warm">
              <CardHeader>
                <CardTitle className="text-lg">Weekly Goal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Meditation Sessions</span>
                    <span className="text-sm text-muted-foreground">4/7</span>
                  </div>
                  <Progress value={57} className="h-2" />
                </div>
                
                <p className="text-sm text-muted-foreground">
                  You're doing great! Complete 3 more sessions to reach your weekly goal.
                </p>
                
                <Button size="sm" className="w-full btn-hero">
                  Start Session
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
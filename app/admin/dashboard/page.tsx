"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  FileText, 
  TrendingUp, 
  Eye, 
  Plus, 
  BarChart3,
  Calendar,
  MessageSquare,
  Settings
} from 'lucide-react';

const stats = [
  {
    title: 'Total Users',
    value: '2,847',
    change: '+12%',
    trend: 'up',
    icon: Users,
  },
  {
    title: 'Published Content',
    value: '156',
    change: '+8%',
    trend: 'up',
    icon: FileText,
  },
  {
    title: 'Page Views',
    value: '45.2K',
    change: '+23%',
    trend: 'up',
    icon: Eye,
  },
  {
    title: 'Engagement Rate',
    value: '68%',
    change: '+5%',
    trend: 'up',
    icon: TrendingUp,
  },
];

const recentContent = [
  {
    title: 'Building Scalable React Applications',
    status: 'Published',
    views: '1.2K',
    date: 'Dec 15, 2024',
    category: 'React',
  },
  {
    title: 'Modern CSS Grid Techniques',
    status: 'Draft',
    views: '0',
    date: 'Dec 14, 2024',
    category: 'CSS',
  },
  {
    title: 'TypeScript Best Practices 2024',
    status: 'Published',
    views: '856',
    date: 'Dec 12, 2024',
    category: 'TypeScript',
  },
  {
    title: 'Next.js App Router Deep Dive',
    status: 'Review',
    views: '0',
    date: 'Dec 10, 2024',
    category: 'Next.js',
  },
];

const recentUsers = [
  {
    name: 'Sarah Chen',
    email: 'sarah@example.com',
    joinDate: 'Dec 15, 2024',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
  },
  {
    name: 'Alex Rodriguez',
    email: 'alex@example.com',
    joinDate: 'Dec 14, 2024',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
  },
  {
    name: 'Mike Johnson',
    email: 'mike@example.com',
    joinDate: 'Dec 13, 2024',
    status: 'Pending',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
  },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-gray-400">Welcome back! Here's what's happening with your platform.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Create Content
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="bg-zinc-900 border-zinc-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <p className="text-xs text-green-400 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Content */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Recent Content</CardTitle>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
              <CardDescription>Latest articles and posts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentContent.map((content, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50">
                    <div className="flex-1">
                      <h4 className="font-medium text-white text-sm">{content.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge 
                          variant={content.status === 'Published' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {content.status}
                        </Badge>
                        <span className="text-xs text-gray-400">{content.category}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-white">{content.views} views</div>
                      <div className="text-xs text-gray-400">{content.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Users */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Recent Users</CardTitle>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
              <CardDescription>New user registrations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUsers.map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50">
                    <div className="flex items-center gap-3">
                      <img 
                        src={user.avatar} 
                        alt={user.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <h4 className="font-medium text-white text-sm">{user.name}</h4>
                        <p className="text-xs text-gray-400">{user.email}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={user.status === 'Active' ? 'default' : 'secondary'}
                        className="text-xs mb-1"
                      >
                        {user.status}
                      </Badge>
                      <div className="text-xs text-gray-400">{user.joinDate}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-white">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-zinc-900 border-zinc-800 cursor-pointer hover:bg-zinc-800 transition-colors">
              <CardContent className="p-6 text-center">
                <FileText className="h-8 w-8 mx-auto mb-3 text-blue-400" />
                <h3 className="font-medium text-white mb-2">Create Article</h3>
                <p className="text-sm text-gray-400">Write a new blog post or article</p>
              </CardContent>
            </Card>
            
            <Card className="bg-zinc-900 border-zinc-800 cursor-pointer hover:bg-zinc-800 transition-colors">
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-8 w-8 mx-auto mb-3 text-green-400" />
                <h3 className="font-medium text-white mb-2">View Analytics</h3>
                <p className="text-sm text-gray-400">Check platform performance</p>
              </CardContent>
            </Card>
            
            <Card className="bg-zinc-900 border-zinc-800 cursor-pointer hover:bg-zinc-800 transition-colors">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-8 w-8 mx-auto mb-3 text-purple-400" />
                <h3 className="font-medium text-white mb-2">Manage Comments</h3>
                <p className="text-sm text-gray-400">Review and moderate comments</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
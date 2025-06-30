"use client";

import { FunctionComponent } from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  FileText, 
  TrendingUp, 
  Eye, 
  Plus, 
  BarChart3
} from 'lucide-react';

const DashboardDemoPage: FunctionComponent = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '2,847',
      change: '+12%',
      icon: Users,
    },
    {
      title: 'Published Content',
      value: '156',
      change: '+8%',
      icon: FileText,
    },
    {
      title: 'Page Views',
      value: '45.2K',
      change: '+23%',
      icon: Eye,
    },
    {
      title: 'Engagement Rate',
      value: '68%',
      change: '+5%',
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
  ];

  return (
    <DashboardLayout 
      activeSection="home"
      title="keep sharing knowledge"
      subtitle="Welcome back! Here's what's happening with your platform."
      showPagination={false}
    >
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

        {/* Quick Actions */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-zinc-800 border-zinc-700 cursor-pointer hover:bg-zinc-700 transition-colors">
                <CardContent className="p-4 text-center">
                  <FileText className="h-8 w-8 mx-auto mb-3 text-blue-400" />
                  <h3 className="font-medium text-white mb-2">Create Article</h3>
                  <p className="text-sm text-gray-400">Write a new blog post or article</p>
                </CardContent>
              </Card>
              
              <Card className="bg-zinc-800 border-zinc-700 cursor-pointer hover:bg-zinc-700 transition-colors">
                <CardContent className="p-4 text-center">
                  <BarChart3 className="h-8 w-8 mx-auto mb-3 text-green-400" />
                  <h3 className="font-medium text-white mb-2">View Analytics</h3>
                  <p className="text-sm text-gray-400">Check platform performance</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DashboardDemoPage;
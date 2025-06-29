"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Plus, 
  Download,
  Eye,
  Edit,
  Trash2,
  Calendar,
  TrendingUp
} from 'lucide-react';

const content = [
  {
    id: 1,
    title: 'Building Scalable React Applications',
    author: 'Sarah Chen',
    category: 'React',
    status: 'Published',
    publishDate: 'Dec 15, 2024',
    views: 1247,
    likes: 89,
    comments: 23,
    readTime: '8 min',
    featured: true,
  },
  {
    id: 2,
    title: 'Modern CSS Grid Techniques',
    author: 'Alex Rodriguez',
    category: 'CSS',
    status: 'Draft',
    publishDate: 'Dec 14, 2024',
    views: 0,
    likes: 0,
    comments: 0,
    readTime: '6 min',
    featured: false,
  },
  {
    id: 3,
    title: 'TypeScript Best Practices 2024',
    author: 'Mike Johnson',
    category: 'TypeScript',
    status: 'Published',
    publishDate: 'Dec 12, 2024',
    views: 856,
    likes: 67,
    comments: 15,
    readTime: '10 min',
    featured: true,
  },
  {
    id: 4,
    title: 'Next.js App Router Deep Dive',
    author: 'Emma Wilson',
    category: 'Next.js',
    status: 'Review',
    publishDate: 'Dec 10, 2024',
    views: 0,
    likes: 0,
    comments: 0,
    readTime: '12 min',
    featured: false,
  },
  {
    id: 5,
    title: 'Database Optimization Strategies',
    author: 'David Kim',
    category: 'Database',
    status: 'Published',
    publishDate: 'Dec 8, 2024',
    views: 634,
    likes: 45,
    comments: 12,
    readTime: '15 min',
    featured: false,
  },
  {
    id: 6,
    title: 'API Design Principles',
    author: 'Lisa Zhang',
    category: 'API',
    status: 'Published',
    publishDate: 'Dec 5, 2024',
    views: 423,
    likes: 32,
    comments: 8,
    readTime: '9 min',
    featured: false,
  },
];

const stats = [
  { label: 'Total Articles', value: '156', change: '+8%' },
  { label: 'Published', value: '134', change: '+12%' },
  { label: 'Drafts', value: '18', change: '-5%' },
  { label: 'Total Views', value: '45.2K', change: '+23%' },
];

export default function AdminContentPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Draft': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Review': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Content Management</h1>
            <p className="text-gray-400">Manage all articles, tutorials, and resources on your platform.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Create Content
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <p className="text-sm text-gray-400">{stat.label}</p>
                <p className="text-xs text-green-400 mt-1">{stat.change} from last month</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters and Search */}
        <Card className="bg-zinc-900 border-zinc-800 mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search content by title or author..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white"
                >
                  <option value="all">All Categories</option>
                  <option value="react">React</option>
                  <option value="css">CSS</option>
                  <option value="typescript">TypeScript</option>
                  <option value="nextjs">Next.js</option>
                  <option value="database">Database</option>
                  <option value="api">API</option>
                </select>
                <select 
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white"
                >
                  <option value="all">All Status</option>
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                  <option value="review">Review</option>
                </select>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Table */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-white">Content</CardTitle>
            <CardDescription>All articles and resources on your platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Title</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Author</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Category</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Performance</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Date</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {content.map((item) => (
                    <tr key={item.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <div>
                            <div className="font-medium text-white flex items-center gap-2">
                              {item.title}
                              {item.featured && (
                                <Badge variant="outline" className="text-xs">
                                  Featured
                                </Badge>
                              )}
                            </div>
                            <div className="text-sm text-gray-400">{item.readTime} read</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-white">{item.author}</div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant="secondary">
                          {item.category}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={getStatusColor(item.status)}>
                          {item.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm">
                            <Eye className="h-3 w-3" />
                            <span className="text-white">{item.views}</span>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-gray-400">
                            <span>♥ {item.likes}</span>
                            <span>💬 {item.comments}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm text-gray-300">{item.publishDate}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatCard {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: string;
}

interface QuickAction {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  stats: StatCard[] = [
    { label: 'Total Users', value: '12,438', change: '+4.2%', positive: true, icon: '👥' },
    { label: 'Active Posts', value: '3,921', change: '+2.8%', positive: true, icon: '📝' },
    { label: 'Total Comments', value: '28,650', change: '+6.1%', positive: true, icon: '💬' },
    { label: 'New Users (7 days)', value: '312', change: '+9.5%', positive: true, icon: '✨' },
    { label: 'Pending Moderation', value: '47', change: '-3.4%', positive: false, icon: '🚩' },
    { label: 'Daily Engagement Rate', value: '68%', change: '+1.2%', positive: true, icon: '📊' }
  ];

  quickActions: QuickAction[] = [
    { title: 'Review Moderation Queue', description: '47 items awaiting review', icon: '🛡️' },
    { title: 'Manage Users', description: 'View, suspend, or promote users', icon: '👤' },
    { title: 'View Reported Posts', description: '12 posts flagged this week', icon: '⚠️' },
    { title: 'Platform Settings', description: 'Update site-wide configuration', icon: '⚙️' }
  ];
}

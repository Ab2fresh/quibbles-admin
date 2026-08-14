import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Kpi {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
  sparkline: number[];
}

interface NavTile {
  title: string;
  description: string;
  action: string;
  accent: string;
  icon: string;
  badge?: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  kpis: Kpi[] = [
    { label: 'Total Users', value: '12,438', delta: '+4.2% this week', positive: true, sparkline: [4,6,5,8,7,9,12] },
    { label: 'Active Posts', value: '3,921', delta: '+2.8% this week', positive: true, sparkline: [8,7,9,10,9,11,13] },
    { label: 'Total Comments', value: '28,650', delta: '+6.1% this week', positive: true, sparkline: [5,6,7,7,9,10,12] },
    { label: 'New Users (7 days)', value: '312', delta: '+9.5% this week', positive: true, sparkline: [3,4,4,6,7,8,10] },
    { label: 'Pending Moderation', value: '47', delta: '-3.4% this week', positive: false, sparkline: [12,11,13,12,10,9,8] },
    { label: 'Daily Engagement Rate', value: '68%', delta: '+1.2% this week', positive: true, sparkline: [9,10,9,11,10,12,13] }
  ];

  navTiles: NavTile[] = [
    { title: 'User Management', description: 'Search users, view activity, change roles, suspend or reactivate accounts.', action: 'Manage', accent: 'violet', icon: 'users' },
    { title: 'Post Management', description: 'View, edit or remove posts, flag content, run bulk moderation actions.', action: 'Moderate', accent: 'emerald', icon: 'doc' },
    { title: 'Comment Management', description: 'Review comments by post or author, hide or delete offensive replies.', action: 'Review', accent: 'cyan', icon: 'chat' },
    { title: 'Moderation Queue', description: 'Approve, reject or escalate flagged posts and comments awaiting review.', action: 'Respond', accent: 'amber', icon: 'flag', badge: '47' },
    { title: 'Analytics & Reporting', description: 'Growth trends, engagement charts and daily platform-wide statistics.', action: 'Explore', accent: 'blue', icon: 'chart' },
    { title: 'Roles & Permissions', description: 'Define Super Admin, Moderator, Support and Read-only access levels.', action: 'Configure', accent: 'rose', icon: 'shield' },
    { title: 'Platform Settings', description: 'Site-wide configuration, moderation rules and notification preferences.', action: 'Adjust', accent: 'indigo', icon: 'settings' },
    { title: 'Audit Logs', description: 'Full timeline of admin actions, account changes and session activity.', action: 'Inspect', accent: 'slate', icon: 'clock' }
  ];

  pendingModeration = 47;

  sparkPoints(values: number[]): string {
    const max = Math.max(...values);
    const min = Math.min(...values);
    const range = max - min || 1;
    const w = 100, h = 28;
    return values
      .map((v, i) => {
        const x = (i / (values.length - 1)) * w;
        const y = h - ((v - min) / range) * h;
        return `${x},${y}`;
      })
      .join(' ');
  }
}

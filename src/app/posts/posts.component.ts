import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  body: string;
  author: string;
  community: string;
  comments: number;
  votes: number;
  views: number;
  reports: number;
  hasMedia: boolean;
  created: string;
  status: 'Published' | 'Flagged' | 'Archived';
  flagReason?: string;
  moderatedBy?: string;
  moderatedAt?: string;
  selected?: boolean;
}

type SortKey = 'title' | 'author' | 'community' | 'comments' | 'votes' | 'views' | 'reports' | 'created';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  searchTerm = '';
  activeFilter: 'All' | 'Published' | 'Flagged' | 'Archived' = 'All';
  communityFilter = 'All';

  sortKey: SortKey = 'created';
  sortDirection: 'asc' | 'desc' = 'desc';

  currentPage = 1;
  pageSize = 8;

  detailPost: Post | null = null;
  editMode = false;
  editTitle = '';
  editBody = '';

  deleteTarget: Post | 'bulk' | null = null;

  flagModalTarget: Post | null = null;
  flagReasonInput = '';

  posts: Post[] = [
    { id: 1, title: 'No Herreros for Málaga in Blancos bulldozing', excerpt: 'Real Madrid opened a LaLiga campaign with...', body: 'Real Madrid opened a LaLiga campaign with a dominant win against Málaga, with fans praising the new bulldozing frontline. Herreros was notably absent from the squad list.', author: 'salam', community: 'Laliga', comments: 2, votes: 3, views: 11, reports: 0, hasMedia: false, created: 'Aug 30, 2026, 9:03 PM', status: 'Published' },
    { id: 2, title: 'Bruno TKO makes it Tractor Boys against men', excerpt: 'Manchester United came from behind to...', body: 'Manchester United came from behind to secure a dramatic win, with Bruno Fernandes at the center of the comeback.', author: 'salam', community: 'PremierLeague', comments: 3, votes: 3, views: 10, reports: 0, hasMedia: true, created: 'Aug 30, 2026, 8:58 PM', status: 'Published' },
    { id: 3, title: 'Many will wake up today to owing sporty bet!', excerpt: 'Many will wake up to owing sportybet...', body: 'Many will wake up to owing sportybet after last night\'s unexpected results across the board. Screenshots have been circulating.', author: 'you', community: 'NEWS', comments: 2, votes: 6, views: 77, reports: 3, hasMedia: true, created: 'Aug 30, 2026, 7:47 PM', status: 'Flagged', flagReason: 'Promotes gambling without disclaimer', moderatedBy: 'quibmod', moderatedAt: 'Aug 30, 2026, 8:10 PM' },
    { id: 4, title: 'THE MOST STREAMED PROJECTS IN NIGERIA H1 OF 2026', excerpt: 'THE MOST STREAMED PROJECTS IN...', body: 'A full breakdown of the most streamed music projects in Nigeria for the first half of 2026, ranked by platform data.', author: 'you', community: 'Ismusictherapy', comments: 2, votes: 6, views: 73, reports: 0, hasMedia: true, created: 'Aug 30, 2026, 7:43 PM', status: 'Published' },
    { id: 5, title: 'Affordable student housing options near FUTA', excerpt: 'A roundup of budget-friendly hostels and...', body: 'A roundup of budget-friendly hostels and apartments near FUTA campus, with rough price ranges for the new session.', author: 'quibmod', community: 'FUTA', comments: 5, votes: 12, views: 140, reports: 0, hasMedia: false, created: 'Aug 29, 2026, 4:12 PM', status: 'Archived', moderatedBy: 'quibmod', moderatedAt: 'Aug 29, 2026, 5:00 PM' },
    { id: 6, title: 'If you haven\'t tried these Nigerian dishes, you\'re missing out!', excerpt: 'From jollof to ofada rice, a taste tour...', body: 'From jollof to ofada rice, a taste tour of underrated Nigerian dishes every food lover should try at least once.', author: 'Success_bot', community: 'Food', comments: 24, votes: 24, views: 340, reports: 0, hasMedia: true, created: 'Aug 28, 2026, 6:10 PM', status: 'Published' },
    { id: 7, title: 'Friday Language Contest is open!!! Send in your story', excerpt: 'Stand a chance to win this week\'s contest...', body: 'Stand a chance to win this week\'s language contest by submitting an original short story before Sunday midnight.', author: 'quibmod', community: 'Language', comments: 8, votes: 41, views: 512, reports: 0, hasMedia: true, created: 'Aug 28, 2026, 9:00 AM', status: 'Published' },
    { id: 8, title: 'Police patrol in major city districts', excerpt: 'Security measures have been intensified following...', body: 'Security measures have been intensified following recent developments, with visible patrols increased across metropolitan hubs.', author: 'news_bot', community: 'NEWS', comments: 14, votes: 56, views: 890, reports: 0, hasMedia: true, created: 'Aug 27, 2026, 3:20 PM', status: 'Published' },
    { id: 9, title: 'EMOJI + LETTERS: Guess the Noun! Can you crack these?', excerpt: 'A challenging puzzle for the sharpest minds...', body: 'A challenging puzzle for the sharpest minds in our community. Test your lateral thinking with our weekly emoji decipher challenge.', author: 'beatrixblaze', community: 'PlayZone', comments: 449, votes: 148, views: 2100, reports: 0, hasMedia: false, created: 'Aug 20, 2026, 11:15 AM', status: 'Published' },
    { id: 10, title: 'Let\'s have some fun. Choose ONE option from each pair', excerpt: 'Drop your answers in the comments below...', body: 'Drop your answers in the comments below and see how your choices compare to everyone else\'s.', author: 'jollyfam', community: 'Interaction', comments: 66, votes: 88, views: 970, reports: 0, hasMedia: false, created: 'Aug 24, 2026, 2:45 PM', status: 'Published' },
    { id: 11, title: 'My situationship just asked to \'define the relationship\' — help', excerpt: 'Not sure how to respond, need advice from...', body: 'Not sure how to respond, need advice from people who\'ve been through something similar.', author: 'anon_heart', community: 'Relationship', comments: 37, votes: 19, views: 610, reports: 2, hasMedia: false, created: 'Aug 26, 2026, 10:05 PM', status: 'Flagged', flagReason: 'Possible impersonation / fake account', moderatedBy: 'support_ada', moderatedAt: 'Aug 27, 2026, 8:00 AM' },
    { id: 12, title: 'Remote junior dev roles hiring this month', excerpt: 'A curated list of companies actively hiring...', body: 'A curated list of companies actively hiring remote junior developers this month, updated weekly.', author: 'careerbot', community: 'Jobs', comments: 9, votes: 22, views: 430, reports: 0, hasMedia: false, created: 'Aug 25, 2026, 8:30 AM', status: 'Published' },
    { id: 13, title: 'This community is turning into spam, mods please look', excerpt: 'Too many low-effort posts flooding the feed...', body: 'Too many low-effort posts flooding the feed lately, would appreciate some moderation attention here.', author: 'quietuser99', community: 'gist_corner', comments: 3, votes: -2, views: 88, reports: 5, hasMedia: false, created: 'Aug 23, 2026, 1:00 PM', status: 'Flagged', flagReason: 'Reported by multiple users as spam', moderatedBy: 'quibmod', moderatedAt: 'Aug 23, 2026, 2:30 PM' },
    { id: 14, title: 'World Cup qualifiers: who\'s your dark horse pick?', excerpt: 'Drop your predictions before kickoff this weekend...', body: 'Drop your predictions before kickoff this weekend — best predictions get pinned to the community.', author: 'ballknowledge', community: 'World_Cup', comments: 58, votes: 74, views: 1200, reports: 0, hasMedia: true, created: 'Aug 22, 2026, 7:00 PM', status: 'Published' },
    { id: 15, title: 'Old scholarship thread — deadline has passed', excerpt: 'Leaving this up for reference, applications closed...', body: 'Leaving this up for reference, applications closed on July 1st. New scholarship threads will be posted separately.', author: 'quibmod', community: 'Scholarships', comments: 12, votes: 30, views: 640, reports: 0, hasMedia: false, created: 'Jul 15, 2026, 9:00 AM', status: 'Archived', moderatedBy: 'quibmod', moderatedAt: 'Jul 15, 2026, 9:05 AM' },
  ];

  get communities(): string[] {
    const set = new Set(this.posts.map(p => p.community));
    return ['All', ...Array.from(set).sort()];
  }

  get filteredPosts(): Post[] {
    let result = this.posts.filter(p => {
      const matchesFilter = this.activeFilter === 'All' || p.status === this.activeFilter;
      const matchesCommunity = this.communityFilter === 'All' || p.community === this.communityFilter;
      const matchesSearch =
        p.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        p.author.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesFilter && matchesCommunity && matchesSearch;
    });

    result = [...result].sort((a, b) => {
      let valA: string | number = a[this.sortKey] as any;
      let valB: string | number = b[this.sortKey] as any;
      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();
      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredPosts.length / this.pageSize));
  }

  get paginatedPosts(): Post[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredPosts.slice(start, start + this.pageSize);
  }

  get selectedCount(): number {
    return this.posts.filter(p => p.selected).length;
  }

  setFilter(filter: 'All' | 'Published' | 'Flagged' | 'Archived') {
    this.activeFilter = filter;
    this.currentPage = 1;
  }

  setCommunityFilter(community: string) {
    this.communityFilter = community;
    this.currentPage = 1;
  }

  onSearchChange() {
    this.currentPage = 1;
  }

  sortBy(key: SortKey) {
    if (this.sortKey === key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortDirection = 'asc';
    }
  }

  sortIcon(key: SortKey): string {
    if (this.sortKey !== key) return '↕';
    return this.sortDirection === 'asc' ? '↑' : '↓';
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) this.currentPage = page;
  }

  toggleAll(checked: boolean) {
    this.paginatedPosts.forEach(p => (p.selected = checked));
  }

  clearSelection() {
    this.posts.forEach(p => (p.selected = false));
  }

  openDetail(post: Post) {
    this.detailPost = post;
    this.editMode = false;
  }

  closeDetail() {
    this.detailPost = null;
    this.editMode = false;
  }

  enterEditMode() {
    if (!this.detailPost) return;
    this.editMode = true;
    this.editTitle = this.detailPost.title;
    this.editBody = this.detailPost.body;
  }

  saveEdit() {
    if (!this.detailPost) return;
    this.detailPost.title = this.editTitle;
    this.detailPost.body = this.editBody;
    this.detailPost.excerpt = this.editBody.slice(0, 60) + '...';
    this.editMode = false;
  }

  cancelEdit() {
    this.editMode = false;
  }

  requestDelete(post: Post) {
    this.deleteTarget = post;
  }

  requestBulkDelete() {
    this.deleteTarget = 'bulk';
  }

  cancelDelete() {
    this.deleteTarget = null;
  }

  confirmDelete() {
    if (this.deleteTarget === 'bulk') {
      this.posts = this.posts.filter(p => !p.selected);
    } else if (this.deleteTarget) {
      this.posts = this.posts.filter(p => p.id !== (this.deleteTarget as Post).id);
    }
    this.deleteTarget = null;
    this.detailPost = null;
  }

  approveSelected() {
    this.posts.forEach(p => { if (p.selected) { p.status = 'Published'; p.selected = false; } });
  }

  hideSelected() {
    this.posts.forEach(p => { if (p.selected) { p.status = 'Archived'; p.selected = false; } });
  }

  flagPost(post: Post, reason: string) {
    post.status = 'Flagged';
    post.flagReason = reason;
    post.moderatedBy = 'AB2FRESH';
    post.moderatedAt = new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
    if (this.detailPost && this.detailPost.id === post.id) this.detailPost = post;
  }

  archivePost(post: Post) {
    post.status = 'Archived';
    post.moderatedBy = 'AB2FRESH';
    post.moderatedAt = new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
    if (this.detailPost && this.detailPost.id === post.id) this.detailPost = post;
  }

  openFlagModal(post: Post) {
    this.flagModalTarget = post;
    this.flagReasonInput = '';
  }

  cancelFlag() {
    this.flagModalTarget = null;
    this.flagReasonInput = '';
  }

  confirmFlag() {
    if (this.flagModalTarget && this.flagReasonInput.trim()) {
      this.flagPost(this.flagModalTarget, this.flagReasonInput.trim());
    }
    this.flagModalTarget = null;
    this.flagReasonInput = '';
  }

  exportCsv() {
    const headers = ['ID', 'Title', 'Author', 'Community', 'Comments', 'Votes', 'Views', 'Reports', 'Status', 'Created'];
    const rows = this.filteredPosts.map(p => [p.id, `"${p.title.replace(/"/g, '""')}"`, p.author, p.community, p.comments, p.votes, p.views, p.reports, p.status, p.created]);
    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quibbles-posts-export.csv';
    a.click();
    URL.revokeObjectURL(url);
  }
}
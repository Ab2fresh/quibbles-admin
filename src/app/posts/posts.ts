import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  community: string;
  comments: number;
  votes: number;
  views: number;
  created: string;
  status: 'Published' | 'Flagged' | 'Archived';
  selected?: boolean;
}

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

  posts: Post[] = [
    { id: 1, title: 'No Herreros for Málaga in Blancos bulldozing', excerpt: 'Real Madrid opened a LaLiga campaign with...', author: 'salam', community: 'Laliga', comments: 2, votes: 3, views: 11, created: 'Aug 30, 2026, 9:03 PM', status: 'Published' },
    { id: 2, title: 'Bruno TKO makes it Tractor Boys against men', excerpt: 'Manchester United came from behind to...', author: 'salam', community: 'PremierLeague', comments: 3, votes: 3, views: 10, created: 'Aug 30, 2026, 8:58 PM', status: 'Published' },
    { id: 3, title: 'Many will wake up today to owing sporty bet!', excerpt: 'Many will wake up to owing sportybet...', author: 'you', community: 'NEWS', comments: 2, votes: 6, views: 77, created: 'Aug 30, 2026, 7:47 PM', status: 'Flagged' },
    { id: 4, title: 'THE MOST STREAMED PROJECTS IN NIGERIA H1 OF 2026', excerpt: 'THE MOST STREAMED PROJECTS IN...', author: 'you', community: 'Ismusictherapy', comments: 2, votes: 6, views: 73, created: 'Aug 30, 2026, 7:43 PM', status: 'Published' },
    { id: 5, title: 'Affordable student housing options near FUTA', excerpt: 'A roundup of budget-friendly hostels and...', author: 'quibmod', community: 'FUTA', comments: 5, votes: 12, views: 140, created: 'Aug 29, 2026, 4:12 PM', status: 'Archived' },
    { id: 6, title: 'If you haven\'t tried these Nigerian dishes, you\'re missing out!', excerpt: 'From jollof to ofada rice, a taste tour...', author: 'Success_bot', community: 'Food', comments: 24, votes: 24, views: 340, created: 'Aug 28, 2026, 6:10 PM', status: 'Published' },
    { id: 7, title: 'Friday Language Contest is open!!! Send in your story', excerpt: 'Stand a chance to win this week\'s contest...', author: 'quibmod', community: 'Language', comments: 8, votes: 41, views: 512, created: 'Aug 28, 2026, 9:00 AM', status: 'Published' },
    { id: 8, title: 'Police patrol in major city districts', excerpt: 'Security measures have been intensified following...', author: 'news_bot', community: 'NEWS', comments: 14, votes: 56, views: 890, created: 'Aug 27, 2026, 3:20 PM', status: 'Published' },
    { id: 9, title: 'EMOJI + LETTERS: Guess the Noun! Can you crack these?', excerpt: 'A challenging puzzle for the sharpest minds...', author: 'beatrixblaze', community: 'PlayZone', comments: 449, votes: 148, views: 2100, created: 'Aug 20, 2026, 11:15 AM', status: 'Published' },
    { id: 10, title: 'Let\'s have some fun. Choose ONE option from each pair', excerpt: 'Drop your answers in the comments below...', author: 'jollyfam', community: 'Interaction', comments: 66, votes: 88, views: 970, created: 'Aug 24, 2026, 2:45 PM', status: 'Published' },
    { id: 11, title: 'My situationship just asked to \'define the relationship\' — help', excerpt: 'Not sure how to respond, need advice from...', author: 'anon_heart', community: 'Relationship', comments: 37, votes: 19, views: 610, created: 'Aug 26, 2026, 10:05 PM', status: 'Flagged' },
    { id: 12, title: 'Remote junior dev roles hiring this month', excerpt: 'A curated list of companies actively hiring...', author: 'careerbot', community: 'Jobs', comments: 9, votes: 22, views: 430, created: 'Aug 25, 2026, 8:30 AM', status: 'Published' },
    { id: 13, title: 'This community is turning into spam, mods please look', excerpt: 'Too many low-effort posts flooding the feed...', author: 'quietuser99', community: 'gist_corner', comments: 3, votes: -2, views: 88, created: 'Aug 23, 2026, 1:00 PM', status: 'Flagged' },
    { id: 14, title: 'World Cup qualifiers: who\'s your dark horse pick?', excerpt: 'Drop your predictions before kickoff this weekend...', author: 'ballknowledge', community: 'World_Cup', comments: 58, votes: 74, views: 1200, created: 'Aug 22, 2026, 7:00 PM', status: 'Published' },
    { id: 15, title: 'Old scholarship thread — deadline has passed', excerpt: 'Leaving this up for reference, applications closed...', author: 'quibmod', community: 'Scholarships', comments: 12, votes: 30, views: 640, created: 'Jul 15, 2026, 9:00 AM', status: 'Archived' },
  ];

  get filteredPosts(): Post[] {
    return this.posts.filter(p => {
      const matchesFilter = this.activeFilter === 'All' || p.status === this.activeFilter;
      const matchesSearch =
        p.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        p.author.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }

  get selectedCount(): number {
    return this.posts.filter(p => p.selected).length;
  }

  toggleAll(checked: boolean) {
    this.filteredPosts.forEach(p => (p.selected = checked));
  }

  setFilter(filter: 'All' | 'Published' | 'Flagged' | 'Archived') {
    this.activeFilter = filter;
  }

  clearSelection() {
    this.posts.forEach(p => (p.selected = false));
  }
}

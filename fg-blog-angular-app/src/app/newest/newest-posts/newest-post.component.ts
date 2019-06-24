import { Component, OnInit } from '@angular/core';
import { NewestPostsService } from './newest-posts.service';

@Component({
  selector: 'app-newest',
  templateUrl: './newest-post.component.html',
  styleUrls: ['./newest-post.component.css']
})
export class NewestPostComponent implements OnInit {

  newestPost: [];

  constructor(private api: NewestPostsService) { }

  ngOnInit() {
    this.getNewestPost();
  }

  getNewestPost() {
    this.api.getNewestPost().subscribe(
      data => {
        this.newestPost = data;
      },
      error => {
        console.log('Get newest post: ', error);
      }
    );
  }

}

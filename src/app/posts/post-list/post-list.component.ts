import {Component, OnInit, OnDestroy} from '@angular/core';
import{Subscription}from'rxjs';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import{Post } from '../post.model';
import { PostsServer } from '../posts.servers';
import { from } from 'rxjs';
@Component({
    selector:'app-post-list',
    templateUrl:'./post-list.component.html',
    styleUrls:['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy{
    // posts=[
    //     {title:'First Post',content:'This is the first\'s content'},
    //     {title:'Second Post',content:'This is the second\'s content'},
    //     {title:'Third Post',content:'This is the third\'s content'}
    // ];
     posts:Post[]=[];
    private postsSub:Subscription;
     constructor(public postsService:PostsServer){}
    ngOnInit(){
        this.postsService.getPosts();
        this.postsSub=this.postsService.getPostUpdateListener()
        .subscribe((posts:Post[])=>{
            this.posts=posts;

        });
    }
    
    ngOnDestroy(){
        this.postsSub.unsubscribe();
    }

    
}
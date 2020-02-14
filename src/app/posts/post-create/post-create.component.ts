import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { PostsServer } from '../posts.servers';
@Component({
    selector:'app-post-create',
    templateUrl:'./post-create.component.html',
    styleUrls:['./post-create.component.css']
})
export class PostCreateComponent{
       enteredTitle = ''; 
       enteredContent='';
 
 
constructor(public postsService:PostsServer){}

    onAddPost(form:NgForm){
     if(form.invalid){
         return;
     }
      
     this.postsService.addPost(form.value.title,form.value.content);
     form.resetForm();
    } 


    
   
}
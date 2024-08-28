'use client'
import CreatePost from "@/src/components/CreatePost";
import styles from "./page.module.css";
import PostCard from "@/src/components/PostCard";
import { useState } from "react";

export default function Home() {
  const [ posts, setPosts ] = useState([])

  const handleSetPost = (post) => {
    setPosts(prev => [post,...prev])
  }

  

  return (
    <main className={styles.main}>
      <CreatePost setPost={handleSetPost}/>
      {
        posts?.map( (post, index) => {
          return <PostCard key={index} post={post}/>
        })
      } 
    </main>
  );
}

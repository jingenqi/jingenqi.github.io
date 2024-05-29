---
layout: page
title: Posts
permalink: /posts/
---

<!-- <h1>Blog Posts</h1> -->
{% for post in site.posts %}
  <h2><a href="{{ post.url | prepend: site.baseurl}}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt }}</p>
  <hr>
{% endfor %}
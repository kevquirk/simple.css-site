---
layout: default
title: Latest News
description: Want to know what's going on with Simple.css? This is a good place to start.
image: /assets/images/simple-css-feature.webp
---

{% for post in site.posts %}
  <div class="blog-item">
    <a class="post-link" href="{{ post.url }}">{{ post.title }}</a>
    <p class="meta"><i>{{ post.description }}</i></p>
    <p class="meta">{{ post.date | date_to_string }}</p>
  </div>
{% endfor %}

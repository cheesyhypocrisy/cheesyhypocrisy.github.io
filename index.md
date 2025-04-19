---
layout: default
title: Home
---

# Welcome to Blog

This blog explores my journey through tech. Check out the latest posts below!

{% assign featured_post = site.posts.first %}
<section class="featured-post">
  <h2>Featured Post</h2>
  <div class="feature-card">
    <h3><a href="{{ featured_post.url | relative_url }}">{{ featured_post.title }}</a></h3>
    <p>{{ featured_post.excerpt | strip_html | truncatewords: 30 }}</p>
    <a href="{{ featured_post.url | relative_url }}" class="btn">Read This Post</a>
  </div>
</section>

<div class="search-container">
  <input type="text" id="search-input" placeholder="Search posts...">
  <div id="results-container"></div>
</div>

<h2>All Posts</h2>
<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a> - {{ post.date | date: "%-d %b %Y" }}
    </li>
  {% endfor %}
</ul>

<div class="category-nav">
  <h3>Browse by Topic</h3>
  <div class="category-buttons">
    {% for category in site.categories %}
      <a href="/categories/#{{ category[0] | slugify }}" class="category-btn">
        {{ category[0] }}
      </a>
    {% endfor %}
  </div>
</div>

<div class="newsletter">
  <h3>Stay Updated</h3>
  <p>Subscribe to get the latest posts straight to your inbox</p>
  <form action="YOUR_FORM_ENDPOINT" method="post">
    <input type="email" name="email" placeholder="Your email address" required>
    <button type="submit" class="btn">Subscribe</button>
  </form>
</div>


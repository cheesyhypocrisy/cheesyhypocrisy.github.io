---
layout: default
title: Archive
permalink: /archive/
---

# Archive

Browse all posts chronologically:

{% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
{% for year in postsByYear %}
  <h2>{{ year.name }}</h2>
  <ul>
    {% for post in year.items %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small>({{ post.date | date: "%b %d" }})</small>
      </li>
    {% endfor %}
  </ul>
{% endfor %}


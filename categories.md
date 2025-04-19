---
layout: default
title: Categories
permalink: /categories/
---

# Categories

Browse posts by topic:

{% for category in site.categories %}
  <h2 id="{{ category[0] | slugify }}">{{ category[0] }}</h2>
  <ul>
    {% for post in category[1] %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small>({{ post.date | date: "%b %d, %Y" }})</small>
      </li>
    {% endfor %}
  </ul>
{% endfor %}


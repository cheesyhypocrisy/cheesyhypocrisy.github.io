---
layout: default
title: Archive
permalink: /archive/
---

<div class="max-w-2xl mx-auto mt-12 mb-20 p-6 bg-white rounded-xl shadow-md">
  <h1 class="text-3xl font-bold text-gray-900 mb-4 text-center">Archive</h1>
  <p class="text-gray-600 mb-8 text-center">Browse all posts chronologically:</p>
  <div class="space-y-10">
    {% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
    {% for year in postsByYear %}
      <div>
        <h2 class="text-xl font-semibold text-blue-700 mb-3 border-l-4 border-blue-200 pl-3">{{ year.name }}</h2>
        <ul class="space-y-2 ml-4 border-l-2 border-gray-100 pl-4">
          {% for post in year.items %}
            <li class="relative">
              <span class="absolute left-[-18px] top-2 w-3 h-3 bg-blue-200 rounded-full border-2 border-white"></span>
              <a href="{{ post.url | relative_url }}" class="text-blue-700 hover:underline font-medium">{{ post.title }}</a>
              <span class="text-xs text-gray-400 ml-2">({{ post.date | date: "%b %d" }})</span>
            </li>
          {% endfor %}
        </ul>
      </div>
    {% endfor %}
  </div>
</div>

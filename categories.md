---
layout: default
title: Categories
permalink: /categories/
---

<div class="max-w-2xl mx-auto mt-12 mb-20 p-6 bg-white rounded-xl shadow-md">
  <h1 class="text-3xl font-bold text-gray-900 mb-4 text-center">Categories</h1>
  <p class="text-gray-600 mb-8 text-center">Browse posts by topic:</p>
  <div class="space-y-10">
    {% for category in site.categories %}
      <div>
        <h2 id="{{ category[0] | slugify }}" class="text-xl font-semibold mb-3">
          <span class="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{{ category[0] }}</span>
        </h2>
        <ul class="space-y-2 ml-4 border-l-2 border-gray-100 pl-4">
          {% for post in category[1] %}
            <li class="relative">
              <span class="absolute left-[-18px] top-2 w-3 h-3 bg-blue-200 rounded-full border-2 border-white"></span>
              <a href="{{ post.url | relative_url }}" class="text-blue-700 hover:underline font-medium">{{ post.title }}</a>
              <span class="text-xs text-gray-400 ml-2">({{ post.date | date: "%b %d, %Y" }})</span>
            </li>
          {% endfor %}
        </ul>
      </div>
    {% endfor %}
  </div>
</div>

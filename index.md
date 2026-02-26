---
layout: default
title: Guacamaya Lab
---

# Guacamaya Lab
An online notebook — unfinished, evolving, honest.

[About me](about.md)

## Notes

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>



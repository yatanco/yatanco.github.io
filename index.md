---
layout: home
title: Guacamaya Lab
---

An online notebook — unfinished, evolving, honest.

## Posts

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }}) — {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
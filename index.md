---
layout: default
---

## Latest Writing

{% for post in site.posts %}
### [{{ post.title }}]({{ post.url }})

{{ post.date | date: "%Y-%m-%d" }} — {{ post.excerpt | strip_html | truncate: 120 }}

{% endfor %}

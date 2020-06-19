---
layout: default
title: "Courses"
---
# Courses I've Taught
{% for object in site.data %}
	{% assign key = object[0] %}
	{% assign course = object[1] %}
	{% unless course.start %}
		{%continue%}
	{% endunless %}
* [{{course.title}}]({{ "courses/" | append: key | relative_url }})
{% endfor %}

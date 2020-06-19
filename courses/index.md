---
layout: default
title: "Andrew Pilsch's Courses"
---
# Courses I've Taught

{% capture courses %}{% for object in site.data %}{% unless object[1].start %}{%continue%}{% endunless %}{{ object[0] }} {% endfor %}{% endcapture %}
{% assign sortedcourses = courses | split: ' ' | sort %}
{% for key in sortedcourses %}{% assign course = site.data[key] %}
* [{{course.title | default: key }}]({{ "courses/" | append: key | relative_url }}){% endfor %}
{: .f2}

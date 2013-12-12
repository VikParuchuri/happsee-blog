---
layout: post
title: "The path to building something meaningful"
description: "Learning from mistakes and trying to build something."
category: ""
tags: []
author: Vik Paruchuri
author_link: http://www.vikparuchuri.com
---
{% include JB/setup %}

I've almost always been an employee.  Besides the steady paycheck being incredibly nice, you get this great concept of shared responsibility.  Feel like calling in sick?  Go ahead, the company will keep going (and sometimes won't even notice you are gone).  Customers don't like the product?  Good thing you have a team to work on making it better.  Don't feel like working too hard?  That's ok, there's always tomorrow.  I could go on, but I think you get the point.

Now, the fact that I am writing this in a blog for a startup probably tells you that I'm not an employee anymore.  "But why leave?", you might ask.  Frankly, all that stuff sounds pretty awesome.  The simple fact is that I wanted to start creating things that I believed in.  Things that could have a major impact on my life and the lives of those around me.  That's not to say that it's not possible to do those things while working at a company (and I have been able to at times).  It's just a matter of degree -- do you want to work on things that you care about a very small amount of the time or a larger amount of the time?

I'm working on an Android app called Happsee now.  It helps you track your happiness and share it with the people close to you.  Prior to Happsee, I worked on a couple of other projects, made a lot of mistakes, and learned a few things.  With your indulgence, I will describe them.

<!--break-->

## Percept

I worked on a framework to make machine learning easier called [percept](https://github.com/equirio/percept) a few months ago.  I built percept because of a real problem I was having.  I have competed in a lot of [Kaggle](http://www.kaggle.com) competitions, and got to do a small amount of machine learning at my previous job.  In both, the challenge was going from a development algorithm to something that was deployable and usable in a production setting.  Percept aimed to do this by breaking down each algorithm into separate "tasks" in a "workflow."

I've heard of a lot of startups doing this or something similar, like [Yhat](http://www.yhathq.com/), so why didn't it work?  The simple answer is, because I didn't stick to it.  And I didn't stick to it because I had no immediate use for it.  Without real users giving me real feedback, I couldn't summon enough enthusiasm to keep working on it.  I also didn't see an easy road into the market, or know who exactly to sell to.

All was not lost in that I did manage to use it to very quickly do well in the cause-effect pairs [Kaggle competition](http://www.kaggle.com/c/cause-effect-pairs).  I also did learn a lot in doing it.

## Movide

A little while after working on percept, I started to work on [Movide](http://www.movide.com).  Movide is an [open source](https://www.github.com/equirio/movide) student-centric learning platform.  It enables teachers to put course materials and quizzes online, and it enables students to collaborate on creating material.  I spent a couple of months working on it part time.

Why is Movide better than other solutions in the LMS space?  The interface is simpler, it is open source, it works well on mobile devices, and it enables students to contribute course materials.  Unfortunately, most of these advantages did not matter to the average teacher.  I went to a convention to sell Movide, and some people were nice enough to allow me to speak about it at meetups.  The basic theme emerged where teachers said "that is great," and then went to on the next product.  Education technology is a very crowded market, and unless something has little to no friction, teachers don't tend to adopt it (this is of course different for universities and professors, where there are course teams).  Movide unfortunately requires a decent amount of upfront time investment before it starts to become useful.

## Lessons

So, I did not succeed twice.  Fortunately, I didn't burn much time working on either project.  What lessons can we learn?

* Talk to people!  I didn't validate with percept, and validated with movide by trying out various edtech products.  In neither case did I actually interact with people to find out what they wanted beforehand.
* Build a very simple prototype.  Don't spend a lot of time building something before getting feedback.
* Don't worry too much about the technology you are using.  Worry about what the customer wants.  Most of my potential customers for Movide didn't care that it had a responsive design, that it had an API that made getting data in and out easy, or even that it was mobile-friendly.
* "Business skills" like marketing actually do matter a lot.  As a programmer, I had always very naively assumed that marketing was easier than it is.  Marketing isn't an arcane science, and it can be picked up, but it takes work.  I sometimes don't see non-coding time as "work," but this is wrong.
* Find something that really motivates you.  In my case, it is seeing the impact that your product has on users.
* Find people who really care about what you are doing.  This kind of ties into the above, but partners and super-users will help get you through the periods of self-doubt.  It's easy to get into the engineer mindset of just sitting at a computer and coding, but the interaction is as important or more so.

## Happsee

I started working on Happsee about a month and a half ago.  I described my reasons for starting on it in [another blog post](http://blog.happsee.com/intro/2013/12/09/why-happsee/), but the gist is that I had no good way to measure my own happiness and what affected it.  I certainly did not and am not doing everything perfectly, but I have tried to apply the lessons above to it.

Before building Happsee, I evaluated a lot of competing services, such as [track your happiness](http://www.trackyourhappiness.org/), [expereal](http://expereal.com/), and [emotionSense](https://play.google.com/store/apps/details?id=com.ubhave.emotionsense&hl=en).  They all have great qualities and doubtless add value, but my initial impression was that a lot of them were more geared towards doing research rather than adding value to the user.  I decided to quickly build a prototype Android app and start testing it.  My reasons for making a mobile app are ease of distribution, and greater capacity for user engagement.  When doing something like tracking happiness, it is far simpler to pull out your phone and tap a few buttons than to go to a website, login, and do the same.

I chose to develop for Android because I wanted to develop on a Linux machine, I had an Android device, the Android SDK let me do more of what I wanted, and more people use Android.  I didn't really know Java or how to make Android apps.  Fortunately, there are some great resources out there, and I was willing to learn.  I will have a full post on this later, but the [android documentation](http://developer.android.com/index.html) is awesome.

After building my prototype, I started marketing it to get a few initial users.  [Here](http://www.reddit.com/r/QuantifiedSelf/comments/1q5j0l/happsee_an_android_app_that_tracks_your_happiness/) is one such marketing post.  I identified a nice community (quantified self) that would be very interested in Happsee, and tried to reach them.  I also used [my own blog](http://vikparuchuri.com/blog/what-makes-people-happy/) to do some interesting analysis in the space, which let me have fun with interesting data, helped me better understand the problem, and connected me to potential users.

These initial users really helped with feedback and motivation.  I have also been fortunate enough to find some great partners.  Finding people, reaching out to them, and building a real relationship takes time, but is hugely valuable.

## The rest of it

I'm sure that there are lots of people who are in the same situation I was in.  I hope my own experiences are useful to you.  I'm not extremely far along, but I intend to keep blogging and posting lessons as I go along.

Please don't hesitate to contact me if I can help you out: <mailto:vik@equirio.com>.  If you want to try Happsee, you can sign up [here](http://www.happsee.com).
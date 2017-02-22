# hexo-tag-soundcloud

Embed soundcloud tracks tag plugin for [Hexo](https://github.com/hexojs/hexo).

## Introduction

This is a Hexo tag plugin which allows you to embed soundcloud tracks on your blog posts.

## DEMO

[https://tea3.github.io/p/hexo-tag-soundcloud/](https://tea3.github.io/p/hexo-tag-soundcloud/)

## Installation

```
npm install hexo-tag-soundcloud --save
```

## Usage


```
{% soundcloud url %}
```

or

```
{% soundcloud track-id %}
```


## Example

```
{% soundcloud https://soundcloud.com/officialmedasin/daydream-ft-joba-1 %}

or

{% soundcloud officialmedasin/daydream-ft-joba-1 %}

or

{% soundcloud 275308631 %}
```

In the above example, [this track](https://soundcloud.com/officialmedasin/daydream-ft-joba-1) can be embedded. All three example have the same contents can embed.


## Custom Players

This plugin can customize player parameters. To customize , please edit your `_config.yml` as following example.

```
# hexo-tag-soundcloud option
# This option will be applied everything tags in posts .
soundcloud:
  height: 300      # The default value of visual mode is 450 , and the default value of no-visual mode is 166 .
  visual: true     # The default value of true (visual player)
  color: c0f000    # The default value of ff5500 . This option is valid for no-visual players only.
  related: false   # The default value of true .
  comments: false  # The default value of true .
  user: false      # The default value of true .
  reposts: false   # The default value of false .
  autoplay: false  # The default value of false .
```


Also, can customize  individually by posts. please edit your `example.md` as following example.

```
{% soundcloud https://soundcloud.com/officialmedasin/daydream-ft-joba-1 166 false ffff00 false false false false false %}
```

## License

MIT

[Hexo]: http://hexo.io/
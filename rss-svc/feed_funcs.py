import feedparser
import json
import functools as ft

from feeds import rss_feeds
from datetime import datetime

ARTICLE_CACHE = '.article_cache.json'
CACHE_TIMESTAMP = '.cache_timestamp'

def flatten(nested_list):
    return [item for items in nested_list for item in items] 


def _get_cached_articles(cache_file=ARTICLE_CACHE):
  with open(cache_file, 'r') as cache:
    articles = json.load(cache)
  return articles


def _should_update_article_cache(timestamp=CACHE_TIMESTAMP): 
  date = datetime.today().strftime('%b %d %Y')

  try:
    with open(timestamp, 'r') as ts:
      return False if date in ts.readline() else True

  except FileNotFoundError:
    return True


def _cache_articles(entries, timestamp=CACHE_TIMESTAMP, cache_file=ARTICLE_CACHE):
  with open(timestamp, 'w+') as ts:
    date = datetime.today().strftime('%b %d %Y')
    ts.write(date)

  with open(cache_file, 'w+') as cache:
    json.dump(entries, cache)



def get_feed_articles():
    if _should_update_article_cache():
      entries = flatten(map(_get_entries, rss_feeds.values()))
      _cache_articles(entries)
    else:
      entries = _get_cached_articles()
    return entries


def _get_entries(feed_url):
    print("source: {}".format(feed_url))
    print("collecting articles")
    return feedparser.parse(feed_url).entries



def _get_article_data(entry):
    data_string = ''
    data_string += entry.get('summary', '')
    return data_string


def _contains_keywords(keywords, text):
    text_words = set(text.lower().split())
    keys = [word.lower() for word in keywords]
    if text_words.intersection(set(keys)) == set():
        return False
    else:
        return True


def articles_by_keywords(keywords):
    articles = get_feed_articles()
    arts_with_kws = filter(
            lambda article: _contains_keywords(
                keywords, 
                _get_article_data(article)
                ), 
            articles)
    return list(arts_with_kws)


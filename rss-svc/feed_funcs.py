import feedparser
import functools as ft

from feeds import rss_feeds

def flatten(nested_list):
    return [item for items in nested_list for item in items] 

def get_feed_articles():
    entries = flatten(map(_get_entries, rss_feeds.values()))
    return entries


def _get_entries(feed_url):
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


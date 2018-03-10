import pytest


TESTING_ARTICLES = 'test_articles.pickle'

@pytest.fixture
def feed_funcs():
    import pickle
    import feed_funcs
    
    test_data = pickle.load(open(TESTING_ARTICLES, 'rb'))

    def get_test_data():
        return test_data
    
    feed_funcs.get_feed_articles = get_test_data
    return feed_funcs


def test__get_entries(feed_funcs):
    wired = feed_funcs.rss_feeds['wired']
    assert wired is not None
    entries = feed_funcs._get_entries(wired)
    assert entries is not None


def test_get_feed_articles(feed_funcs):
    articles = list(feed_funcs.get_feed_articles())
    assert articles is not None


def test_contains_keywords(feed_funcs):
    kws = ['Trump', 'offshore']
    assert len(feed_funcs.articles_by_keywords(kws)) == 2 


def test__contains_keywords(feed_funcs):
    kws = ['hello', 'can']
    text = "I CAN ASSURE YOU THAT THIS WILL WORK!"
    assert feed_funcs._contains_keywords(kws, text)


def test__get_article_data(feed_funcs):
    article = feed_funcs.get_feed_articles()[0]

    expected_text = 'Once confined to browsers, ' \
                    'hijacking computers to mine ' \
                    'cryptocurrency has branched' \
                    ' out to dangerous places.'

    assert feed_funcs._get_article_data(article) == expected_text 
    
            

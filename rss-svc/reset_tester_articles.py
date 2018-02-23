import pickle
import feed_funcs

entries = feed_funcs.get_feed_articles()

with open('test_articles.pickle', 'wb') as fd:
    pickle.dump(entries, fd, protocol=4)

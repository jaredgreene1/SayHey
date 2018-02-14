import json

from aiohttp import web
import feed_funcs


example_articles = [{"title": "article1", "link": "https://www.google.com/"}, {"title": "article2", "link": "ihttps://www.amazon.com"}]
res_headers = {'ACCESS-CONTROL-ALLOW-ORIGIN': '*'}





async def handle(request):
    data = await request.json()
    interests = data['interests'].split(', ')
    print("Looking for keywords: ")
    print(interests)
    arts = feed_funcs.articles_by_keywords(interests)
    print(arts)
    return web.Response(body=json.dumps(arts), headers = res_headers)

app = web.Application()
app.router.add_post('/articles_for_contacts', handle)


web.run_app(app, host='127.0.0.1', port=8080)

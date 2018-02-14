import json

from aiohttp import web


example_articles = [{"title": "article1", "link": "https://www.google.com/"}, {"title": "article2", "link": "ihttps://www.amazon.com"}]
res_headers = {'ACCESS-CONTROL-ALLOW-ORIGIN': '*'}

async def handle(request):
    data = await request.json()
    print(data)
    return web.Response(body=json.dumps(example_articles), headers = res_headers)

app = web.Application()
app.router.add_post('/articles_for_contacts', handle)


web.run_app(app, host='127.0.0.1', port=8080)

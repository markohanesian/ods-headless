import http.client
import json

conn = http.client.HTTPSConnection("wp.ohanesiandigitalsolutions.com")
query = "{ posts(first: 1) { nodes { title } } }"
payload = json.dumps({"query": query})
headers = {'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0'}

try:
    conn.request("POST", "/graphql", payload, headers)
    res = conn.getresponse()
    print(f"Status: {res.status}")
    print(f"Response: {res.read().decode('utf-8')}")
except Exception as e:
    print(f"Error: {e}")

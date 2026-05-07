import http.client

conn = http.client.HTTPSConnection("wp.ohanesiandigitalsolutions.com")
path = "/wp-content/uploads/2025/10/dlm-case-study-image-1024x811.png"

try:
    conn.request("HEAD", path)
    res = conn.getresponse()
    print(f"Status for {path}: {res.status}")
except Exception as e:
    print(f"Error: {e}")

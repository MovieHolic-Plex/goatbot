import http.server
import sys

OUT = sys.argv[1]


class H(http.server.BaseHTTPRequestHandler):
    def do_POST(self):
        body = self.rfile.read(int(self.headers.get("content-length", 0)))
        with open(OUT, "wb") as f:
            f.write(body)
        self.send_response(204)
        self.end_headers()


http.server.HTTPServer(("127.0.0.1", 8765), H).serve_forever()

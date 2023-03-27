import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

serve((_req) => {
  return new Response("Hello World2!", {
    headers: { "content-type": "text/plain" },
  });
});
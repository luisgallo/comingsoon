import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

serve(async (req) => {
  return new Response("Not Found", { status: 404 });
});
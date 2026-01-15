import { serve } from "https://deno.land/std/http/server.ts";

serve((req) => {
    return new Response("Hello World\n");
}, { port: 8000 });
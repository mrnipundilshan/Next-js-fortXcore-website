// app/api/stat/route.ts
export async function GET() {
    const res = await fetch("https://next-js-fort-xcore-admin-panel-payload-5h17w5u29.vercel.app/api/stats/");
    const data = await res.json();
    return Response.json(data);
  }
  
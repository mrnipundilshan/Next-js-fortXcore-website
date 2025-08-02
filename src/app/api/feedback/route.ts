// app/api/feedback/route.ts
export async function GET() {
    const res = await fetch("https://next-js-fort-xcore-admin-panel-payl.vercel.app/api/feedback/");
    const data = await res.json();
    return Response.json(data);
  }
  
export const prerender = false;

export async function GET(context) {
  // Parse the "token" cookie
  const url = new URL(context.request.url);
  const token = url.searchParams.get("token");
  const slug = url.searchParams.get("slug");
  const redirectTo = url.searchParams.get("redirectTo") || "/";

  if (token !== "MY_SECRET_DRAFT_TOKEN") {
    return new Response("Invalid token", { status: 401 });
  }

  // Create the cookie with appropriate settings
  const headers = new Headers();
  headers.append("Set-Cookie", `sanityDraftMode=true; Path=/; HttpOnly`);
  headers.append("Location", redirectTo);

  return new Response(null, {
    status: 307,
    headers,
  });
}
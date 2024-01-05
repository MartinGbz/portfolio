import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const image = await fetch(
    new URL("/public/thumbnail.png", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {/*eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="thumbnail" />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

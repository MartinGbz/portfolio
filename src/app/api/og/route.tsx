import { ImageResponse } from "next/og";

const WEBSITE_DOMAIN = "https://portfolio-martingbz.vercel.app";

export const runtime = "edge";

export async function GET() {
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
        <img src={WEBSITE_DOMAIN + "/thumbnail.png"} alt="thumbnail" />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

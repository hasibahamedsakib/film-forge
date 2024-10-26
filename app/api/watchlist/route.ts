import { NextResponse } from "next/server";
import { MovieProps } from "@/types/type";

// In-memory watchlist (for testing purposes only)
let watchlist: Record<string, MovieProps>[] = [];

export async function POST(req: Request) {
  const { movie } = await req.json();
  if (!watchlist.find((item) => item.id === movie.id)) {
    watchlist.push(movie);
  }
  return NextResponse.json({ success: true, watchlist });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  watchlist = watchlist.filter((item) => item.id !== id);
  return NextResponse.json({ success: true, watchlist });
}

export async function GET() {
  return NextResponse.json(watchlist);
}

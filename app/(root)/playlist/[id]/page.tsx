import {
  PlaylistPageCard,
  PlaylistPageTracks,
} from "@/shared/components/shared";
import { Api } from "@/shared/services/api-client";
import { Playlist } from "@/types/audius";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harmoniq | Playlist",
};

export const dynamic = "force-dynamic";

export default async function PlaylistPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: playlistId } = await params;
  const playlist = (await Api.playlists.fetchPlaylist(
    playlistId,
  )) as unknown as Playlist;

  return (
    <div className="mt-10 pr-5">
      <PlaylistPageCard playlist={playlist} />

      <PlaylistPageTracks playlist={playlist} />
    </div>
  );
}

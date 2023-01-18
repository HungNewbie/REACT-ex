import React, { useContext } from "react";
import { Song } from "./Song";
import { MixtapeContext } from "./MixtapeContext";
export const SongList = () => {
  // Your code here! ✨
   const {genre, sortOrder, songs} = useContext(MixtapeContext);
   const songFilter = songs.filter(
    song => genre === 'all' || song.genre === genre );
  const songSort = songFilter.sort((song1, song2) => sortOrder === "ascending" ? song1.year - song2.year : song2.year - song1.year);

  return (
    <>
      <h2>TODO: Update taste in music...?</h2>
{songSort.map((song) => (<Song {...song} key={song.name} />))}
    </>
  );
};

"use client"

import { Footer } from "../components/footer"
import { MusicIcon } from "../components/icons/music-icon"
import { Navbar } from "../components/navbar"


const playlists = [
  {
    id: 1,
    title: "Our Love Songs",
    description: "Lagu-lagu yang mengiringi perjalanan cinta kami",
    spotifyId: "37i9dQZF1DX0XUsuxWHRQd", // Example Spotify playlist ID
    cover: "/playlist-love-songs-cover.jpg",
    songCount: 25,
  },
  {
    id: 2,
    title: "First Date Vibes",
    description: "Playlist yang kami dengarkan saat kencan pertama",
    spotifyId: "37i9dQZF1DX4sWSpwAYIIu",
    cover: "/playlist-first-date-cover.jpg",
    songCount: 18,
  },
  {
    id: 3,
    title: "Cozy Home Together",
    description: "Musik untuk malam-malam santai di rumah",
    spotifyId: "37i9dQZF1DX1s9knjP51Oa",
    cover: "/playlist-cozy-home-cover.jpg",
    songCount: 32,
  },
]

const favoriteSongs = [
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    reason: "Lagu pertama yang kita dengarkan bersama",
    memory: "Saat kencan pertama di taman kota",
  },
  {
    title: "All of Me",
    artist: "John Legend",
    reason: "Lagu yang kamu nyanyikan untukku",
    memory: "Malam Valentine yang tak terlupakan",
  },
  {
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    reason: "Lagu dance pertama kita",
    memory: "Di ruang tamu rumah kecil kita",
  },
  {
    title: "A Thousand Years",
    artist: "Christina Perri",
    reason: "Lagu yang selalu membuatku memikirkanmu",
    memory: "Setiap kali kita berpisah sementara",
  },
]

export default function PlaylistPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <Navbar />

      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center py-16">
          <MusicIcon className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-heartbeat" />
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Playlist</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Each song holds a story, each note a memory
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-6 text-center">The Playlist of Us</h2>
            <div className="rounded-xl overflow-hidden">
              <iframe
                src="https://open.spotify.com/embed/playlist/6DguPLBwsIqJ2tBfdJHuqX?utm_source=generator"
                width="100%"
                height="380"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl"
              ></iframe>
            </div>
            {/* <p className="text-center text-gray-500 text-sm mt-4">
              Ganti playlist ID di atas dengan playlist Spotify kalian yang sebenarnya
            </p> */}
          </div>
        </div>

        {/* <div className="max-w-6xl mx-auto mb-20">
          <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-8 text-center">Playlist Lainnya</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {playlists.slice(1).map((playlist, index) => (
              <div
                key={playlist.id}
                className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">{playlist.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{playlist.description}</p>
                <div className="rounded-xl overflow-hidden">
                  <iframe
                    src={`https://open.spotify.com/embed/playlist/${playlist.spotifyId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Favorite Songs */}
        {/* <div className="max-w-4xl mx-auto pb-20">
          <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-8 text-center">Lagu-lagu Spesial Kami</h2>
          <div className="space-y-6">
            {favoriteSongs.map((song, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <MusicIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-lg font-bold text-gray-900">{song.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">oleh {song.artist}</p>
                    <p className="text-pink-600 text-sm font-medium mb-1">{song.reason}</p>
                    <p className="text-gray-500 text-sm italic">{song.memory}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
      <Footer />
    </main>
  )
}

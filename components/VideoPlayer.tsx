'use client';

import { useEffect, useState } from 'react';

interface Timestamp {
  time: number;
  label: string;
  summary: string;
}

declare global {
  interface Window {
    YT?: {
      Player: any;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

export default function VideoPlayer({ videoId, timestamps }: { videoId: string, timestamps: Timestamp[] }) {
  const [player, setPlayer] = useState<any>(null);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);

      window.onYouTubeIframeAPIReady = () => {
        new window.YT!.Player('player', {
          height: '360',
          width: '100%',
          videoId,
          events: {
            onReady: (event: any) => setPlayer(event.target),
          },
        });
      };
    } else {
      // API 이미 로드됨
      new window.YT.Player('player', {
        height: '360',
        width: '100%',
        videoId,
        events: {
          onReady: (event: any) => setPlayer(event.target),
        },
      });
    }
  }, [videoId]);

  const handleTimestampClick = (time: number) => {
    if (player && player.seekTo) {
      player.seekTo(time, true);
      player.playVideo();
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="video-player">
      <div id="player" className="w-full aspect-video" />
      <ul className="timestamps mt-4 space-y-2">
        {timestamps.map((ts) => (
          <li key={ts.time} className="flex items-start gap-2">
            <button
              onClick={() => handleTimestampClick(ts.time)}
              className="text-blue-500 hover:text-blue-700 underline bg-none border-none cursor-pointer font-medium whitespace-nowrap"
            >
              [{formatTime(ts.time)}] {ts.label}
            </button>
            <span className="text-gray-700">{ts.summary}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

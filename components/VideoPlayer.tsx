'use client';

import React, { useState } from 'react';

interface Timestamp {
  time: number;
  label: string;
  summary: string;
}

interface VideoPlayerProps {
  videoId: string;
  timestamps?: Timestamp[];
}

export default function VideoPlayer({ videoId, timestamps = [] }: VideoPlayerProps) {
  const [currentTime, setCurrentTime] = useState(0);

  const handleTimestampClick = (time: number) => {
    const iframe = document.getElementById(`youtube-player-${videoId}`) as HTMLIFrameElement;
    if (iframe) {
      // YouTube iframe API를 사용하여 시간 이동
      iframe.contentWindow?.postMessage(
        `{"event":"command","func":"seekTo","args":[${time}, true]}`,
        '*'
      );
      setCurrentTime(time);
    }
  };

  return (
    <div className="video-player-container">
      <div className="video-wrapper mb-4">
        <iframe
          id={`youtube-player-${videoId}`}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full aspect-video rounded-lg shadow-lg"
        />
      </div>

      {timestamps && timestamps.length > 0 && (
        <div className="timestamps">
          <h3 className="text-lg font-semibold mb-3">주요 장면</h3>
          <ul className="space-y-2">
            {timestamps.map((ts, index) => (
              <li key={index}>
                <button
                  onClick={() => handleTimestampClick(ts.time)}
                  className="flex items-center gap-2 text-left w-full px-3 py-2 rounded-md hover:bg-blue-50 transition-colors group"
                >
                  <span className="text-blue-600 font-mono text-sm bg-blue-100 px-2 py-1 rounded group-hover:bg-blue-200">
                    {ts.label}
                  </span>
                  <span className="text-gray-700 text-sm flex-1">{ts.summary}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

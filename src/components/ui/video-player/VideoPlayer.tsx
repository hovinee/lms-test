'use client'

import { useState, useRef, useEffect } from 'react'
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js'

// Styles
import 'video.js/dist/video-js.css'

interface IVideoPlayerProps {
  options: videojs.PlayerOptions
  id: number
}

const initialOptions: videojs.PlayerOptions = {
  controls: true,
  fluid: true,
  controlBar: {
    volumePanel: {
      inline: false,
    },
  },
}

interface VjsProps {
  options: VideoJsPlayerOptions
  onReady?: (player: VideoJsPlayer) => void
}
const VideoPlayer: React.FC<IVideoPlayerProps> = ({ options, id }) => {
  const videoNode = useRef<HTMLVideoElement>(null)
  const player = useRef<videojs.Player>()
  const [currentTime, setCurrentTime] = useState<number>(0)

  useEffect(() => {
    if (videoNode.current) {
      player.current = videojs(videoNode.current, {
        ...initialOptions,
        ...options,
      }).ready(function () {
        const myPlayer = this
        myPlayer.on('timeupdate', function () {
          //페이지 route시 저장 TODO:db 폴링 찾아보기
          localStorage.setItem(`video${[id]}`, String(myPlayer.currentTime()))

          //페이지 leave시 저장
          window.onunload = function () {
            localStorage.setItem(`video${[id]}`, String(myPlayer.currentTime()))
          }
        })
        if (localStorage.getItem(`video${[id]}`))
          myPlayer.currentTime(Number(localStorage.getItem(`video${[id]}`)))
      })

      return () => {
        if (player.current) {
          player.current.dispose()
        }
      }
    }
  }, [options])

  return <video ref={videoNode} className="video-js" />
}

export default VideoPlayer

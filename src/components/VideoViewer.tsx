import { useState, useEffect, Fragment, useRef, type MouseEvent } from 'react'

type VideoProps = {
  title: string
  src: string
}

import { ReactSVG } from 'react-svg'

const VideoViewer = ({ title, src }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const [opened, setOpened] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
      setPlaying(true)
    }
  }, [])

  const open = () => {
    setOpened(true)
    // play video
    if (videoRef.current) {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  const close = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
    setOpened(false)
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setPlaying(!playing)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  const replay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
    setPlaying(true)
  }

  return (
    <Fragment>
      <div onClick={open} style={{ cursor: 'pointer', color: 'blue' }}>
        {title}
      </div>
      {opened && (
        <div
          className='
          fixed  md:p-10  z-50 top-0 left-0 w-full h-full
          flex flex-col justify-center items-center
          backdrop-blur-sm bg-black bg-opacity-95'
        >
          <video className='max-w-full max-h-full' ref={videoRef} src={src} />
          <div className='inline-flex gap-6'>
            <div
              onClick={togglePlay}
              className='w-10 p-2 cursor-pointer hover:text-white'
            >
              {playing ? (
                <ReactSVG
                  beforeInjection={(svg) => {
                    svg.classList.add('w-8', 'h-8')
                  }}
                  src='/img/icos/video/pause.svg'
                />
              ) : (
                <ReactSVG
                  beforeInjection={(svg) => {
                    svg.classList.add('w-8', 'h-8')
                  }}
                  src='/img/icos/video/play.svg'
                />
              )}
            </div>
            <div
              onClick={replay}
              className='w-10 p-2 cursor-pointer hover:text-white'
            >
              <ReactSVG
                beforeInjection={(svg) => {
                  svg.classList.add('w-8', 'h-8')
                }}
                src='/img/icos/video/replay.svg'
              />
            </div>
            <div
              onClick={toggleMute}
              className='w-10 p-2 cursor-pointer hover:text-white'
            >
              {muted ? (
                <ReactSVG
                  beforeInjection={(svg) => {
                    svg.classList.add('w-8', 'h-8')
                  }}
                  src='/img/icos/video/muted.svg'
                />
              ) : (
                <ReactSVG
                  beforeInjection={(svg) => {
                    svg.classList.add('w-8', 'h-8')
                  }}
                  src='/img/icos/video/unmuted.svg'
                />
              )}
            </div>
            <div
              onClick={close}
              className='w-10 p-2 cursor-pointer hover:text-white'
            >
              <ReactSVG
                beforeInjection={(svg) => {
                  svg.classList.add('w-8', 'h-8')
                }}
                src='/img/icos/video/exit.svg'
              />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default VideoViewer

'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Uppy from '@uppy/core'
import Tus from '@uppy/tus'
import DragDrop from '@uppy/drag-drop'
import ProgressBar from '@uppy/progress-bar'

import '@uppy/core/dist/style.min.css'
import '@uppy/drag-drop/dist/style.min.css'
import '@uppy/progress-bar/dist/style.min.css'

import './styles.css'
import CSText from '../text/CSText'

interface Props {
  setUid: Dispatch<SetStateAction<string>>
}

const VideoUpload = ({ setUid }: Props) => {
  const [fileName, setFileName] = useState<string>('')

  useEffect(() => {
    const uppy = new Uppy({
      debug: true,
      autoProceed: true,
    })
    const onUploadSuccess = (el: string) => (file: File, response: any) => {
      setFileName(file.name)
    }

    //uppy이 있음 새롭게 로직 추가할때는 다시 브라우저 오픈
    uppy
      .use(DragDrop, {
        target: '#drag-drop-area',
        locale: {
          strings: {
            dropHereOr: '동영상을 업로드해주세요',
          },
        },
      })
      .use(Tus, {
        endpoint: '/api/upload-url',
        chunkSize: 150 * 1024 * 1024,
        async onAfterResponse(req, res) {
          if (res.getStatus() === 200) {
            //TODO: 로컬 스토리지에 저장해놓고 다보내면 지워주자
            // setUid((item: any) => [...item, res.getBody()])
            setUid(res.getBody())
          }
        },
      })
      .use(ProgressBar, { target: '.for-ProgressBar', hideAfterFinish: false })
      .on('upload-success', (data) => {
        alert('업로드 완료!')
        //  router.push('/')
      })
      .on('upload-success', onUploadSuccess('.uploaded-files ol'))

    const uploadBtn = document.querySelector('.button.upload-button')
    if (uploadBtn) {
      uploadBtn.addEventListener('click', () => uppy.upload())
    }
    return () => {
      uppy.close()
    }
  }, [])

  return (
    <div className="mt-[1.4rem]">
      <div id="drag-drop-area" />
      <div className="for-ProgressBar mt-[2rem]" />
      <CSText
        weight="normal"
        size="18"
        color="565656"
        className="uploaded-files mt-[0.5rem]"
      >
        {fileName && `Lecture 1 : ${fileName}`}
      </CSText>
    </div>
  )
}

export default VideoUpload

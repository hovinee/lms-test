'use client'

import { useEffect, useState } from 'react'
import Uppy from '@uppy/core'
import Tus from '@uppy/tus'
import DragDrop from '@uppy/drag-drop'
import ProgressBar from '@uppy/progress-bar'

import '@uppy/core/dist/style.min.css'
import '@uppy/drag-drop/dist/style.min.css'
import '@uppy/progress-bar/dist/style.min.css'
import { useRouter } from 'next/navigation'

const UploadVideo = () => {
  //   const apiUrl = `https://api.cloudflare.com/client/v4/accounts/${accountId}/stream/direct_upload`

  //   const data = {
  //     maxDurationSeconds: 3600,
  //   }

  //   const [selectedFile, setSelectedFile] = useState(null)
  //   const [uid, setUid] = useState('')
  //   const [go, setGo] = useState(false)
  //   const handleFileChange = (e) => {
  //     setSelectedFile(e.target.files[0])
  //   }

  //   const handleUpload = async () => {
  //     if (selectedFile) {
  //       await fetch(apiUrl, {
  //         method: 'POST',
  //         headers: {
  //           Authorization: `Bearer ${apiToken}`,
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(data),
  //       })
  //         .then((res) => res.json())
  //         .then(async (data) => {
  //           setUid(data.result.uid)
  //           const uploadURL = data.result.uploadURL
  //           const formData = new FormData()
  //           formData.append('file', selectedFile, data.result.uid)
  //           await fetch(uploadURL, {
  //             method: 'POST',
  //             body: formData,
  //           })
  //         })
  //         .then(async () => {
  //           if (uid) {
  //             await fetch(
  //               `https://api.cloudflare.com/client/v4/accounts/${accountId}/stream/${uid}`,
  //               {
  //                 headers: {
  //                   Authorization: `Bearer ${apiToken}`,
  //                   'Content-Type': 'application/json',
  //                 },
  //               },
  //             )
  //               .then((res) => res.json())
  //               .then((data) => {
  //                 console.log(data.result.status, data.result.pctcomplete)
  //               })
  //           }
  //         })

  //         .catch((error) => {
  //           console.error('Error:', error)
  //         })
  //     } else {
  //       console.log('파일을 선택하세요.')
  //     }
  //   }

  return (
    <div>
      비디오 업로드
      <App />
    </div>
  )
}

export default UploadVideo

const App = () => {
  const router = useRouter()
  useEffect(() => {
    const uppy = new Uppy({
      debug: true,
      autoProceed: true,
    })

    const onUploadSuccess = (el: string) => (file: File, response: any) => {
      const li = document.createElement('li')
      const a = document.createElement('a')
      a.href = response.uploadURL
      a.target = '_blank'
      a.appendChild(document.createTextNode(file.name))
      li.appendChild(a)

      const uploadedFiles = document.querySelector(el)
      if (uploadedFiles) {
        uploadedFiles.appendChild(li)
      }
    }

    uppy
      .use(DragDrop, { target: '#drag-drop-area' })
      .use(Tus, {
        endpoint: '/api/upload-url',
        chunkSize: 150 * 1024 * 1024,
      })
      .use(ProgressBar, { target: '.for-ProgressBar', hideAfterFinish: false })
      .on('upload-success', () => {
        alert('업로드 완료!'), router.push('/')
      })
    // .on('upload-success', onUploadSuccess('.uploaded-files ol'))

    const uploadBtn = document.querySelector('button.upload-button')
    if (uploadBtn) {
      uploadBtn.addEventListener('click', () => uppy.upload())
    }
    return () => {
      uppy.close()
    }
  }, [])

  return (
    <div className="mt-16">
      <div id="drag-drop-area" style={{ height: '300px' }} />
      <div className="for-ProgressBar" />
      <div className="uploaded-files" style={{ marginTop: '50px' }}>
        <ol></ol>
      </div>
    </div>
  )
}

import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const corsHeaders = {
    'Access-Control-Expose-Headers': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
  }
  const CLOUDFLARE_API_TOKEN = 'YkoSyEjEBomP4E4aT4GpkUjD4G_YZ3yXe2YjBLzD'
  const CLOUDFLARE_ACCOUNT_ID = 'bf5b848ae1de1b815b53a235fd81b2a8'
  const endpoint = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/stream?direct_user=true`

  //upload url
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: <HeadersInit>{
      Authorization: `bearer ${CLOUDFLARE_API_TOKEN}`,
      'Tus-Resumable': '1.0.0',
      'Upload-Length': req.headers.get('Upload-Length'),
      'Upload-Metadata': req.headers.get('Upload-Metadata'),
    },
  })

  const destination = response.headers.get('Location')
  //TODO: destination = "https://upload.videodelivery.net/tus/efd4a9b327a37865d0f1c99ec6bd6556?tusv2=true"
  //
  console.log(destination, '비디오 업로드 갑니다')
  if (destination) {
    const parts = destination.split('/')
    const videoUid = parts[parts.length - 1].split('?')[0]
    return new NextResponse(videoUid, {
      headers: <HeadersInit>{ ...corsHeaders, Location: destination },
    })
  }
  // return new NextResponse('', {
  //   headers: <HeadersInit>{ ...corsHeaders, Location: destination },
  // })
}

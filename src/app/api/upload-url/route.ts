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
  console.log(destination, '비디오 업로드 갑니다')
  return new NextResponse('', {
    headers: <HeadersInit>{ ...corsHeaders, Location: destination },
  })
}

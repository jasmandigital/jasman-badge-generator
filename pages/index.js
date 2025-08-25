import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [link, setLink] = useState('https://example.com')
  const [text, setText] = useState('Powered by Jasman Digital')
  const [color1, setColor1] = useState('#174a5b')
  const [color2, setColor2] = useState('#4b9560')
  const [tracking, setTracking] = useState('none')
  const [trackingId, setTrackingId] = useState('')
  const [corner, setCorner] = useState('bottom-right')
  const [badgeCode, setBadgeCode] = useState('')
  const [trackingCode, setTrackingCode] = useState('')

const generateCode = () => {
  let trackingSnippet = ''
  if (tracking === 'gtm' && trackingId) {
    trackingSnippet = `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${trackingId}');</script>
<!-- End Google Tag Manager -->`
  }
  if (tracking === 'ga4' && trackingId) {
    trackingSnippet = `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${trackingId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${trackingId}');
</script>`
  }
  setTrackingCode(trackingSnippet)

    let positionStyles = ''
    switch(corner) {
      case 'bottom-left':
        positionStyles = 'bottom: 20px; left: 20px;'
        break
      case 'top-right':
        positionStyles = 'top: 20px; right: 20px;'
        break
      case 'top-left':
        positionStyles = 'top: 20px; left: 20px;'
        break
      default:
        positionStyles = 'bottom: 20px; right: 20px;' // bottom-right default
    }

const badgeSnippet = `<div id="systeme-badge" style="position: fixed; ${positionStyles} z-index: 9999;">
  <style>
    #systeme-badge {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    .systeme-badge-container {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, ${color1}, ${color2});
      border-radius: 25px;
      padding: 8px 8px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      color: white;
      overflow: hidden;
      max-width: 40px;
    }
    .systeme-badge-container:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      max-width: 200px;
      padding: 8px 12px;
    }
    .systeme-badge-icon {
      width: 20px;
      height: 20px;
      margin-right: 0;
      fill: currentColor;
      flex-shrink: 0;
    }
    .systeme-badge-container:hover .systeme-badge-icon {
      margin-right: 8px;
    }
    .systeme-badge-text {
      font-size: 18px;
      font-weight: 600;
      white-space: nowrap;
      opacity: 0;
      transform: translateX(-10px);
      transition: all 0.3s ease;
    }
    .systeme-badge-container:hover .systeme-badge-text {
      opacity: 1;
      transform: translateX(0);
    }
  </style>
  <div class="systeme-badge-wrapper">
    <a href="${link}" target="_blank" rel="noopener noreferrer" class="systeme-badge-container">
      <svg class="systeme-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
      </svg>
      <span class="systeme-badge-text">${text}</span>
    </a>
  </div>
</div>`

    setBadgeCode(badgeSnippet)
  }

  return (
  <>
    <Head>
      <title>Jasman Digital Badge Generator | Floating Corner Badges with Tracking</title>
      <meta name="description" content="Generate floating website badges for any corner. Add links, colors, and GA4/GTM tracking — copy-paste ready for Systeme.io or any website." />

      {/* Open Graph for social previews */}
      <meta property="og:title" content="Jasman Digital Badge Generator" />
      <meta property="og:description" content="Create floating corner badges with tracking, colors, and links. Perfect for travel agents and small businesses." />
      <meta property="og:image" content="https://jasman-badge-generator.vercel.app/og-preview.png" />
      <meta property="og:url" content="https://jasman-badge-generator.vercel.app" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Jasman Digital Badge Generator" />
      <meta name="twitter:description" content="Create floating corner badges with tracking, colors, and links. Perfect for travel agents and small businesses." />
      <meta name="twitter:image" content="https://jasman-badge-generator.vercel.app/og-preview.png" />
    </Head>

    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Jasman Digital Badge Generator (v3)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="space-y-4">
          <div>
            <label className="block font-medium">Affiliate / Funnel Link</label>
            <input type="text" value={link} onChange={e => setLink(e.target.value)} className="w-full border p-2 rounded" />
          </div>

          <div>
            <label className="block font-medium">Badge Text</label>
            <input type="text" value={text} onChange={e => setText(e.target.value)} className="w-full border p-2 rounded" />
          </div>

          <div>
            <label className="block font-medium">Primary Color</label>
            <input type="color" value={color1} onChange={e => setColor1(e.target.value)} />
          </div>

          <div>
            <label className="block font-medium">Secondary Color</label>
            <input type="color" value={color2} onChange={e => setColor2(e.target.value)} />
          </div>

          <div>
            <label className="block font-medium">Corner Position</label>
            <select value={corner} onChange={e => setCorner(e.target.value)} className="w-full border p-2 rounded">
              <option value="bottom-right">Bottom Right (default)</option>
              <option value="bottom-left">Bottom Left</option>
              <option value="top-right">Top Right</option>
              <option value="top-left">Top Left</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Tracking Option</label>
            <select value={tracking} onChange={e => setTracking(e.target.value)} className="w-full border p-2 rounded">
              <option value="none">None</option>
              <option value="ga4">Google Analytics 4</option>
              <option value="gtm">Google Tag Manager</option>
            </select>
          </div>

          {tracking !== 'none' && (
            <div>
              <label className="block font-medium">
                {tracking === 'ga4' ? 'GA4 Measurement ID' : 'GTM Container ID'} 
                <span className="tooltip ml-1">?
                  <span className="tooltiptext">
                    {tracking === 'ga4'
                      ? 'Find in Google Analytics → Admin → Data Streams → Web → Measurement ID (starts with G-)'
                      : 'Find in Google Tag Manager Dashboard → Container ID (format GTM-XXXX)'}
                  </span>
                </span>
              </label>
              <input type="text" value={trackingId} onChange={e => setTrackingId(e.target.value)} className="w-full border p-2 rounded" />
            </div>
          )}

          <button onClick={generateCode} className="bg-blue-600 text-white px-4 py-2 rounded">
            Generate Code
          </button>
        </div>

        <div>
          {trackingCode && (
            <div className="mt-4">
              <label className="block font-medium">Tracking Script (paste in Systeme.io Settings → SEO/Analytics → Header Scripts)</label>
              <textarea readOnly value={trackingCode} className="w-full h-40 border p-2 rounded mt-2" />
              <button onClick={() => navigator.clipboard.writeText(trackingCode)} className="mt-2 bg-green-600 text-white px-4 py-2 rounded">
                Copy Tracking Script
              </button>
            </div>
          )}

          <label className="block font-medium mt-6">Badge Code (paste in a Systeme.io Custom Code block)</label>
          <textarea readOnly value={badgeCode} className="w-full h-64 border p-2 rounded mt-2" />
          <button onClick={() => navigator.clipboard.writeText(badgeCode)} className="mt-2 bg-green-600 text-white px-4 py-2 rounded">
            Copy Badge Code
          </button>
        </div>
      </div>

      <div className="mt-8 p-4 bg-white border rounded">
        <h2 className="text-lg font-bold mb-2">How to Use</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Choose your Affiliate or Funnel link.</li>
          <li>Enter your Badge Text (or keep default).</li>
          <li>Select your Colors.</li>
          <li>Choose Corner Position (default is Bottom Right).</li>
          <li>(Optional) Choose Tracking Option: GA4 or GTM, and enter your ID.</li>
          <li>Click Generate Code.</li>
        </ol>
        <h3 className="font-semibold mt-4">Systeme.io Implementation</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Copy Tracking Script → go to Systeme.io → Settings → SEO/Analytics → Header Scripts → Paste there.</li>
          <li>Copy Badge Code → add a Custom Code Block on your page → Paste there.</li>
          <li>Save and publish your page.</li>
        </ul>
        <h3 className="font-semibold mt-4">GA4 Setup</h3>
        <p>In Google Analytics, go to Admin → Data Streams → Web → copy your Measurement ID (starts with G-). Paste it in the generator.</p>
        <h3 className="font-semibold mt-4">GTM Setup</h3>
        <p>In Google Tag Manager, copy your Container ID (format GTM-XXXX). Paste it in the generator. Inside GTM, add a GA4 tag if you want more advanced analytics.</p>
      </div>
    </div>
  )
}

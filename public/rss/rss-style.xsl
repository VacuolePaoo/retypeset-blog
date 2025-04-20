<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> Web Feed</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <link rel="icon" href="/icon/favicon.png" />
        <style type="text/css">
        html,body {
          margin: 0;
          padding: 0;
          font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
          background-color: oklch(0.98 0.003 298);
          color: oklch(0.25 0.005 298);
          -webkit-font-smoothing: antialiased;
        }
        * {
          box-sizing: border-box;
        }
        a {
          color: oklch(0.45 0.07 280);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        a:hover {
          color: oklch(0.55 0.1 280);
        }
        h1, h2, h3 {
          margin: 0;
          font-weight: 600;
        }
        h1 {
          font-size: 2.25rem;
          margin-bottom: 0.5rem;
        }
        h2 {
          font-size: 1.5rem;
          margin: 1.5rem 0 0.5rem;
        }
        h3 {
          font-size: 1.2rem;
          margin-bottom: 0.3em;
        }
        p {
          margin: 0.5em 0 1em;
        }
        small {
          font-size: 0.875em;
          color: oklch(0.35 0.01 280);
        }

        .container {
          max-width: 960px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
        }
        .card {
          background: white;
          border-radius: 12px;
          padding: 1.75rem;
          border: 1px solid oklch(0.95 0.005 298);
          box-shadow: 
            0 1px 2px rgba(0,0,0,0.02),
            0 4px 16px rgba(0,0,0,0.02);
          margin-bottom: 1.5rem;
          transition: all 0.2s ease;
        }
        .card:hover {
          transform: translateY(-1px);
          box-shadow: 
            0 2px 4px rgba(0,0,0,0.02),
            0 8px 24px rgba(0,0,0,0.03);
          border-color: oklch(0.92 0.005 298);
        }
        .nav-box {
          background: white;
          border-radius: 10px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          border: 1px solid oklch(0.95 0.005 298);
          box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }
        .feed-header {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }
        .feed-header img {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .divider {
          border-bottom: 1px solid oklch(0.93 0.005 298);
          margin: 2.5rem 0 1.5rem;
        }
        .visit-link {
          display: inline-flex;
          align-items: center;
          margin-top: 0.75rem;
          font-weight: 500;
          padding: 0.5rem 0;
          color: oklch(0.45 0.07 280);
        }
        .visit-link:hover {
          text-decoration: none;
          color: oklch(0.55 0.1 280);
        }
        
        @media (max-width: 640px) {
          .feed-header {
            flex-direction: column;
            gap: 1rem;
          }
          .card {
            padding: 1.25rem;
          }
        }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="nav-box">
            <p>
              <strong>This is a web feed (RSS),</strong> subscribe by copying the URL from the address bar into your reader.<br/>
              <strong>这是一个 Web Feed（RSS 订阅），</strong>你可以复制地址栏的链接添加到订阅工具中。
            </p>
          </div>

          <div class="card">
            <div class="feed-header">
              <img src="/icon/favicon.png" alt="Site Icon"/>
              <div>
                <h1><xsl:value-of select="/rss/channel/title"/></h1>
                <p><xsl:value-of select="/rss/channel/description"/></p>
              </div>
            </div>
            <a class="visit-link" target="_blank">
              <xsl:attribute name="href">
                <xsl:value-of select="/rss/channel/link"/>
              </xsl:attribute>
              Visit Website → 前往网站
            </a>
          </div>

          <div class="divider">
            <h2>Recent Items / 最新条目</h2>
          </div>

          <xsl:for-each select="/rss/channel/item">
            <div class="card">
              <h3>
                <a target="_blank">
                  <xsl:attribute name="href">
                    <xsl:value-of select="link"/>
                  </xsl:attribute>
                  <xsl:value-of select="title"/>
                </a>
              </h3>
              <small>
                Published / 发布时间: <xsl:value-of select="substring(pubDate, 1, 16)" />
              </small>
              <p>
                <xsl:value-of select="description"/>
              </p>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

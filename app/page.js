"use client";
import React, { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("This is title");
  const [mainText, setMainText] = useState("This is Main text ");
  const [imageUrl, setImageUrl] = useState(
    "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY"
  );
  const [generatedHtml, setGeneratedHtml] = useState("");
  const [showHtml, setShowHtml] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Update generated HTML in real-time
  useEffect(() => {
    const sanitizedTitle = title.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const sanitizedMainText = mainText
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const html = `
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
      <div class="deecies" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;background-size:100% auto;background-color:white;overflow:hidden;font-family:'Inter', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;">
<div class="deecies-content" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;width:100%;overflow:auto;">
  <!-- Deecies on eBay Logo -->
  <div class="content-inner logo" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:0;border:0;width:125px;">
    <img style="vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:25px auto;padding:0;border:0;max-width:125px;" alt="Deecies on eBay Logo" src="https://s3-eu-west-1.amazonaws.com/deecies/images/deecies-on.png" width="280">
  </div>
</div>
<div id="eu-banner" class style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;height:46px;width:100%;background:#003399;color:#003399;background-image:url('https://deecies.s3.eu-west-1.amazonaws.com/images/eu-banner.png');background-position:center center;background-size:70%;background-repeat:no-repeat;"></div>
<div class="deecies-header" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:22px 0;border:0;background-image:url('https://deecies.s3.eu-west-1.amazonaws.com/images/bac12.jpg');-webkit-background-size:cover;background-size:cover;background-position:center center;background-repeat:no-repeat;text-align:center;">
  <div class="content-inner" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">
    <div id="MainTitle" class="mt-1" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;font-size:55px;line-height:105%;color:rgb(255, 255, 255);"></div>
    <div id="MainTitleCont1" class="mt-2" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;font-size:13px;line-height:15px;font-weight:300;color:rgb(255, 255, 255);"></div>
    <div id="MainTitleCont2" class="mt-2" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;font-size:13px;line-height:15px;font-weight:300;color:rgb(255, 255, 255);"></div>
    <div id="MainTitleCont3" class="mt-2" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;font-size:13px;line-height:15px;font-weight:300;color:rgb(255, 255, 255);padding-top:5px;"></div>
  </div>
</div>
<!-- !Monthly Offer Advert -->
<div id="MonthlyOffer" class="deecies-content" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;width:100%;overflow:auto;background-image:linear-gradient(90deg, #41B0F6, #327AC4);text-align:center;position:relative;z-index:9;">
  <div class="deecies-content-inner" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:0;border:0;max-width:860px;align-content:center;">
    <img src="https://s3-eu-west-1.amazonaws.com/deecies/images/live-ad-quidco-m1.png" alt="Live Advertisement" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;max-height:195px;width:100%;">
  </div>
</div>
<!-- End of Monthly Offer Section -->
<!-- !Delivery Time -->
<div style="background-image:linear-gradient(90deg, #d5344d, #ad2570);width:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;overflow:auto;" class="deecies-content center">
  <div class="maindelivery dddate" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:5px 0;border:0;text-align:center;color:#FFF;font-weight:600;font-size:16px;"></div>
</div><p>${sanitizedTitle}</p><p>${sanitizedMainText}</p>          <img src="${imageUrl}" alt="Generated Content" style="width: 100px; height: 100px" />

<!-- !*****ITEM ITEM ITEM ITEM ITEM ITEM -->
<div class="content-inner block4" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:0;border:0;text-align:left;">
  <!-- !ITEM PICTURE -->
  <img src="https://deecies.s3.eu-west-1.amazonaws.com/images/m4-imac-header.webp" alt="M4 iMac header image" class="headerimg" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;max-width:100%;display:block;margin-left:-76%;margin-right:auto;padding-bottom:30px;min-width:150%;left:50%;position:relative;overflow:hidden;">
</div>

<div class="content center" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;"></div>
<div class="content-inner block4 s-text" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:0 10%;border:0;text-align:left;font-size:16px;color:rgb(134, 134, 139);line-height:26px;font-weight:500;max-width:700px;">
  <!-- !ITEM TITLES -->
  <div id="build_to_order1" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:5px auto 35px auto;padding:25px 35px !important;border:0;box-sizing:border-box;overflow:hidden;background:linear-gradient(to bottom right,#0096FF,#BB64FF,#F55273);border-radius:30px;font-weight:500 !important;font-size:15px !important;letter-spacing:-0.01em;color:white;box-shadow:0px 2px 6px rgba(0, 0, 0, 0.2);"></div>
  <h3 style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;text-align:center;font-size:24px;color:black;line-height:25px;font-weight:900;padding-bottom:10;">
    <img src="https://deecies.s3.eu-west-1.amazonaws.com/images/m4-icon.png" style="padding-right:4px;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;" width="30px" alt="M4">
    iMac in Silver
  </h3>
  <div id="Col1" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;float:none;width:4%;font-weight:300;font-size:13px;"><i style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">Specification:</i></div>
  <div id="ColRight" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:auto;padding:5px 0 5px 0;border:0;float:none;width:100%;display:block;text-align:center;">
    <div id="Col2" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:auto;padding:0;border:0;float:none;margin-left:-67px;width:100%;">
      <!-- !ITEM SPEC -->
      <ul style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;list-style-type:none;list-style:none;">
        <li style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">Apple M4 Chip</li>
        <li style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">16GB unified memory</li>
        <li style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">256GB SSD</li>
        <li style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">Four Thunderbolt 4 Ports</li>
        <li style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">Magic Keyboard with Touch ID</li>
        <li style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">Gigabit Ethernet Port</li>
        <!-- <li></li> -->
      </ul>
    </div>
    <div id="Col3" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:auto;padding:0;border:0;float:none;margin-left:0px;width:100%;">
      <ul style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;list-style-type:none;list-style:none;">
        <li style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">10-core CPU, 10-core GPU</li>
        <li style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">16-core Neural Engine</li>
        <li style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">24-inch 4.5K Retina display</li>
        <li style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">Standard glass</li>
        <li style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">Magic Mouse</li>
        <li class="no-bullet" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">
          <img src="https://deecies.s3.eu-west-1.amazonaws.com/images/appleintelligence-logo.png" style="position:relative;top:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;" width="15px">
          Built for Apple Intelligence
        </li>
        <!-- <li></li> <li></li> -->
      </ul>
    </div>
  </div>
  <div class="clr" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;clear:both;"></div>
  <!-- !ITEM MORE INFO -->
  <div class="item-description" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:12px 0 20px;border:0;text-align:justify;">
    <div id="m4imac" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;"></div>
  </div>
</div>
<!-- !END ITEM -->
<!-- !box section -->
<div class="boxes-center" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;padding-left:35px;padding-right:35px;">
  <section id="imac-boxes" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">
    <div class="flex-container" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:0;border:0;display:block;max-width:400px;">
      <!-- !iMac Section -->
      <div class="rounded-box flex-child flex-box-content miniloop" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto 35px auto;padding:35px 4% 35px 4%;border:0;background:white;order:1;height:560px;display:block;position:relative;z-index:0;box-sizing:border-box;overflow:hidden;border-radius:30px;max-width:1250px;isolation:isolate;flex:1;min-height:435px;">
        <div class="content-wrapper" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;isolation:isolate;">
          <div class="box2-header imac-header" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;font-size:90px;font-weight:800;letter-spacing:-0.01em;position:relative;text-align:right;color:rgba(255, 255, 255, 0.4);mix-blend-mode:plus-lighter;"></div>
          <video class="mini_loop" autoplay playsinline loop muted style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;width:100%;aspect-ratio:16 / 9;object-fit:cover;background:#FAFAFA;position:absolute;top:0;left:0;height:100%;z-index:-1;">
            <source src="https://deecies.s3.eu-west-1.amazonaws.com/video/imac_spin.mp4" type="video/mp4" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;"></source>
            There should be a video here, but your browser doesn't support it
            - time to upgrade to a new Mac!
          </video>
        </div>
      </div>
      <!-- !Mac mini cooling box -->
      <div class="rounded-box flex-child box-text flex-box-content imac-store" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto 35px auto;padding:35px 4% 35px 4%;border:0;font-size:16px;color:rgb(134, 134, 139);line-height:26px;font-weight:300;display:block;position:relative;z-index:0;box-sizing:border-box;overflow:hidden;border-radius:30px;max-width:1250px;isolation:isolate;flex:1;order:2;min-height:435px;">
        <img class="imac_store" src="https://deecies.s3.eu-west-1.amazonaws.com/images/imac-storefront.webp" alt="A modern store setting with two people using an Apple iMac at a high wooden table. One person is seated, interacting with the iMac, which displays a product catalogue, while the other person stands, smiling his hand on a wollen hat placed on the table. The store has large windows, potted plants, and a surfboard leaning against the wall, with additional people and decor visible in the reflection of a large circular mirror." style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;z-index:-1;min-height:auto;">
      </div>
    </div>
  </section>
  <!-- !macOS box -->
  <div class="rounded-box box-text sequoia content-inner block4 box-content" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto 35px auto;padding:35px 60px 35px 40px;border:0;text-align:left;min-height:720px;font-size:16px;color:rgb(134, 134, 139);line-height:26px;font-weight:300;display:block;position:relative;z-index:0;box-sizing:border-box;overflow:hidden;border-radius:30px;max-width:1250px;isolation:isolate;">
    <div class="box1-header sequoia-header" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:15 0 0 20;padding:0;border:0;font-size:18px;font-weight:600;letter-spacing:-0.01em;color:white;"></div>
    <div class="box1-heading sequoia-title" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:20 0 0 20;padding:0;border:0;font-size:38px;font-weight:700;letter-spacing:-.028em;color:white;max-width:360px;margin-top:100px;line-height:normal;"></div>
    <div class="seqbox1-content sequoia-content" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;font-size:clamp(16px, 3vw, 18px);font-weight:500;letter-spacing:-0.01em;color:white;max-width:440px;margin-top:30px;padding-left:20px;line-height:clamp(14px, 6vw, 26px);"></div>
    <img class="macos-mbp" src="https://deecies.s3.eu-west-1.amazonaws.com/images/imac_sequoia.webp" alt="Purple iMac cut off from the right at the side of a box showcasing macOS Sequoia's advantages" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:52px 106px 30px;padding:0;border:0;display:block;position:relative;z-index:1;left:0;bottom:0;max-width:100%;right:0;">
  </div>

  <!-- !Apple Intelligence box -->
  <section id="apple-intelligence-container" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:45px auto 45px auto;padding:40px;border:0;position:relative;background-color:transparent;border-radius:30px;overflow:visible;color:#f5f5f7;max-width:1169px;text-align:center;z-index:0;">
    <div class="apple-intelligence-content" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">
      <h2 class="headline" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;font-size:clamp(40px, 11vw, 65px);font-weight:700;color:transparent;background:var(--ai-gradient);-webkit-background-clip:text;background-clip:text;letter-spacing:-0.015em;">Apple Intelligence.</h2>
      <p class="sub-headline" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:auto;padding:0;border:0;font-size:65px;color:#ffffff;font-weight:700;letter-spacing:-0.015em;line-height:1.05;max-width:850px;">Genius at work.</p>
      <div class="ai_description" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;font-size:18px;color:#86868b;margin-top:40px;max-width:600px;margin-left:auto;margin-right:auto;line-height:1.4;letter-spacing:-0.01em;font-weight:500;">
        <p style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:auto;padding:0;border:0;max-width:850px;">
          Apple Intelligence is the personal intelligence system that helps
          you
          <span class="highlight" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;color:#f5f5f7;">write, express yourself, and get things done effortlessly.</span>
          With groundbreaking privacy protections, it gives you peace of mind
          that no one else can access your data &mdash; not even Apple.
        </p>
      </div>

      <div class="carousel-wrapper" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:60px auto 40px;padding:0;border:0;position:relative;">
        <input type="radio" name="tabs" id="tab1" checked style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;position:fixed;opacity:0;pointer-events:none;top:-9999px;">
        <input type="radio" name="tabs" id="tab2" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;position:fixed;opacity:0;pointer-events:none;top:-9999px;">
        <input type="radio" name="tabs" id="tab3" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;position:fixed;opacity:0;pointer-events:none;top:-9999px;">

        <div class="carousel" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;width:100%;height:clamp(640px, 57vw, 780px);position:relative;overflow:hidden;">
          <div class="carousel-slides" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;width:300%;height:100%;min-height:530px;position:relative;transition:transform 0.5s ease-in-out;">
            <div class="carousel-slide" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;width:33.333%;height:100%;float:left;position:relative;text-align:center;display:flex;flex-direction:column;overflow:hidden;">
              <img class="anchor-center-center" src="https://deecies.s3.eu-west-1.amazonaws.com/images/apple_intelligence_writing.jpg" alt="Writing Tools" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;width:100%;height:100%;aspect-ratio:16/9;object-fit:cover;border-radius:8px;margin-bottom:20px;object-position:center center;min-height:490px;">
              <p style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:auto;padding:0;border:0;max-width:850px;">
                Writing Tools can proofread your text and rewrite different
                versions until the tone and wording are just right, and
                summarise selected text with a click.
              </p>
            </div>
            <div class="carousel-slide" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;width:33.333%;height:100%;float:left;position:relative;text-align:center;display:flex;flex-direction:column;overflow:hidden;">
              <img class="anchor-top-right" src="https://deecies.s3.eu-west-1.amazonaws.com/images/apple_intelligence_siri.jpg" alt="Siri" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;width:100%;height:100%;aspect-ratio:16/9;object-fit:cover;border-radius:8px;margin-bottom:20px;object-position:100% 0;min-height:490px;">
              <p style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:auto;padding:0;border:0;max-width:850px;">
                With an all-new design, richer language understanding, and the
                ability to type to Siri whenever it's convenient for you,
                communicating with Siri is more natural than ever.
              </p>
            </div>
            <div class="carousel-slide" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;width:33.333%;height:100%;float:left;position:relative;text-align:center;display:flex;flex-direction:column;overflow:hidden;">
              <img class="anchor-top-center" src="https://deecies.s3.eu-west-1.amazonaws.com/images/apple_intelligence_summaries.jpg" alt="Priority Messages" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;width:100%;height:100%;aspect-ratio:16/9;object-fit:cover;border-radius:8px;margin-bottom:20px;object-position:37%;min-height:490px;">
              <p style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:auto;padding:0;border:0;max-width:850px;">
                Get time-sensitive messages at the top of your inbox, like an
                invitation for a meeting in an hour or a reminder to check in
                for your flight. And Mail helps you summarise messages in a
                snap.
              </p>
            </div>
          </div>
        </div>

        <ul class="tab-controls" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:20 0 20 0;padding:0;border:0;list-style-type:none;display:block;gap:30px;position:relative;list-style:none;">
          <li class="tab-control" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;position:relative;">
            <label for="tab1" class="tab-label" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;font-size:25px;font-weight:600;color:#424245;cursor:pointer;padding-bottom:8px;display:inline-block;position:relative;letter-spacing:-0.01em;">Writing Tools</label>
          </li>
          <li class="tab-control" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;position:relative;">
            <label for="tab2" class="tab-label" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;font-size:25px;font-weight:600;color:#424245;cursor:pointer;padding-bottom:8px;display:inline-block;position:relative;letter-spacing:-0.01em;">Siri</label>
          </li>
          <li class="tab-control" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;position:relative;">
            <label for="tab3" class="tab-label" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;font-size:25px;font-weight:600;color:#424245;cursor:pointer;padding-bottom:8px;display:inline-block;position:relative;letter-spacing:-0.01em;">Priority Messages</label>
          </li>
        </ul>
      </div>
    </div>
    <div class="privacy-section" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:40px -40px -40px;padding:40px 40px 80px 40px;border:0;background-color:#161617;border-radius:0 0 30px 30px;text-align:center;">
      <h3 class="privacy-headline" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto 40px auto;padding:0;border:0;font-size:48px;font-weight:700;color:#f5f5f7;max-width:70%;line-height:1.1;text-align:center;">
        <img src="https://deecies.s3.eu-west-1.amazonaws.com/images/applelock.jpg" alt="Apple Lock" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;width:74px;">
      </h3>
      <h3 class="privacy-headline" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto 40px auto;padding:0;border:0;font-size:48px;font-weight:700;color:#f5f5f7;max-width:70%;line-height:1.1;text-align:center;">
        Great powers come with great
        <span class="privacy-gradient-text" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;color:transparent;background:var(--privacy-gradient);-webkit-background-clip:text;background-clip:text;">privacy.</span>
      </h3>
      <div class="privacy-content" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;display:flex;gap:40px;text-align:left;justify-content:center;flex-wrap:wrap;">
        <div class="privacy-column" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;flex:1 1 33.333%;max-width:33.333%;box-sizing:border-box;">
          <p class="ai_description" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:auto;padding:0;border:0;font-size:18px;color:#86868b;margin-top:40px;max-width:850px;margin-left:auto;margin-right:auto;line-height:1.4;letter-spacing:-0.01em;font-weight:500;">
            Apple Intelligence is
            <span class="highlight" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;color:#f5f5f7;">designed to protect your privacy at every step.</span>
            It's integrated into the core of your Mac through on-device
            processing. So it's aware of your personal information without
            collecting your personal information.
          </p>
        </div>
        <div class="privacy-column" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;flex:1 1 33.333%;max-width:33.333%;box-sizing:border-box;">
          <p class="ai_description" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:auto;padding:0;border:0;font-size:18px;color:#86868b;margin-top:40px;max-width:850px;margin-left:auto;margin-right:auto;line-height:1.4;letter-spacing:-0.01em;font-weight:500;">
            And with
            <span class="highlight" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;color:#f5f5f7;">groundbreaking Private Cloud Compute,</span>
            Apple Intelligence can draw on larger server-based models, running
            on Apple silicon, to handle more complex requests for you while
            protecting your privacy.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- !Mac mini specs section -->
  <section id="mini-specs" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;display:block;">
    <div class="rounded-box select box-text" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto 35px auto;padding:0;border:0;background:#fafafa;-moz-appearance:margin: 35px auto 0 auto;font-size:16px;color:rgb(134, 134, 139);line-height:26px;font-weight:300;display:block;position:relative;z-index:0;box-sizing:border-box;overflow:hidden;border-radius:30px;max-width:1250px;isolation:isolate;">
      <img id="mac-specs" src="https://deecies.s3.eu-west-1.amazonaws.com/images/imac-specs.webp" alt="Apple&rsquo;s 2024 iMac promotional image, showcasing features of the 24-inch iMac with M4 chip. Key highlights include a six-speaker sound system, compatibility with up to two external displays, macOS Sequoia, up to 32GB of unified memory, USB-C Magic accessories, and a 12MP Center Stage camera. The iMac boasts a 4.5K Retina display, nano-texture glass option, studio-quality mics, Touch ID, iPhone mirroring, and Desk View. Available in multiple colours, it claims to be up to 6x faster than the most popular Intel-based iMac and 2x faster than the M1 iMac." style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;max-width:100%;background:#e1e1e1;">
    </div>
  </section>
  <div class="flex-container" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:0;border:0;display:block;max-width:400px;">
    <!-- !Delivery Date section -->
    <div class="rounded-box flex-child box-text cpu flex-box-content" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto 35px auto;padding:35px 4% 35px 4%;border:0;background:linear-gradient(to right top, #14466e 0%, #accadd 100%);order:1;min-height:435px;font-size:16px;color:rgb(134, 134, 139);line-height:26px;font-weight:300;display:block;position:relative;z-index:0;box-sizing:border-box;overflow:hidden;border-radius:30px;max-width:1250px;isolation:isolate;flex:1;">
      <div class="box1-header" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:15 0 0 20;padding:0;border:0;font-size:18px;font-weight:600;letter-spacing:-0.01em;color:white;"><span id="OrderTitle" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;"></span></div>
      <div class="box2-content pad" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:30px 0 25px 0;border:0;padding-top:25px;font-size:18px;font-weight:600;letter-spacing:-0.01em;color:white;max-width:350px;text-align:center;">
        If ordered today we estimate delivery to be between
      </div>
      <div class="bigd bigdelivery1" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;font-size:40px;font-weight:700;letter-spacing:-.028em;color:white;text-align:center;line-height:normal;"></div>
      <div class="box2-content" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:30px 0 25px 0;border:0;font-size:18px;font-weight:600;letter-spacing:-0.01em;color:white;max-width:350px;text-align:center;">and the</div>
      <div class="bigd bigdelivery2" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;font-size:40px;font-weight:700;letter-spacing:-.028em;color:white;text-align:center;line-height:normal;"></div>
    </div>
    <!-- !Vat box -->
    <div class="rounded-box vat flex-child box-text flex-box-content" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto 35px auto;padding:35px 4% 35px 4%;border:0;background:linear-gradient(to right bottom, #c3c4eb 0%, #2d336e 100%);min-height:435px;order:2;font-size:16px;color:rgb(134, 134, 139);line-height:26px;font-weight:300;display:block;position:relative;z-index:0;box-sizing:border-box;overflow:hidden;border-radius:30px;max-width:1250px;isolation:isolate;flex:1;">
      <div class="box1-header vat-header" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:15 0 0 20;padding:0;border:0;font-size:18px;font-weight:600;letter-spacing:-0.01em;color:white;"></div>
      <div class="box1-heading vat-title" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:20 0 0 20;padding:0;border:0;font-size:43px;font-weight:700;letter-spacing:-.028em;color:white;max-width:360px;margin-top:100px;line-height:normal;"></div>
      <div class="box1-content vat-content" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:20px;padding:0;border:0;font-size:16px;font-weight:600;letter-spacing:-0.01em;color:white;max-width:350px;margin-top:30px;"></div>
    </div>
  </div>
  <!-- !Side by side -->
  <div class="flex-container" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:0;border:0;display:block;max-width:400px;">
    <div class="rounded-box greenbox flex-child box-text flex-box-content" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto 35px auto;padding:35px 4% 35px 4%;border:0;background:linear-gradient(to bottom, #203025 0%, #151516 100%);font-size:16px;color:rgb(134, 134, 139);line-height:26px;font-weight:300;display:block;position:relative;z-index:0;box-sizing:border-box;overflow:hidden;border-radius:30px;max-width:1250px;isolation:isolate;flex:1;min-height:435px;">
      <div class="box1-heading greenheading bespoketitle" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:20 0 0 20;padding:0;border:0;margin-top:100px;color:white;font-size:43px;font-weight:700;letter-spacing:-.028em;max-width:360px;line-height:normal;"></div>
      <div class="greenleaf" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;shape-outside:ellipse(150px 300px at 50% 50%);float:right;"></div>
      <div class="box1-content bespokecontent" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:20px;padding:0;border:0;max-width:350px;font-size:16px;font-weight:600;letter-spacing:-0.01em;color:white;margin-top:30px;"></div>
      <img src="https://deecies.s3.eu-west-1.amazonaws.com/images/carbonneutral.png" class="greenfooter" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;width:37%;display:inline-block;padding-top:19%;position:relative;padding-left:22px;">
    </div>
    <div class="rounded-box int flex-child box-text flex-box-content" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto 35px auto;padding:35px 4% 35px 4%;border:0;min-height:435px;font-size:16px;color:rgb(134, 134, 139);line-height:26px;font-weight:300;display:block;position:relative;z-index:0;box-sizing:border-box;overflow:hidden;border-radius:30px;max-width:1250px;isolation:isolate;flex:1;">
      <div class="box1-header worldwideheader" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:15 0 0 20;padding:0;border:0;font-size:18px;font-weight:600;letter-spacing:-0.01em;color:white;"></div>
      <div class="box1-heading worldwideheading" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:20 0 0 20;padding:0;border:0;font-size:43px;font-weight:700;letter-spacing:-.028em;color:white;max-width:360px;margin-top:100px;line-height:normal;"></div>
      <div class="box1-content worldwide" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:20px;padding:0;border:0;font-size:16px;font-weight:600;letter-spacing:-0.01em;color:white;max-width:350px;margin-top:30px;"></div>
    </div>
  </div>
  <!-- !M1 Select -->
  <div class="rounded-box select box-text" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto 35px auto;padding:0;border:0;background:#fafafa;-moz-appearance:margin: 35px auto 0 auto;font-size:16px;color:rgb(134, 134, 139);line-height:26px;font-weight:300;display:block;position:relative;z-index:0;box-sizing:border-box;overflow:hidden;border-radius:30px;max-width:1250px;isolation:isolate;">
    <div class="box3-header select-pro-header" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:60px auto 15px auto;padding:0;border:0;font-size:64px;font-weight:800;letter-spacing:-.030em;color:#111111;max-width:616px;text-align:center;line-height:normal;"></div>
    <div class="flex-container baseline" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:0;border:0;flex-flow:row wrap;justify-content:space-around;align-items:baseline;display:block;max-width:400px;">
      <div class="box3-select" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:40px 0;border:0;font-size:24px;font-weight:700;color:#000;text-align:center;width:300px;letter-spacing:-0.03em;">
        <img class="s-img-p" src="https://deecies.s3.eu-west-1.amazonaws.com/images/m4-logo-shop.webp" alt="M4 chip" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:0;border:0;display:block;padding-bottom:30px;text-align:center;width:50%;">
        <div class="select-m4" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;padding-bottom:15px;"></div>
        <a href="https://www.ebay.co.uk/sch/i.html?_dkr=1&amp;iconV2Request=true&amp;_blrs=recall_filtering&amp;_ssn=deecies&amp;store_cat=0&amp;store_name=deecies&amp;_oac=1&amp;_nkw=m4%20-m2%20-max%20-%22m4%20pro%22" class="button" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:4px 12px;border:0;background:#0071e3;text-align:center;white-space:nowrap;cursor:pointer;display:block;border-radius:12px;width:27px;font-size:12px;line-height:1.3;font-weight:400;letter-spacing:-.01em;text-decoration:none;color:#fff;">
          <div class="shop" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;"></div>
        </a>
      </div>
      <div class="box3-select" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:40px 0;border:0;font-size:24px;font-weight:700;color:#000;text-align:center;width:300px;letter-spacing:-0.03em;">
        <img class="s-img-p" src="https://deecies.s3.eu-west-1.amazonaws.com/images/m4-pro-logo-shop.webp" alt="M4 Pro chip" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:0;border:0;display:block;padding-bottom:30px;text-align:center;width:50%;">
        <div class="select-pro4" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;padding-bottom:15px;"></div>
        <a href="https://www.ebay.co.uk/sch/i.html?_dkr=1&amp;iconV2Request=true&amp;_blrs=recall_filtering&amp;_ssn=deecies&amp;store_cat=0&amp;store_name=deecies&amp;_oac=1&amp;_nkw=m4%20pro%20-m2%20-max" class="button" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:4px 12px;border:0;background:#0071e3;text-align:center;white-space:nowrap;cursor:pointer;display:block;border-radius:12px;width:27px;font-size:12px;line-height:1.3;font-weight:400;letter-spacing:-.01em;text-decoration:none;color:#fff;"><div class="shop" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;"></div></a>
      </div>
      <div class="box3-select" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:40px 0;border:0;font-size:24px;font-weight:700;color:#000;text-align:center;width:300px;letter-spacing:-0.03em;">
        <img class="s-img-p" src="https://deecies.s3.eu-west-1.amazonaws.com/images/m4-max-logo-shop.webp" alt="M4 Max chip" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:0;border:0;display:block;padding-bottom:30px;text-align:center;width:50%;">
        <div class="select-max4" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;padding-bottom:15px;"></div>
        <a href="https://www.ebay.co.uk/sch/i.html?_dkr=1&amp;iconV2Request=true&amp;_blrs=recall_filtering&amp;_ssn=deecies&amp;store_cat=0&amp;store_name=deecies&amp;_oac=1&amp;_nkw=m4%20max%20-air%20-mini%20-24%20-13" class="button" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:4px 12px;border:0;background:#0071e3;text-align:center;white-space:nowrap;cursor:pointer;display:block;border-radius:12px;width:27px;font-size:12px;line-height:1.3;font-weight:400;letter-spacing:-.01em;text-decoration:none;color:#fff;">
          <div class="shop" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;"></div>
        </a>
      </div>
    </div>
    <div class="box3-shop" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;padding-bottom:35px;">
      <a href="https://www.ebay.co.uk/str/deecies" class="button buttonbig" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0 auto;padding:4px 12px;border:0;background:#0071e3;text-align:center;white-space:nowrap;cursor:pointer;display:block;border-radius:12px;width:76px;font-size:12px;line-height:1.3;font-weight:400;letter-spacing:-.01em;text-decoration:none;color:#fff;">
        <div class="ebaystore" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;"></div></a>
    </div>
  </div>
</div>
<!-- !STEVE QUOTE -->
<div id="Steve" class="group" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;background:#000;color:#ddd;text-align:left;">
  <div class="content-inner footend boxy" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;text-align:center;">
    <div class="slogan" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:15px 0px 15px 5px;padding:0;border:0;font-size:11px;display:inline-block;vertical-align:middle;text-align:left;max-width:272px;">
      &ldquo;The people who are crazy enough to think they can change the world are
      the ones who do.&rdquo; - <span style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;font-size:10px;font-weight:lighter;font-style:italic;margin-right:0px;">Steve Jobs.</span>
    </div>
    <div class="right" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:6px 0 6px 6px;border:0;vertical-align:middle;height:60px;display:inline-block;">
      <img src="https://s3-eu-west-1.amazonaws.com/deecies/images/stevejobs.png" alt="Steve Jobs" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;vertical-align:middle;height:60px;">
    </div>
  </div>
  <!-- END STEVE QUOTE -->
</div>
<div id="Footer" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:15px 0;border:0;background-image:linear-gradient(90deg, #d5344d, #ad2570) !Important;color:#fff;">
  <!-- FOOTER -->
  <div class="content-inner footend" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">
    <div class="left" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;width:calc(46% - 4px);font-size:.77em;display:inline-block;vertical-align:middle;padding-left:4%;">
      <img class="copyright" src="https://deecies.com/js/copyright.php" alt="Copyright Information" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:3px;border:0;display:inline-block;vertical-align:middle;transform:scale(0.5);">
    </div>
    <div class="right" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0px 20px 0 0;padding:0;border:0;width:calc(50% - 24px);font-size:.6em !important;line-height:1em;font-weight:100;text-align:justify;display:inline-block;vertical-align:middle;">
      <img src="https://s3-eu-west-1.amazonaws.com/deecies/images/apple-logo.png" alt="Apple Logo" style="width:8px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">
      Apple Logo, Mac, macOS, iOS, iPadOS, App Store, tvOS, watchOS, M2, M3,
      M4, iPhone, iMac, Mac mini, Mac Pro, MacBook, MacBook Pro, MacBook Air,
      Vision Pro, MacApp and Retina are trademarks of Apple Inc., registered
      in the U.S. and other countries.
    </div>
  </div>
</div>
<!-- EBAY MOBILE DESC -->
<div style="font-size:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">
  <div vocab="https://schema.org/" typeof="Product" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">
    <span property="description" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;border:0;">*IMPORTANT* Please tap on "See full description" for all the
      information about this product including CLEARLY shown dispatch times.
      24-inch Apple iMac with M4 chip, 10-core CPU, 10-core GPU, 16-core
      Neural Engine, 16GB unified memory, 256GB SSD, Magic Keyboard with Touch
      ID and Magic Mouse, Four Thunderbolt 4 Ports, headphone jack, Gigabit
      Ethernet port and Standard glass.</span>
  </div>
</div>
<!-- /FOOTER -->
</div>
  `;
    setGeneratedHtml(html);
  }, [title, mainText, imageUrl]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedHtml).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  return (
    <div className="p-8 w-full">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-700">
        Embeddable HTML Generator
      </h2>
      <div className="flex gap-8">
        {/* Left Column: Input Form */}
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <label className="text-black mb-2">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="text-black mb-2">Main Text:</label>
          <textarea
            value={mainText}
            onChange={(e) => setMainText(e.target.value)}
            className="px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
          />

          <label className="text-black mb-2">Image URL:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Right Column: Buttons and Preview */}
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <button
            onClick={() => setShowHtml(!showHtml)}
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            {showHtml ? "Hide HTML" : "Show HTML"}
          </button>

          {showHtml && (
            <div className="mb-4 h-40 overflow-auto">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Generated HTML:
              </h3>
              <pre className="bg-gray-100 p-4 rounded-md text-sm h-40 overflow-auto">
                {generatedHtml}
              </pre>
            </div>
          )}

          <button
            onClick={copyToClipboard}
            className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            {copySuccess ? "Copied!" : "Copy HTML to Clipboard"}
          </button>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Preview:</h3>

      <iframe
        srcDoc={generatedHtml}
        title="Generated Preview"
        className="w-full min-h-screen border rounded-md overflow-auto bg-gray-200 p-4"
      />
    </div>
  );
}

export default App;

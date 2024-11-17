const html = (title, mainText, imageUrl) => `
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="https://ebay-desc-generator.vercel.app/css.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
      rel="stylesheet"
    />
    <div class="dynamic-text" data-type="welcome">
      This is a welcome message.
    </div>
    <div class="dynamic-text" data-type="error">
      Something went wrong.
    </div>
    <div class="dynamic-text" data-type="info">
      Here's some information for you.
    </div>
    <div style="background-color: #f3f4f6">
      <div class="header">
        <div class="logo">
          <img src="https://cdn.shopify.com/s/files/1/0868/2979/3611/files/banner-ebay.png?v=1731788868s" />
        </div>
        <div class="website">
          <h4>
            Discover more products and enjoy better pricing on our website:
          </h4>
          <a href="https://www.rougetechnologies.com/" target="_blank">
            www.rougetechnologies.com
          </a>
        </div>
        <div>
          <div class="menu-bg">
            <div class="row">
              <div>
                <input type="checkbox" id="toggle-nav" />
                <label for="toggle-nav">Menu</label>
                <div class="menu">
                  <ul>
                    <li>
                      <a href="https://www.ebay.co.uk/str/rougetechnologies">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="https://www.ebay.co.uk/str/rougetechnologies#tab1">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="https://www.ebay.co.uk/sch/rougetechnologiesuk/m.html?_nkw=&amp;_armrs=1&amp;_ipg=&amp;_from=">
                        View All Products
                      </a>
                    </li>
                    <li>
                      <a href="https://www.ebay.co.uk/cnt/intermediatedFAQ?requested=rougetechnologiesuk&amp;_trksid=p2545226.m2531.l4583&amp;rt=nc">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="https://www.ebay.co.uk/fdbk/feedback_profile/rougetechnologiesuk?filter=feedback_page:All">
                        Feedback
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="middle">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="categoriess">
                <div class="side-container">
                  <h4 class="cate-head">Categories</h4>
                  <div class="cate-detail">
                    <ul>
                      <li>
                        <a
                          href="https://www.ebay.co.uk/str/rougetechnologies/Computers-Tablets-Networking/_i.html?_sacat=58058"
                          target="_blank"
                        >
                          Computers/Tablets &amp; Networking
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.ebay.co.uk/str/rougetechnologies/Health-Beauty/_i.html?_sacat=26395"
                          target="_blank"
                        >
                          Health &amp; Beauty
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.ebay.co.uk/str/rougetechnologies/Cameras-Photo/_i.html?_sacat=625"
                          target="_blank"
                        >
                          Cameras &amp; Photo
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.ebay.co.uk/str/rougetechnologies/Cell-Phones-Accessories/_i.html?_sacat=15032"
                          target="_blank"
                        >
                          Cell Phones &amp; Accessories
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.ebay.co.uk/str/rougetechnologies/Consumer-Electronics/_i.html?_sacat=293"
                          target="_blank"
                        >
                          Consumer Electronics
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.ebay.co.uk/str/rougetechnologies/Video-Games-Consoles/_i.html?_sacat=1249"
                          target="_blank"
                        >
                          Video Games &amp; Consoles
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.ebay.co.uk/str/rougetechnologies/Sporting-Goods/_i.html?_sacat=888"
                          target="_blank"
                        >
                          Sporting Goods
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.ebay.co.uk/str/rougetechnologies/Home-Garden/_i.html?_sacat=11700"
                          target="_blank"
                        >
                          Home &amp; Garden
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.ebay.co.uk/str/rougetechnologies/Baby/_i.html?_sacat=2984"
                          target="_blank"
                        >
                          Baby
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="side-container">
                  <div class="cate-head">
                    <h4>Why Choose Us?</h4>
                  </div>
                  <div class="cate-detail">
                    <div class="cate-img-box">
                      <img src="https://masterofdropship.com/clients/mohammedrezw458/images/paypal.png" />
                      <img src="https://masterofdropship.com/clients/mohammedrezw458/images/payments.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="side-container">
              <div class="main-title">
                <h4>
                ${title}
                </h4>
              </div>
              <div class="row">
                <div>
                  <div class="gallery">
                    <div class="product-image-box">
                      <img src="${imageUrl}" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="f-detail">
                    <h1>
                      <strong>
                        HP EliteBook 840 G8 14" Quad i7-1185G7 32GB 256GB NVMe
                        Windows 11 Laptop
                      </strong>
                    </h1>
                    <h1>&nbsp;</h1>
                    <p>&nbsp;</p>
                    <h2>
                      <em>
                        <strong>[Item is Used - No Box]</strong>
                      </em>
                    </h2>
                    <h2>
                      <em>
                        <strong>With Charger]&nbsp;</strong>
                      </em>
                    </h2>
                    <h2>&nbsp;</h2>
                    <p>&nbsp;</p>
                    <p>
                      The HP EliteBook 840 G8 is designed for professionals
                      seeking performance, security, and style in a sleek,
                      lightweight form. Featuring Intel's powerful 11th Gen i7
                      processor, this laptop is ideal for multitasking,
                      productivity, and running demanding applications
                      effortlessly. Enhanced with robust security features, it's
                      the perfect choice for business professionals on the go.
                    </p>
                    <p>&nbsp;</p>
                    <h2>
                      <strong>
                        <em>Key Specifications:</em>
                      </strong>
                    </h2>
                    <h2>&nbsp;</h2>
                    <ul>
                      <li>
                        <strong>Processor</strong>: Intel Core i7 Vpro&nbsp;
                      </li>
                      <li>
                        <strong>Display</strong>: 14-inch Full HD (1920 x 1080)
                        Anti-Glare screen
                      </li>
                      <li>
                        <strong>Memory</strong>: 32GB DDR4 RAM for smooth
                        multitasking
                      </li>
                      <li>
                        <strong>Storage</strong>: 256GB NVMe SSD for fast data
                        access and storage
                      </li>
                      <li>
                        <strong>Operating System</strong>: Pre-installed with
                        Windows 11 for advanced business capabilities
                      </li>
                      <li>
                        <strong>Graphics</strong>: Intel Iris Xe integrated
                        graphics
                      </li>
                      <li>
                        <strong>Battery Life</strong>: Long-lasting battery to
                        keep up with your busy schedule
                      </li>
                    </ul>
                    <p>&nbsp;</p>
                    <h2>
                      <em>
                        <strong>Key Features:</strong>
                      </em>
                    </h2>
                    <h2>&nbsp;</h2>
                    <ul>
                      <li>
                        <strong>Enhanced Security</strong>: Equipped with HP
                        Sure Start, fingerprint sensor, and other advanced
                        security features to keep your data safe.
                      </li>
                      <li>
                        <strong>Compact &amp; Lightweight</strong>: Weighing
                        just around 3 lbs, it's portable and easy to carry.
                      </li>
                      <li>
                        <strong>Connectivity Options</strong>: Multiple USB-C
                        and USB-A ports, HDMI, and headphone/microphone combo
                        for versatile connectivity.
                      </li>
                      <li>
                        <strong>Fast Wireless</strong>: Wi-Fi 6 and Bluetooth
                        5.0 ensure high-speed wireless connectivity.
                      </li>
                      <li>
                        <strong>Audio &amp; Webcam</strong>: Crisp audio and
                        720p HD webcam with privacy shutter for professional
                        video calls.
                      </li>
                    </ul>
                    <p>&nbsp;</p>
                    <h2>
                      <em>
                        <strong>Why You Should Buy:</strong>
                      </em>
                    </h2>
                    <h2>&nbsp;</h2>
                    <ul>
                      <li>
                        This EliteBook 840 G8 is the ultimate choice for
                        professionals who need power, portability, and security.
                        It’s ideal for multitasking, with ample RAM and speedy
                        storage for seamless productivity.
                      </li>
                      <li>
                        The combination of a brilliant display, ergonomic
                        design, and robust security features ensures an
                        exceptional work experience from anywhere.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="feedback-section-1">
          <div class="title">
            <h4>Feedbacks</h4>
          </div>
          <div class="feedback-details">
            <div class="feedback-card">
              <p>e***e (202)</p>
              <p>
                <svg
                  viewBox="0 0 16 16"
                  height="16"
                  width="16"
                  aria-label="Positive feedback rating"
                  role="img"
                >
                  <circle cx="8" cy="8" r="8" fill="#05823F"></circle>
                  <path
                    d="M12.2857 7.28571H8.71429V3.71429C8.71429 3.3198 8.39449 3 8 3C7.60551 3 7.28571 3.3198 7.28571 3.71429V7.28571H3.71429C3.3198 7.28571 3 7.60551 3 8C3 8.39449 3.3198 8.71429 3.71429 8.71429H7.28571V12.2857C7.28571 12.6802 7.60551 13 8 13C8.39449 13 8.71429 12.6802 8.71429 12.2857V8.71429H12.2857C12.6802 8.71429 13 8.39449 13 8C13 7.60551 12.6802 7.28571 12.2857 7.28571Z"
                    fill="white"
                  ></path>
                </svg>
                Amazing. The price, packaging, shipping, everything. Seller was
                very nice and answered all my questions quickly and with the
                correct answers. I would definitely buy from this seller again
                in the future if given the chance! 100% recommended
              </p>
            </div>
            <div class="feedback-card">
              <p>d***d (1308)</p>
              <p>
                <svg
                  viewBox="0 0 16 16"
                  height="16"
                  width="16"
                  aria-label="Positive feedback rating"
                  role="img"
                >
                  <circle cx="8" cy="8" r="8" fill="#05823F"></circle>
                  <path
                    d="M12.2857 7.28571H8.71429V3.71429C8.71429 3.3198 8.39449 3 8 3C7.60551 3 7.28571 3.3198 7.28571 3.71429V7.28571H3.71429C3.3198 7.28571 3 7.60551 3 8C3 8.39449 3.3198 8.71429 3.71429 8.71429H7.28571V12.2857C7.28571 12.6802 7.60551 13 8 13C8.39449 13 8.71429 12.6802 8.71429 12.2857V8.71429H12.2857C12.6802 8.71429 13 8.39449 13 8C13 7.60551 12.6802 7.28571 12.2857 7.28571Z"
                    fill="white"
                  ></path>
                </svg>
                Item delivered earlier than expected and as described, new and
                unopened. Excellent communication and service. Thank you
              </p>
            </div>
            <div class="feedback-card">
              <p>d***d (1308)</p>

              <p>
                <svg
                  viewBox="0 0 16 16"
                  height="16"
                  width="16"
                  aria-label="Positive feedback rating"
                  role="img"
                >
                  <circle cx="8" cy="8" r="8" fill="#05823F"></circle>
                  <path
                    d="M12.2857 7.28571H8.71429V3.71429C8.71429 3.3198 8.39449 3 8 3C7.60551 3 7.28571 3.3198 7.28571 3.71429V7.28571H3.71429C3.3198 7.28571 3 7.60551 3 8C3 8.39449 3.3198 8.71429 3.71429 8.71429H7.28571V12.2857C7.28571 12.6802 7.60551 13 8 13C8.39449 13 8.71429 12.6802 8.71429 12.2857V8.71429H12.2857C12.6802 8.71429 13 8.39449 13 8C13 7.60551 12.6802 7.28571 12.2857 7.28571Z"
                    fill="white"
                  ></path>
                </svg>
                Great communication, very well packed, as described, low price,
                best seller, highly recommend A+++++
              </p>
            </div>
            <div class="feedback-card">
              <p>6***- (144)</p>
              <p>
                <svg
                  viewBox="0 0 16 16"
                  height="16"
                  width="16"
                  aria-label="Positive feedback rating"
                  role="img"
                >
                  <circle cx="8" cy="8" r="8" fill="#05823F"></circle>
                  <path
                    d="M12.2857 7.28571H8.71429V3.71429C8.71429 3.3198 8.39449 3 8 3C7.60551 3 7.28571 3.3198 7.28571 3.71429V7.28571H3.71429C3.3198 7.28571 3 7.60551 3 8C3 8.39449 3.3198 8.71429 3.71429 8.71429H7.28571V12.2857C7.28571 12.6802 7.60551 13 8 13C8.39449 13 8.71429 12.6802 8.71429 12.2857V8.71429H12.2857C12.6802 8.71429 13 8.39449 13 8C13 7.60551 12.6802 7.28571 12.2857 7.28571Z"
                    fill="white"
                  ></path>
                </svg>
                Item as described (New) - great price - great communication -
                speedy dispatch and delivery. I'd definitely recommend this
                seller and I'd definitely make another purchase from them again
              </p>
            </div>
          </div>
          <a
            href="https://www.ebay.co.uk/fdbk/feedback_profile/rougetechnologiesuk?filter=feedback_page:All"
            target="_blank"
            class="view-all"
          >
            View All Feedbacks
          </a>
        </div>
      </div>
      <div>
        <div id="tabs">
          <input id="tab1" type="radio" name="tabs" checked />
          <input id="tab2" type="radio" name="tabs" />
          <input id="tab3" type="radio" name="tabs" />
          <input id="tab4" type="radio" name="tabs" />
          <input id="tab5" type="radio" name="tabs" />
          <input id="tab6" type="radio" name="tabs" />
          <input id="tab7" type="radio" name="tabs" />

          <div class="tab-labels">
            <label for="tab1">About Us</label>
            <label for="tab2">Warranty</label>
            <label for="tab3">Shipping</label>
            <label for="tab4">Return</label>
            <label for="tab5">Terms & Conditions</label>
            <label for="tab6">VAT Status</label>
            <label for="tab7">Disclaimer</label>
          </div>

          <div class="tab-content">
            <div id="content1">
              <p>
                Welcome to Rouge Technologies! We are your premier destination
                for top-notch products and unparalleled customer service on
                eBay. With a commitment to excellence and reliability, we strive
                to make every shopping experience a delight for our valued
                customers.&nbsp;
              </p>
              <p>
                With years of experience in e-commerce we have honed our skills
                to streamline the shopping process and create a seamless online
                shopping experience. From browsing our listings to receiving
                your order at your doorstep, we are here to assist you every
                step of the way.
              </p>
              <p>
                Thank you for choosing Rouge Technologies as your preferred
                seller on eBay. We look forward to making your shopping
                experience truly exceptional.
              </p>
            </div>
            <div id="content2">
              <p>
                While all items are covered by our return policy, at times,
                customers may need to go to the manufacturer for warranty.
                Please read below for further information regarding warranty
                status of the items we sell.
              </p>
              <p>&nbsp;</p>
              <p>
                Brand new sealed Apple devices typically come with 1-year full
                warranty with the option to purchase AppleCare. However, please
                note that in some cases items are activated at original purchase
                date and as our stock is purchased from different vendors it is
                difficult to guarantee how long your specific Apple item has
                been in transit/storage before arriving to you. For this reason,
                we do not guarantee a full 1 year Apple warranty. Some devices
                can come with 9-12 months warranty or less. This is a rare
                occurrence and please rest assured, the vast majority of items
                come with full Apple warranty. In the majority of these rare
                cases, the Apple warranty updates to the activation date (when
                you turn it on) once you have used the device for 1-2 weeks.
                <br />
                <br />
              </p>
              <p>
                And while the majority of other brands sold by Rouge
                Technologies Ltd come with 1 year warranty direct from the
                manufacturer, please kindly always check prior to purchase
                directly with the brand if they are able to accept an invoice
                from an eBay sale as proof of purchase as each company has a
                different process. They may not always accept an invoice
                directly an eBay sale.
              </p>
            </div>
            <div id="content3">
              <p>
                We are always striving to offer a smooth &amp; uninterrupted
                delivery service. Orders purchased on a given day, will be
                dispatched within 2 working days of purchase with the delivery
                service shown at checkout. Shipping is always on us and fully
                insured!
              </p>
              <p>
                While we use reliable shipping partners, at times there can be
                delays which are unfortunately out of our control. For example,
                a Royal Mail First Class Parcel has a suggested 24 hour
                turnaround, but at times can take up to 10 working days. On the
                rare occasion this happens, please kindly keep up to date using
                the tracking and contact the courier directly if you require
                more information. Please do not hesitate to contact us if you
                have further questions.
              </p>
              <p>
                We are happy for customers to collect items from us directly!
                Please kindly purchase the item and choose collection at
                checkout. Due a high volume of messages, to ensure you do not
                miss out please kindly purchase first and we can then arrange a
                collection. Typically we are available to collect within 2
                working days.
              </p>
            </div>
            <div id="content4">
              <p>We offer a 30-day return policy on items.</p>
              <p>
                If items are returned with the seal taken off or used there is a
                20% restocking fee charged. Items returned in the exact same
                condition as dispatched will not be charged a restocking fee.
                Items returned due to change of mind will also be subject to a
                reduction of postage fees incurred during sale.
              </p>
            </div>
            <div id="content5">
              <p>
                Due to multiple previous scams, at the discretion of Rouge
                Technologies Ltd more information may be required about the
                individual making the purchase such as identification matching
                delivery address. With buyers with low feedback (30 or less) or
                negative feedback, orders will be accepted on a case by case
                basis.&nbsp;
              </p>
              <p>
                PayPal and all major credit and debit cards are accepted. Item
                will only be sent the buyers verified address. All items have
                their serial numbers and other identifiers recorded and many
                precautions are taken against potential scammers. We have seen
                all the different types of scams and will actively work to
                resolve and contact the police to begin an investigation to
                assist when a fraudulent claim is identified.&nbsp;
              </p>
            </div>
            <div id="content6">
              <p>
                We are a VAT-registered business and currently sell under the
                Global Accounting VAT Margin Scheme; as such, we are charged VAT
                on the margin. VAT is therefore included in the overall selling
                prices and cannot be shown separately on the invoice. This means
                that there will be no VAT to claim back. The advertised price
                will be the total price you will pay and will be shown on the
                invoice as one line item (to understand further, please read
                more on the Global Accounting VAT Margin Scheme on the U.K.
                government website).
              </p>
            </div>
            <div id="content7">
              <p>
                We are not affiliated, associated, authorized, endorsed by, or
                in any way officially connected with the brands mentioned in
                this listing, or any of its subsidiaries or its
                affiliates.&nbsp;
              </p>
              <p>
                Therefore mentioned brands as well as related names, marks,
                emblems and images are registered trademarks of their respective
                owners
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="row">
          <div>
            <div class="footer-box">
              <div class="footer-head">
                <h4>Quick Links:</h4>
              </div>
              <div class="footer-detail">
                <ul>
                  <li>
                    <a href="https://www.ebay.co.uk/str/rougetechnologies#tab1">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ebay.co.uk/cnt/intermediatedFAQ?requested=rougetechnologiesuk&amp;_trksid=p2545226.m2531.l4583&amp;rt=nc">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ebay.co.uk/fdbk/feedback_profile/rougetechnologiesuk?filter=feedback_page:All">
                      Feedback
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div class="footer-box">
              <div class="footer-head">
                <h4>Payment Options</h4>
              </div>
              <div class="footer-detail">
                <li>Secure Payments by:</li>
                <br />
                <img src="https://masterofdropship.com/clients/mohammedrezw458/images/payment.png" />
              </div>
            </div>
          </div>
          <div>
            <div class="footer-box">
              <div class="footer-head">
                <h4>Newsletter</h4>
              </div>
              <div class="footer-detail">
                <p>
                  Do you have any questions about our offers? Feel free to
                  contact us at any time using the eBay contact form.
                </p>
                <br />
                <div class="f-buy-now">
                  <a href="https://www.ebay.co.uk/mye/myebay/savedsellers">
                    Sign Up Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
`;

export default html;

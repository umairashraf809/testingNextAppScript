/* eslint-disable no-console */
let headerInsertionCount = 0;
let headerTitleTagCount = 0;
let headerMetaTagCount = 0;
let bodyHtmlTopInsertionCount = 0;
let bodyHtmlBottomInsertionCount = 0;
let linksUpdationCount = 0;
const headersUpdationCount = {h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0};
let imagesAltsUpdationCount = 0;
let footerHtmlInsertionCount = 0;

const urlParams = new URLSearchParams(window.location.search);
const diagnosticsExist = urlParams.has('diagnostics');

const consolePrint = strData => {
  if (diagnosticsExist) {
    console.log(strData);
  }
};

const fetchData = async (pageUrl, uuid) => {
  let apiUrl = `https://sa.searchatlas.com/api/v2/otto-url-details/?url=${pageUrl}`;
  if (uuid) apiUrl += `&uuid=${uuid}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('API call failed.');
    let pageData;
    // pageData = await response.json();
    pageData = {
      "header_html_insertion": "<meta name=\"keywords\" data-otto-pixel=\"dynamic-seo\" content=\"Lahore, September 25, 2024, Punjab government, CM Skills Development Initiative, Pakistani Rupee, Gold Prices Decline, Economic Uncertainty, MDCAT 2024, Cooperative Farming.\"/>\n\n<script type=\"application/ld+json\" data-otto-pixel=\"dynamic-seo\">{\n   \"url\": \"https://dusknews.com\",\n   \"logo\": \"https://www.google.com/s2/favicons?sz=256&domain_url=https://dusknews.com\",\n   \"name\": \"Pizza Chicago\",\n   \"@type\": \"Organization\",\n   \"email\": \"123@gmail.com\",\n   \"address\": {\n      \"@type\": \"PostalAddress\",\n      \"postalCode\": \"5800\",\n      \"streetAddress\": \"123 Chicago USA\",\n      \"addressCountry\": \"US\",\n      \"addressLocality\": \"Chicago\"\n   },\n   \"@context\": \"https://schema.org\",\n   \"telephone\": \"10878788878\"\n}</script>\n",
      "header_replacements": [
        {
          "name": "description",
          "type": "meta",
          "current_value": "Free Web tutorials for HTML and CSS",
          "recommended_value": "Discover free HTML and CSS tutorials for web development. Ideal for all skill levels. Boost your coding expertise with expert guidance."
        },
        {
          "type": "title",
          "current_value": "React App",
          "recommended_value": "Building a Dynamic React Application with User Interaction"
        },
        {
          "type": "meta",
          "property": "og:description",
          "current_value": "A News & Blogging Website : Covering Business | Mobiles | Cricket | Health | Islam | Education | Politics | Tech | AutoMobile",
          "recommended_value": "Covering Business, Mobiles, Cricket, Health, Islam, Education, Politics, Tech, and Automobile news and blogs on a diverse range of topics."
        }
      ],
      "body_substitutions": {
        "links": {
          "https://dusknews.com/2023/11/": "https://dusknews.com/",
          "https://dusknews.com/2023/12/": "https://dusknews.com/",
          "https://dusknews.com/2024/01/": "https://dusknews.com/",
          "https://dusknews.com/2024/02/": "https://dusknews.com/",
          "https://dusknews.com/2024/03/": "https://dusknews.com/",
          "https://dusknews.com/2024/04/": "https://dusknews.com/",
          "https://dusknews.com/2024/05/": "https://dusknews.com/",
          "https://dusknews.com/2024/06/": "https://dusknews.com/",
          "https://dusknews.com/2024/07/": "https://dusknews.com/",
          "https://dusknews.com/2024/08/": "https://dusknews.com/",
          "https://dusknews.com/2024/09/": "https://dusknews.com/"
        },
        "images": {
          "https://dusknews.com/wp-content/uploads/2024/01/riyadh-tech.jpg": "education, riyadh tech",
          "https://dusknews.com/wp-content/uploads/2024/06/cropped-cropped-new-logo-fotor-b-1.png": "dusk news- pakistan's leading web portal, cropped cropped new logo fotor b"
        },
        "headings": [
          {
            "type": "h2",
            "current_value": "Latest Post",
            "recommended_value": "Latest Happenings and Updates"
          }
        ]
      },
      "body_top_html_insertion": "\n<p style=\"display:none\" data-otto-pixel=\"dynamic-seo\" class=\"otto-missing-keywords-module\">dusknews.com, dusknews, dusk news, firewall in pakistan</p>\n<div style=\"display:none\" data-otto-pixel=\"dynamic-seo\" class=\"otto-missing-headings-module\"><h3 data-otto-pixel=\"dynamic-seo\">Breaking News: Gold Prices Surge in Pakistan, Reaching New Heights</h3>\n<p data-otto-pixel=\"dynamic-seo\">Amidst economic uncertainty, gold prices in Pakistan have experienced a significant surge, reaching new heights that have caught the attention of investors and consumers alike. This spike in gold prices has implications for the country's economy and financial markets, with experts closely monitoring the situation to assess its impact on various sectors.</p>\n<p data-otto-pixel=\"dynamic-seo\">This sudden increase in gold prices has led to speculation and analysis within the financial community, as investors evaluate the potential implications for their portfolios and economic forecasts. The surge in gold prices is a reflection of global economic trends and geopolitical factors that are influencing commodity markets, prompting investors to reevaluate their investment strategies and risk management.</p></div>\n\n",
      "body_bottom_html_insertion": "\n<div style=\"display:none\" data-otto-pixel=\"dynamic-seo\" class=\"otto-missing-headings-module\"><h1 data-otto-pixel=\"dynamic-seo\">Why JavaScript is Important for Web Development</h1>\n<p data-otto-pixel=\"dynamic-seo\">JavaScript plays a crucial role in modern web development. It is a versatile and powerful programming language that allows developers to create dynamic and interactive web pages. With JavaScript, website elements can be easily manipulated, data can be validated, and user interactions can be enhanced. </p>\n<h2 data-otto-pixel=\"dynamic-seo\">The Benefits of Using JavaScript</h2>\n<p data-otto-pixel=\"dynamic-seo\">One of the main advantages of using JavaScript is its ability to improve user experience. By adding interactive elements such as sliders, pop-ups, and animations, websites become more engaging and user-friendly. Additionally, JavaScript can also be used to create responsive designs that adapt to different screen sizes and devices, making websites accessible across multiple platforms.</p>\n<h3 data-otto-pixel=\"dynamic-seo\">Enhancing Website Functionality with JavaScript</h3>\n<p data-otto-pixel=\"dynamic-seo\">JavaScript enables developers to enhance website functionality by implementing features like form validation, date pickers, and real-time data updates without the need to reload the entire page. This not only improves user experience but also streamlines the overall functionality of the website. Additionally, JavaScript can be integrated with other web technologies like HTML and CSS to create seamless and interactive web applications.</p>\n<h4 data-otto-pixel=\"dynamic-seo\">Future of JavaScript in Web Development</h4>\n<p data-otto-pixel=\"dynamic-seo\">As web development continues to evolve, the importance of JavaScript will only increase. With the rise of technologies like progressive web apps and single-page applications, JavaScript will remain at the forefront of creating dynamic and engaging user experiences. As developers continue to explore new frameworks and libraries, JavaScript will continue to play a key role in shaping the future of web development.</p></div>\n\n",
      "image_missing_alt": {},
      "footer_html_insertion": "<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/punjab-government-expands-cm-skills-development-initiative-to-address-rising-youth-unemployment/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/mdcat-2024-controversy-students-face-denial-of-entry-and-allegations-of-paper-leak/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/pakistani-rupee-gains-strength-as-gold-prices-decline-amid-economic-uncertainty/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/pakistan-railways-announces-10-fare-reduction-starting-september-23/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/punjab-government-introduces-cooperative-farming-to-boost-vegetable-cultivation-and-ensure-food-security/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/education/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/international/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/more-2/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/more/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/lifestyle/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/top-10/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/careers-jobs/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/sports/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/automobile/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/showbiz/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/blog/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/privacy-policy/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/breaking-gold-prices-surge-in-pakistan-reaching-new-heights/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/latest-solar-panel-market-rates-in-pakistan-2024/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/nextup-lisbon-deep-tech-startup-competition-2024-fully-funded-trip-to-lisbon-singapor/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/8-best-alternatives-to-banking-career/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/how-long-working-hours-in-banking-impact-life/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/why-banking-jobs-are-so-stressful-a-deep-dive/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/10-reasons-not-to-work-in-a-bank-stress-long-hours/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/kp-government-launches-life-insurance-scheme-for-low-income-families/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/tech/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/top-5-healthiest-nuts-and-their-benefits/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/tom-cruise-and-suri-om-cruise-connection-suri-cruise/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/brain-drain-top-10-countries-losing-talent-and-why/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/cotton-production-in-pakistan-sees-unprecedented-decline/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/tag/imf/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/tag/pakistan/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/9-best-dry-fruits-for-a-festive-and-wholesome-diet/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/beautiful-life-7-essential-body-shifts-take-seriously/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/budget-2024-25-get-ready-for-higher-used-car-costs-in-pakistan/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/budget-2024-25-withholding-tax-increase-on-new-car-purchases/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/byd-launches-3-new-electric-cars-in-pakistan-a-game-changer-for-the-auto-industry/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/can-bollywood-2024-shine-without-staple-superstars/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/career-opportunity-at-state-bank-of-pakistan/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/automobile/page/2/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/automobile/page/5/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/blog/page/2/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/blog/page/7/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/business/page/2/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/business/page/22/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/careers-jobs/page/4/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/education/page/2/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/international/page/2/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/lifestyle/page/2/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/news/page/2/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/news/page/30/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/category/tech/page/2/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/china-link-scholarship-2025-a-life-changing-opportunity-for-pakistani-students-to-study-in-china/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/connectivity-issues-hit-pakistan-payment-network/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/deepfake-video-scandal-suspect-arrested-mandanna-case/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/deepika-padukone-drug-mafia-theme-ott-debut/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/drone-technology-organ-transportation/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/electric-vehicle-tax-proposalssenate-standing-committee-postpones-decision/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/ethereum-etf-approval-imminent-analysts-predict-secs-groundbreaking-decision/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/fbr-blocks-105000-sim-cards-of-tax-return-non-filers-in-2024/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/fbr-extends-income-tax-return-filing-deadline-by-14-days/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/finance-minister-announces-major-economic-reforms-no-salaries-for-cabinet-interest-rate-cuts-and-restrictions-for-non-filers/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/fully-funded-chevening-energy-market-reform-fellowship-2025/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/09-best-gre-prep-courses-in-2024/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/apni-chhat-apna-ghar-scheme-interest-free-loan/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/bisp-announces-major-expansion-and-launch-of-wasila-rozgar-program-to-empower-pakistani-women/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/empowering-a-nation-pakistan-imran-khan-government/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/fbr-to-increase-property-values-by-20-100-in-42-major-cities/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/gold-price-in-pakistan-22-november-2023/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/gold-price-in-pakistan-23-november-2023/\"></a>\n<a style=\"display:none\" class=\"otto-dynamic-indexing-module\" data-otto-pixel=\"dynamic-seo\" href=\"https://dusknews.com/gold-price-rises-in-pakistan-reaches-all-time-high/\"></a>"
    };    
    consolePrint(`API response: ${pageData}`);
    if ((window.location.origin + window.location.pathname) === pageUrl) applyPageData(pageData);
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

const postPageCrawlLogs = async (pageUrl, uuid, context) => {
  try {
    const useragent = navigator.userAgent;
    if (useragent.includes('bot')) {
      const apiUrl = `https://sa.searchatlas.com/api/v2/otto-page-crawl-logs/`;

      const bodyData = {
        otto_uuid: uuid,
        url: pageUrl,
        user_agent: useragent,
        context: context,
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });

      if (!response.ok) throw new Error('API call failed.');
      const pageData = await response.json();
      consolePrint(`API response: ${pageData}`);
    }
  } catch (error) {
    consolePrint(`Fetch error: ${error}`);
  }
};

const replaceMetaData = metaData => {
  let headerElementExist = false;
  const {type, name, property, recommended_value} = metaData;

  if (type === 'title') {
    const titles = document.querySelectorAll('title');
    if (titles?.length) {
      titles?.forEach(item => {
        if (!window?.next) item?.remove();
      });
    }
    headerElementExist = false;
  } else {
    const metaSelector = `meta[name="${(name || property)?.trim()}"], meta[property="${(name || property)?.trim()}"]`;
    headerElementExist = document.querySelector(metaSelector) || false;
  }

  if (headerElementExist) {
    consolePrint(`Header Meta - ${headerElementExist}`);
    if (type === 'title') {
      headerTitleTagCount++;
      consolePrint(`Replacing existing title content - ${recommended_value}`);
      headerElementExist.innerHTML = recommended_value;
    } else {
      consolePrint(`Replacing existing Meta content - ${recommended_value}`);
      headerMetaTagCount++;
      headerElementExist.setAttribute('content', recommended_value);
    }
  } else {
    if (type === 'title') {
      consolePrint(`Header Title Not Found - ${type}`);
      headerTitleTagCount++;
      if (window?.next) {
        const title = document.querySelector('title');
        title.innerHTML = recommended_value;
      } else {
        const titleTag = `<title>${recommended_value}</title>`;
        consolePrint(`Inserting Title tag element: ${titleTag}`);
        document.head.insertAdjacentHTML('afterbegin', titleTag);
      }
    } else {
      consolePrint(`Header Meta Not Found - ${type}`);
      const metaAttribute = property ? 'property' : 'name';
      const metaTag = `<meta ${metaAttribute}="${property ? property : name}" content="${recommended_value}">`;
      headerMetaTagCount++;
      consolePrint(`Inserting tag element: ${metaTag}`);
      document.head.insertAdjacentHTML('afterbegin', metaTag);
    }
  }
};

const addAltTextToImages = images => {
  const allImgsElements = document.querySelectorAll(`img`);
  allImgsElements?.forEach(imgElement => {
    images?.forEach(([imageUrl, altText]) => {
      Array.from(imgElement?.attributes).forEach(attribute => {
        if (attribute.value === imageUrl) {
          imagesAltsUpdationCount++;
          consolePrint(`Adding/updating alt text for ${imgElement} with: ${altText}`);
          imgElement.alt = altText;
        }
      });
    });
  });
  consolePrint(`Total alt texts updated: ${imagesAltsUpdationCount}`);
};

const htmlDecode = input => {
  const doc = new DOMParser().parseFromString(input, 'text/html');
  return doc.documentElement.textContent;
};

const applyPageData = pageData => {
  consolePrint(`Header HTML insertion started: ${pageData.header_html_insertion}`);
  const htmlToInject = pageData.header_html_insertion ? `<!-- Dynamic Optimization Header Integration Start --> ${pageData.header_html_insertion} <!-- Dynamic Optimization Header Integration Ended --> ` : '';
  if (htmlToInject) {
    document.head.insertAdjacentHTML('afterbegin', htmlToInject);
    headerInsertionCount++;
  }
  consolePrint(`Header HTML insertion ended: ${htmlToInject}`);

  try {
    consolePrint(`Header replacements started: ${pageData.header_replacements}`);
    if (Array.isArray(pageData.header_replacements)) {
      pageData.header_replacements?.forEach(data => {
        replaceMetaData(data);
      });
    }
    consolePrint(`Header replacements ended: ${pageData.header_replacements}`);
  } catch (error) {
    consolePrint(`Header replacements Error: ${error}`);
  }

  const bodyElement = document.querySelector('body');

  consolePrint(`Body top HTML insertion started: ${pageData.body_top_html_insertion}`);
  const topHtmlToInject = pageData.body_top_html_insertion ? `<!-- Dynamic Optimization Body Top Integration Start --> ${pageData.body_top_html_insertion} <!-- Dynamic Optimization Body Top Integration Ended --> ` : '';
  if (topHtmlToInject) {
    bodyHtmlTopInsertionCount++;
    bodyElement.insertAdjacentHTML('afterbegin', topHtmlToInject);
  }
  consolePrint(`Body top HTML insertion ended: ${topHtmlToInject}`);

  consolePrint(`Body bottom HTML insertion started: ${pageData.body_bottom_html_insertion}`);
  const bottomHtmlToInject = pageData.body_bottom_html_insertion ? `<!-- Dynamic Optimization Body Bottom Integration Start --> ${pageData.body_bottom_html_insertion} <!-- Dynamic Optimization Body Bottom Integration Ended --> ` : '';
  if (bottomHtmlToInject) {
    bodyHtmlBottomInsertionCount++;
    bodyElement.insertAdjacentHTML('beforeend', bottomHtmlToInject);
  }
  consolePrint(`Body bottom HTML insertion ended: ${bottomHtmlToInject}`);

  consolePrint('Body substitutions started');
  for (const [bodySubstitutionsKey, data] of Object.entries(pageData.body_substitutions)) {
    if (bodySubstitutionsKey !== 'images') {
      consolePrint(`${bodySubstitutionsKey} - updating element value: ${data}`);
      if (bodySubstitutionsKey === 'links') {
        const listData = Object.entries(data);
        if (listData.length) {
          document.querySelectorAll(`a[href="${listData[0][0]}"]`)?.forEach(element => {
            linksUpdationCount++;
            element.href = listData[0][1];
          });
        }
      } else if (bodySubstitutionsKey === 'headings') {
        data?.forEach(item => {
          document.querySelectorAll(item.type)?.forEach(element => {
            if (element.textContent.trim() === item.current_value.trim()) {
              consolePrint(`${item.type} - heading - ${element.textContent} - Recommended heading - ${item.recommended_value}`);
              headersUpdationCount[item.type]++;
              const targetElement = element?.lastChild?.nodeType === Node.ELEMENT_NODE ? element.lastChild : element;
              targetElement.innerHTML = htmlDecode(element.innerHTML).replace(item.current_value, item.recommended_value);
            }
          });
        });
      }
    }
  }
  consolePrint('Body substitutions ended');

  if (pageData.header_replacements?.length > 0) {
    const canonicalLink = pageData.header_replacements.find(item=> item?.type == 'link' && item?.rel == 'canonical');
    const element = document.querySelector(`link[rel="canonical"]`);
    if (canonicalLink && element) {
      element.href = canonicalLink?.recommended_value;
    }
  }

  consolePrint('Intersection of missing alt tags started');
  pageData?.body_substitutions?.images && addAltTextToImages(Object.entries(pageData?.body_substitutions?.images));
  consolePrint('Intersection of missing alt tags ended');

  consolePrint(`Footer HTML insertion started: ${pageData.footer_html_insertion}`);
  if (pageData.footer_html_insertion) {
    let footerElement = document.querySelector('footer');
    if (!footerElement) {
      consolePrint('Footer element not found');
      footerElement = document.createElement('footer');
      document.body.appendChild(footerElement);
      consolePrint('Footer element added to footer');
    }

    const footerHtmlToInject = pageData.footer_html_insertion ? `<!-- Dynamic Optimization Footer Integration Start --> ${pageData.footer_html_insertion} <!-- Dynamic Optimization Footer Integration Ended --> ` : '';
    footerHtmlInsertionCount++;
    footerElement.insertAdjacentHTML('beforeend', footerHtmlToInject);
    consolePrint(`Footer HTML inserted: ${footerHtmlToInject}`);
  }
  consolePrint(`Footer HTML insertion ended: ${pageData.footer_html_insertion}`);

  consolePrint('*************************************************************');
  consolePrint('******************** Diagnostics Summary ********************');
  consolePrint(`Header Insertions: ${headerInsertionCount}`);
  consolePrint(`Header Title Updated: ${headerTitleTagCount}`);
  consolePrint(`Body Top HTML Insertions: ${bodyHtmlTopInsertionCount}`);
  consolePrint(`Body Bottom HTML Insertions: ${bodyHtmlBottomInsertionCount}`);
  consolePrint(`Footer HTML Insertions: ${footerHtmlInsertionCount}`);

  consolePrint(`Header Meta Tag Updated: ${headerMetaTagCount} out of ${Array.isArray(pageData.header_replacements) ? pageData.header_replacements?.filter(item => item.type != 'title')?.length : 0}`);
  consolePrint(`Image Alt Replacements: ${imagesAltsUpdationCount} out of ${('images' in pageData.body_substitutions) ? Object.keys(pageData.body_substitutions?.images)?.length : 0}`);
  consolePrint(`Link Replacements: ${linksUpdationCount} out of ${('links' in pageData.body_substitutions) ? Object.keys(pageData.body_substitutions?.links)?.length : 0}`);
  Object.entries(headersUpdationCount).forEach(value => {
    consolePrint(`${value[0]} headings replaced - ${value[1]}`);
  });
  consolePrint('*************************************************************');
  consolePrint('*************************************************************');
};

// Function to remove content between specific comments
const removeDynamicOptimizationContent = () => {
//   removelist = [
//     'Header',
//     'Footer',
//     'Body Top',
//     'Body Bottom',
//   ]

  // todo: google-site-verification is not being removed, add data-otto-pixel from be
  const elementsToRemove = document.querySelectorAll('[data-otto-pixel="dynamic-seo"],[data-otto-pixel="searchatlas"]');
  if (elementsToRemove.length > 0) {
    try {
        elementsToRemove.forEach(element => element.remove());
    } catch (error) {
        console.error(error);
    }
  }

//   removelist.forEach(item => {
    
//     let htmlContent = null
//     // Get all the HTML content as a string
//     if(item == 'Header'){
//       htmlContent = document.head.innerHTML;  
//     } else{
//       htmlContent = document.body.innerHTML;
//     }

//     // Define the start and end markers
//     const startMarker = `<!-- Dynamic Optimization ${item} Integration Start -->`;
//     const endMarker = `<!-- Dynamic Optimization ${item} Integration Ended -->`;

//     // Check if the markers exist
//     if (htmlContent?.includes(startMarker) && htmlContent?.includes(endMarker)) {
//       // Extract content before and after the markers
//       const beforeStart = htmlContent?.split(startMarker)[0];
//       const afterEnd = htmlContent?.split(endMarker)[1];

//       // Combine the remaining content
//       const updatedContent = beforeStart + afterEnd;

//       // Update the HTML content in the body
//       if(item == 'Header'){
//         document.head.innerHTML = updatedContent;
//       }else{
//         document.body.innerHTML = updatedContent;
//       }

//       consolePrint('Dynamic Optimization content removed.');
//     } else {
//       consolePrint('Markers not found.');
//     }
//   });
}

const initializeScript = () => {
  consolePrint('Script initialization');
  const uuid = document.getElementById('sa-otto')?.getAttribute('data-uuid') || document.getElementById('searchatlas')?.getAttribute('data-uuid') || document.getElementById('sa-dynamic-optimization')?.getAttribute('data-uuid');
  window.otto_js_installed = true;
  window.otto_js_uuid = uuid;
  consolePrint(`UUID: ${uuid}`);
  try {
    const pushState = history.pushState;
    history.pushState = function() {
      // eslint-disable-next-line prefer-rest-params
      pushState.apply(history, arguments);
      window.dispatchEvent(new Event('locationchange'));
    };
    window.addEventListener('locationchange', () => {
      removeDynamicOptimizationContent();
      fetchData(window.location.origin + window.location.pathname, uuid);
      postPageCrawlLogs(window.location.href, uuid, null);
    });
  } catch (error) {
    consolePrint(`Routing issue: ${error}`);
  }
  
  fetchData(window.location.origin + window.location.pathname, uuid);
  postPageCrawlLogs(window.location.href, uuid, null);
  consolePrint('Script ended');
};

initializeScript();
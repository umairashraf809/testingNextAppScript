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
    const pageData = await response.json();
    consolePrint(`API response: ${pageData}`);
    applyPageData(pageData);
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
        // item.remove();
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
      // const titleTag = `<title>${recommended_value}</title>`;
      // consolePrint(`Inserting Title tag element: ${titleTag}`);
      // document.head.insertAdjacentHTML('afterbegin', titleTag);
      const title = document.querySelector('title');
      title.innerHTML = recommended_value;
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

  const elementsToRemove = document.querySelectorAll('[data-otto-pixel="dynamic-seo"]');
  if (elementsToRemove.length > 0) {
    try {
        elementsToRemove.forEach(element => element?.remove());
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
      removeDynamicOptimizationContent()
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
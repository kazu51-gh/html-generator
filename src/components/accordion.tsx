import { useState } from "react";
import IdAndClass from "./idAndClass";

type Props = {
  title: string,
  description: string,
  required: string,
  recommended: string,
  tagList: string[]
}


const Accordion = ({title, description, required, recommended, tagList}: Props) => {
  const [radioValue, setRadioValue] = useState('h1');

  const selectTag = tagList.map((tag) =>
    <div
      key={tag}
      className="flex"
    >
      <input
        id={tag}
        className="mr-1"
        type="radio"
        value={tag}
        checked={tag === radioValue}
        onChange={(e) => setRadioValue(e.target.value)}
      />
      <label
        className="mr-3"
        htmlFor={tag}
      >
        {tag}
      </label>
    </div>
  );

  const determinedByRadio = (radioValue: string) => {
    if (radioValue === 'h1') { return('<h1>text</h1>'); }
    else if (radioValue === 'h2') { return('<h2>text</h2>'); }
    else if (radioValue === 'h3') { return('<h3>text</h3>'); }
    else if (radioValue === 'h4') { return('<h4>text</h4>'); }
    else if (radioValue === 'h5') { return('<h5>text</h5>'); }
    else if (radioValue === 'h6') { return('<h6>text</h6>'); }
  }

  const determinedByTagName = (tagName: string) => {
    if (tagName === 'p') { return('<p>text</p>'); }
    else if (tagName === 'a') { return('<a href="link_here">text</a>'); }
    else if (tagName === 'img') { return('<img src="link_here" alt="text">'); }
    else if (tagName === 'ul') { return('<ul><li>text</li></ul>'); }
    else if (tagName === 'ol') { return('<ol><li>text</li></ol>'); }
    else if (tagName === 'div') { return('<div>elements</div>'); }
    else if (tagName === 'span') { return('<span>elements</span>'); }
    else if (tagName === 'br') { return('<br />'); }
    else if (tagName === 'hr') { return('<hr/>'); }
    else if (tagName === 'strong') { return('<strong>text</strong>'); }
    else if (tagName === 'blockquote') { return('<blockquote cite="url">text</blockquote>'); }
    else if (tagName === 'code') { return('<code>code</code>'); }
    else if (tagName === 'input') { return('<input type="" />'); }
    else if (tagName === 'textarea') { return('<textarea></textarea>'); }
    else if (tagName === 'button') { return('<button>text</button>'); }
    else if (tagName === 'table') { return('<table></table>'); }
  }

  return(
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:bg-gray-50">
        {title}
        <div className="text-secondary-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </summary>
      <div className="border-t border-t-gray-100 p-4 text-secondary-500">
        {description}
        <br />
        <div className="my-3">{required}</div>
        <div className="my-3">{recommended}</div>
        <hr className="border border-gray-200 my-4" />
        <IdAndClass />
        {tagList.length !== 1 &&
          <div>
            <div className="flex">
              {selectTag}
            </div>
            <div className="bg-gray-200 inline-block my-3 px-3 py-1.5">
              {determinedByRadio(radioValue)}
            </div>
          </div>
        }
        {tagList.length === 1 &&
          <div className="bg-gray-200 inline-block my-3 px-3 py-1.5">
            {determinedByTagName(tagList[0])}
          </div>
        }
      </div>
    </details>
  );
}

export default Accordion;

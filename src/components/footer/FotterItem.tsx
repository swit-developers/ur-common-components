import React from 'react';

type LiItem = {
  highlight?: boolean,
  content: string,
  href: string
}

type IFooterItemProps = {
  title: string,
  contents: LiItem[]
}

const FooterItem = (props: IFooterItemProps) => (
  <div className="col-span-2 lg:col-auto md:col-span-1">
    <h2 className="mb-6 font-bold text-white">{props.title}</h2>
    <ul className="text-white text-sm font-medium">
      {props.contents.map((content, index) => (
        <li className="mb-4" key={index}>
          <a href={content.href} className={`hover:underline ${content.highlight && 'font-bold'}`} target="_blank"
             rel="noreferrer">
            {content.content}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export {
  FooterItem
};

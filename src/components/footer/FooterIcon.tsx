import React, {ReactNode} from 'react';

type IFooterIconProps = {
    href: string
    icon: ReactNode,
}

const FooterIcon = (props: IFooterIconProps) => (
    <a href={props.href} target="_blank" rel="noreferrer">
        {props.icon}
    </a>
);

export {FooterIcon};

import React from 'react';
import {FooterItem} from "./FotterItem";
import {FooterIcon} from "./FooterIcon";

type IFooterProps = {
  logoPath: string;
};

const Footer = (props: IFooterProps) => (
  <footer style={{background: '#161D30'}}>
    <div className="mx-auto w-full container">
      <div className="grid grid-cols-1 gap-6 px-6 py-8 md:grid-cols-5">
        <div className="col-span-2">
          <img src={props.logoPath} className="w-[80px] h-[23px] mb-4" alt="logo"/>
          <div className="text-white">
            <strong>San Francisco</strong>
            <br/>
            <span>95 3rd St, 2nd Floor, <br/>San Francisco, CA 94103</span></div>
          <br/>
          <div className="text-white lg:mt-6">
            <strong>Seoul</strong><br/>
            <span>6th &amp; 9th fl, 570, Samseong-ro, Gangnam-gu,<br/>Seoul, South Korea 06163</span>
          </div>
        </div>

        <FooterItem title="Company" contents={
          [
            {content: 'About Us', href: 'https://swit.io/about-us'},
            {content: 'Contact Us', href: 'https://help.swit.io/?support=true'},
            {content: 'Blog', href: 'https://swit.io/blog/list/all'},
            {content: 'News', href: 'https://swit.io/news/list/press-release'},
            {content: 'Brand Guidelines', href: 'https://swit.io/brand-guideline'},
          ]
        }/>
        <FooterItem title="Product" contents={
          [
            {content: 'Features', href: 'https://swit.io/all-features'},
            {content: 'Project & Task Management', href: 'https://swit.io/project'},
            {content: 'Communication', href: 'https://swit.io/communication'},
            {content: 'Integrations', href: 'https://swit.io/integrations'},
            {content: 'Plug-ins', href: 'https://swit.io/plugins'},
            {content: 'Security', href: 'https://swit.io/security'},
            {content: 'Pricing', href: 'https://swit.io/pricing'},
          ]
        }/>
        <FooterItem title="Resources" contents={
          [
            {content: 'Developers', href: 'https://developers.swit.io/'},
            {content: 'Simulator', href: 'https://simulator.swit.io/'},
            {content: 'Help Center', href: 'https://help.swit.io/'},
            {content: 'Release Notes', href: 'https://updates.swit.io/desktop'},
            {content: 'Terms of Service', href: 'https://swit.io/privacy?sub=swit-terms-of-service'},
            {content: 'Privacy policy', href: 'https://swit.io/privacy?sub=privacy-policy', highlight: true},
            {content: 'Cookie Preferences', href: '#'},
            {content: 'Download', href: 'https://swit.io/home/desktop'},
          ]
        }/>
      </div>

      <hr className="h-px bg-white border-0 dark:bg-gray-700"/>

      <div className="px-4 py-6 md:flex md:items-center md:justify-between">
        <div className="mb-4 md:mb-0 flex space-x-6 sm:justify-center md:mt-0">
          <FooterIcon href='https://www.facebook.com/GetSwit/?ref=br_rs' icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M13.0409 10.0049H10.7799V17.5H7.42765V10.0049H5.8335V7.35708H7.42765V5.64385C7.42765 4.41882 8.05366 2.5 10.8095 2.5L13.2924 2.50994V5.07979H11.491C11.1954 5.07979 10.7799 5.21716 10.7799 5.80157V7.35962H13.3335L13.0409 10.0049Z"
                    fill="white"/>
            </svg>
          }/>
          <FooterIcon href='https://twitter.com/GetSwit' icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M18.3332 4.91172C17.72 5.17931 17.0606 5.36062 16.369 5.44157C17.0752 5.02492 17.6171 4.36587 17.873 3.57958C17.2121 3.96545 16.4803 4.24541 15.7014 4.39617C15.0777 3.74222 14.189 3.33331 13.2051 3.33331C11.3169 3.33331 9.78561 4.8407 9.78561 6.69931C9.78561 6.96326 9.8159 7.21995 9.8745 7.46645C7.03271 7.32611 4.51323 5.98621 2.82652 3.94921C2.53227 4.44634 2.3636 5.02491 2.3636 5.64178C2.3636 6.80911 2.96761 7.83973 3.88459 8.44326C3.3244 8.42581 2.79672 8.27456 2.33602 8.022C2.33552 8.0363 2.33552 8.0506 2.33552 8.06466C2.33552 9.69542 3.51474 11.0557 5.07883 11.3647C4.79221 11.4418 4.48959 11.483 4.1781 11.483C3.95723 11.483 3.74325 11.4619 3.53444 11.4229C3.96979 12.7599 5.23223 13.7331 6.72885 13.7602C5.55825 14.6631 4.08429 15.2012 2.48179 15.2012C2.20625 15.2012 1.93342 15.1854 1.6665 15.1542C3.17913 16.1094 4.97689 16.6666 6.90786 16.6666C13.1974 16.6666 16.6369 11.538 16.6369 7.0893C16.6369 6.94363 16.6337 6.7982 16.6268 6.65398C17.2953 6.17939 17.8749 5.58676 18.3332 4.91172Z"
                    fill="white"/>
            </svg>
          }/>
          <FooterIcon href='https://www.youtube.com/channel/UCHwxFEV3a3ZZVO5uUzoSfCw' icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M8.167 13.2219V6.04892L13.4029 9.63485L8.167 13.2219ZM3.5738 3.33331C2.05989 3.33331 0.833496 4.60786 0.833496 6.18114V13.8185C0.833496 15.3912 2.05989 16.6666 3.5738 16.6666H16.4265C17.9404 16.6666 19.1668 15.3912 19.1668 13.8185V6.18114C19.1668 4.60786 17.9404 3.33331 16.4265 3.33331H3.5738Z"
                    fill="white"/>
            </svg>
          }/>
          <FooterIcon href='https://www.instagram.com/getswit/' icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10.0047 3.16822C12.2326 3.16822 12.4964 3.17799 13.3726 3.21707C14.1869 3.2529 14.6266 3.3897 14.9197 3.5037C15.3073 3.65353 15.5874 3.83593 15.8773 4.12581C16.1704 4.41895 16.3496 4.69581 16.4994 5.0834C16.6134 5.37654 16.7502 5.81951 16.786 6.63053C16.8251 7.50995 16.8349 7.77378 16.8349 9.99839C16.8349 12.2263 16.8251 12.4901 16.786 13.3663C16.7502 14.1805 16.6134 14.6202 16.4994 14.9134C16.3496 15.301 16.1672 15.5811 15.8773 15.871C15.5842 16.1641 15.3073 16.3433 14.9197 16.4931C14.6266 16.6071 14.1836 16.7439 13.3726 16.7797C12.4932 16.8188 12.2293 16.8286 10.0047 16.8286C7.77686 16.8286 7.51303 16.8188 6.63686 16.7797C5.82259 16.7439 5.38287 16.6071 5.08973 16.4931C4.70214 16.3433 4.42202 16.1609 4.13214 15.871C3.839 15.5778 3.65986 15.301 3.51003 14.9134C3.39603 14.6202 3.25923 14.1773 3.22341 13.3663C3.18432 12.4868 3.17455 12.223 3.17455 9.99839C3.17455 7.77052 3.18432 7.5067 3.22341 6.63053C3.25923 5.81625 3.39603 5.37654 3.51003 5.0834C3.65986 4.69581 3.84226 4.41569 4.13214 4.12581C4.42528 3.83267 4.70214 3.65353 5.08973 3.5037C5.38287 3.3897 5.82584 3.2529 6.63686 3.21707C7.51303 3.17799 7.77686 3.16822 10.0047 3.16822ZM10.0047 1.66669C7.74103 1.66669 7.45766 1.67646 6.56846 1.71554C5.68253 1.75463 5.07345 1.89794 4.5458 2.10314C3.99534 2.31811 3.52957 2.60148 3.06706 3.06725C2.6013 3.52976 2.31793 3.99553 2.10296 4.54272C1.89776 5.07363 1.75445 5.67945 1.71536 6.56539C1.67628 7.45784 1.6665 7.74121 1.6665 10.0049C1.6665 12.2686 1.67628 12.552 1.71536 13.4412C1.75445 14.3271 1.89776 14.9362 2.10296 15.4638C2.31793 16.0143 2.6013 16.4801 3.06706 16.9426C3.52957 17.4051 3.99534 17.6917 4.54254 17.9034C5.07345 18.1086 5.67927 18.2519 6.56521 18.291C7.4544 18.3301 7.73777 18.3399 10.0015 18.3399C12.2652 18.3399 12.5485 18.3301 13.4377 18.291C14.3237 18.2519 14.9327 18.1086 15.4604 17.9034C16.0076 17.6917 16.4734 17.4051 16.9359 16.9426C17.3984 16.4801 17.685 16.0143 17.8967 15.4671C18.1019 14.9362 18.2452 14.3304 18.2843 13.4444C18.3234 12.5552 18.3332 12.2719 18.3332 10.0082C18.3332 7.74447 18.3234 7.4611 18.2843 6.57191C18.2452 5.68597 18.1019 5.07689 17.8967 4.54924C17.6915 3.99553 17.4082 3.52976 16.9424 3.06725C16.4799 2.60474 16.0141 2.31811 15.4669 2.1064C14.936 1.9012 14.3302 1.75789 13.4442 1.7188C12.5518 1.67646 12.2684 1.66669 10.0047 1.66669Z"
                fill="white"/>
              <path
                d="M10.0048 5.7218C7.64012 5.7218 5.72168 7.64024 5.72168 10.0049C5.72168 12.3696 7.64012 14.288 10.0048 14.288C12.3695 14.288 14.2879 12.3696 14.2879 10.0049C14.2879 7.64024 12.3695 5.7218 10.0048 5.7218ZM10.0048 12.7832C8.47069 12.7832 7.22647 11.539 7.22647 10.0049C7.22647 8.47081 8.47069 7.22659 10.0048 7.22659C11.5389 7.22659 12.7831 8.47081 12.7831 10.0049C12.7831 11.539 11.5389 12.7832 10.0048 12.7832Z"
                fill="white"/>
              <path
                d="M15.4569 5.55249C15.4569 6.1062 15.0074 6.55242 14.457 6.55242C13.9033 6.55242 13.457 6.10294 13.457 5.55249C13.457 4.99878 13.9065 4.55255 14.457 4.55255C15.0074 4.55255 15.4569 5.00203 15.4569 5.55249Z"
                fill="white"/>
            </svg>
          }/>
          <FooterIcon href='https://www.linkedin.com/company/getswit' icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M17.0994 1.66669H2.89697C2.21663 1.66669 1.6665 2.2038 1.6665 2.86786V17.1289C1.6665 17.793 2.21663 18.3334 2.89697 18.3334H17.0994C17.7798 18.3334 18.3332 17.793 18.3332 17.1322V2.86786C18.3332 2.2038 17.7798 1.66669 17.0994 1.66669ZM6.61117 15.8692H4.13721V7.91343H6.61117V15.8692ZM5.37419 6.82945C4.57992 6.82945 3.93864 6.18817 3.93864 5.39716C3.93864 4.60614 4.57992 3.96486 5.37419 3.96486C6.1652 3.96486 6.80648 4.60614 6.80648 5.39716C6.80648 6.18492 6.1652 6.82945 5.37419 6.82945ZM15.869 15.8692H13.3983V12.002C13.3983 11.0808 13.382 9.8926 12.1125 9.8926C10.8267 9.8926 10.6313 10.8985 10.6313 11.9369V15.8692H8.1639V7.91343H10.5337V9.00067H10.5662C10.895 8.37567 11.7023 7.71486 12.9035 7.71486C15.4067 7.71486 15.869 9.362 15.869 11.5039V15.8692Z"
                fill="white"/>
            </svg>}/>
          <FooterIcon href='https://www.tiktok.com/@getswit' icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M13.0035 1.66669H10.1849V13.0193C10.1849 14.372 9.10083 15.4831 7.75175 15.4831C6.40267 15.4831 5.3186 14.372 5.3186 13.0193C5.3186 11.6909 6.37858 10.6039 7.67949 10.5556V7.70534C4.8127 7.75363 2.5 10.0966 2.5 13.0193C2.5 15.9662 4.86088 18.3334 7.77585 18.3334C10.6908 18.3334 13.0517 15.9421 13.0517 13.0193V7.19808C14.1117 7.97104 15.4125 8.42997 16.7857 8.45414V5.60389C14.6658 5.53142 13.0035 3.79229 13.0035 1.66669Z"
                fill="white"/>
            </svg>}/>
          <FooterIcon href='https://www.reddit.com/r/GetSwit' icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M18.3335 10.4167C18.3335 15.2492 14.416 19.1667 9.5835 19.1667C4.751 19.1667 0.833496 15.2492 0.833496 10.4167C0.833496 5.58419 4.751 1.66669 9.5835 1.66669C14.416 1.66669 18.3335 5.58419 18.3335 10.4167ZM14.1376 9.13747C14.8437 9.13747 15.4168 9.71057 15.4168 10.4167C15.4168 10.9386 15.0996 11.3889 14.68 11.5936C14.7005 11.7164 14.7107 11.8392 14.7107 11.9723C14.7107 13.9372 12.4285 15.5234 9.60397 15.5234C6.77941 15.5234 4.49724 13.9372 4.49724 11.9723C4.49724 11.8392 4.50748 11.7062 4.52795 11.5834C4.07765 11.3787 3.77064 10.9386 3.77064 10.4167C3.77064 9.71057 4.34373 9.13747 5.04987 9.13747C5.38759 9.13747 5.70485 9.28075 5.92999 9.49566C6.81011 8.85092 8.02794 8.4518 9.38906 8.41087L10.0338 5.36116C10.0543 5.29976 10.085 5.24859 10.1361 5.21788C10.1873 5.18718 10.2487 5.17695 10.3101 5.18718L12.4285 5.63747C12.5718 5.33046 12.8788 5.12578 13.237 5.12578C13.7385 5.12578 14.1478 5.53514 14.1478 6.0366C14.1478 6.53806 13.7385 6.94742 13.237 6.94742C12.7458 6.94742 12.3467 6.55853 12.3262 6.07753L10.4329 5.67841L9.84958 8.41087C11.18 8.46204 12.3876 8.87139 13.2575 9.49566C13.4826 9.27051 13.7896 9.13747 14.1376 9.13747ZM7.57765 10.4167C7.07619 10.4167 6.66683 10.8261 6.66683 11.3275C6.66683 11.829 7.07619 12.2383 7.57765 12.2383C8.07911 12.2383 8.48847 11.829 8.48847 11.3275C8.48847 10.8261 8.07911 10.4167 7.57765 10.4167ZM9.59373 14.3977C9.94169 14.3977 11.1288 14.3568 11.7531 13.7325C11.8452 13.6404 11.8452 13.4971 11.7736 13.3948C11.6815 13.3027 11.5279 13.3027 11.4358 13.3948C11.0367 13.7837 10.2078 13.9269 9.60397 13.9269C9.00017 13.9269 8.16099 13.7837 7.7721 13.3948C7.67999 13.3027 7.52648 13.3027 7.43438 13.3948C7.34227 13.4869 7.34227 13.6404 7.43438 13.7325C8.04841 14.3465 9.24578 14.3977 9.59373 14.3977ZM10.6785 11.3275C10.6785 11.829 11.0879 12.2383 11.5893 12.2383C12.0908 12.2383 12.5002 11.829 12.5002 11.3275C12.5002 10.8261 12.0908 10.4167 11.5893 10.4167C11.0879 10.4167 10.6785 10.8261 10.6785 11.3275Z"
                    fill="white"/>
            </svg>}/>
          <FooterIcon href='https://www.pinterest.com/getswit' icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M9.5835 1.66669C4.75049 1.66669 0.833496 5.58368 0.833496 10.4167C0.833496 14.1252 3.14062 17.2902 6.39453 18.5651C6.31934 17.8713 6.24756 16.8117 6.42529 16.0563C6.58594 15.3727 7.45068 11.7087 7.45068 11.7087C7.45068 11.7087 7.1875 11.1857 7.1875 10.4099C7.1875 9.19305 7.8916 8.28388 8.77002 8.28388C9.51514 8.28388 9.87744 8.84442 9.87744 9.51776C9.87744 10.2697 9.39893 11.3908 9.15283 12.4299C8.94775 13.3015 9.59033 14.0124 10.4482 14.0124C12.0034 14.0124 13.1997 12.3718 13.1997 10.0065C13.1997 7.91132 11.6958 6.44501 9.5459 6.44501C7.05762 6.44501 5.59473 8.31122 5.59473 10.2424C5.59473 10.9943 5.88525 11.801 6.24756 12.2385C6.31934 12.3239 6.32959 12.4025 6.30908 12.488C6.24414 12.7648 6.09375 13.3596 6.06641 13.4792C6.02881 13.6398 5.93994 13.674 5.77246 13.5954C4.67871 13.0861 3.99512 11.4899 3.99512 10.2048C3.99512 7.44305 6.00147 4.91034 9.7749 4.91034C12.8101 4.91034 15.1685 7.07391 15.1685 9.96552C15.1685 12.9802 13.2681 15.4069 10.6294 15.4069C9.74414 15.4069 8.91016 14.9455 8.62305 14.402C8.62305 14.402 8.18555 16.0734 8.07959 16.4836C7.88135 17.2424 7.34814 18.196 6.99268 18.777C7.81299 19.03 8.68115 19.1667 9.5835 19.1667C14.4165 19.1667 18.3335 15.2497 18.3335 10.4167C18.3335 5.58368 14.4165 1.66669 9.5835 1.66669Z"
                fill="white"/>
            </svg>}/>

        </div>
        <span className="text-sm text-white sm:text-center">
           © 2023 by Swit Technologies Inc. All rights reserved.
        </span>
      </div>
    </div>
  </footer>
);

export {
  Footer
};

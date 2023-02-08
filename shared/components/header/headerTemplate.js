// /* eslint-disable no-use-before-define */
// /* -------------------------------------------------------------------------------------------------------
// -----------------------------New Header index file changes Added below -----------------------------------
//  --------------------------------------------------------------------------------------------------------*/
// import React, { useEffect } from 'react';
// import HomeHeader from './homeHeader';

// class HeaderTemplate extends Component {
//   const homePageHeader = () => <HomeHeader {...props} />;
//   const mouseOverOnNav = (event) => toggleHeaderDropdownMenu(event, 'show');
//   const mouseOutOnNav = (event) => toggleHeaderDropdownMenu(event, 'hide');

//   const toggleHeaderDropdownMenu = (event, displayHeaderMenu) => {
//     const navEl = event.target.querySelector('.header-dropdown-menu.dropdown-menu');
//     if (displayHeaderMenu === 'show') {
//       navEl.classList.add('open');
//     } else {
//       navEl.classList.remove('open');
//     }
//   };

//   const navElementsCloseBtnHandler = () => {
//     const openNav = document.querySelector('.header-dropdown-menu.dropdown-menu.open');
//     openNav.classList.remove('open');
//   };
//   componentDidMount() {
//     const navElements = document.querySelectorAll('.nav-item.js-dropdown');
//     const navElementsCloseBtns = document.querySelectorAll('.nav-item.js-dropdown .close-button');
//     navElementsCloseBtns.forEach((navElementsCloseBtn) => {
//       navElementsCloseBtn.addEventListener('click', navElementsCloseBtnHandler);
//     });
//     navElements.forEach((navElement) => {
//       navElement.addEventListener('mouseenter', mouseOverOnNav);
//       navElement.addEventListener('mouseleave', mouseOutOnNav);
//     });
//   }
//   componentWillUnmount() {
//     const navElements = document.querySelectorAll('.nav-item.js-dropdown');
//     const navElementsCloseBtns = document.querySelectorAll('.nav-item.js-dropdown .close-button');
//     navElementsCloseBtns.forEach((navElementsCloseBtn) => {
//       navElementsCloseBtn.removeEventListener('click', navElementsCloseBtnHandler);
//     });
//     navElements.forEach((navElement) => {
//       navElement.removeEventListener('mouseenter', mouseOverOnNav);
//       navElement.removeEventListener('mouseleave', mouseOutOnNav);
//     });
//   }
// }

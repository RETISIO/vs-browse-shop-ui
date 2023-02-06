import { useEffect, useState } from 'react';
import LevelTwoItem from './level-2-item';
import { requestContructor } from '../../helpers/api';

export default function LevelOneItem(props) {
    const [rootCatagories, setRootCatagories] = useState([]);
    const getData = async() => {
        const res = await requestContructor('getCategoryList', '', {}, false);
        setRootCatagories(res?.payLoad?.categories);
        return res?.payLoad?.categories;
      };

      useEffect(() => {
       getData();
      }, []);

    const navContainerClass = props.headerType === "nonHome" ? "container" : "";
    let headerDropdownMenuClass = "header-dropdown-menu dropdown-menu js-dropdown__body";
    headerDropdownMenuClass = props.headerType === "home"
    ? headerDropdownMenuClass + " homeDropdownMenu" : headerDropdownMenuClass;

    const mouseOverOnNav = (event) => toggleHeaderDropdownMenu(event, "show");
    const mouseOutOnNav = (event) => toggleHeaderDropdownMenu(event, "hide");

    const toggleHeaderDropdownMenu = (event, displayHeaderMenu) => {
        const navEl = event.target.querySelector(".header-dropdown-menu.dropdown-menu");
        if (displayHeaderMenu === "show") {
            navEl.classList.add("open");
        } else {
            navEl.classList.remove("open");
        }
    }

    const navElementsCloseBtnHandler = () => {
        const openNav = document.querySelector(".header-dropdown-menu.dropdown-menu.open");
        openNav.classList.remove("open");
    }
    useEffect(() => {
        const navElements = document.querySelectorAll(".nav-item.js-dropdown");
        const navElementsCloseBtns = document.querySelectorAll(".nav-item.js-dropdown .close-button");
        navElementsCloseBtns.forEach((navElementsCloseBtn) => {
            navElementsCloseBtn.addEventListener('click', navElementsCloseBtnHandler);
        });
        navElements.forEach((navElement) => {
            navElement.addEventListener('mouseenter', mouseOverOnNav);
            navElement.addEventListener('mouseleave', mouseOutOnNav);
        });
    }, [rootCatagories]);

    const renderLevel1Item = (item, i) => {
        //const navItem = item.navCat.toLowerCase();
        const navItem = item.name;


        return (
            <li key={i} className="nav-item js-dropdown">
                {props.headerType === "nonHome" ?
                    <a className="js-dropdown__btn" href="/category/shop-beef" id={`header-nav-${navItem}`}>{navItem}</a>
                    : <button className="js-dropdown__btn" aria-expanded="false" id="header-nav-beef">
                        {navItem}
                    </button>}
                <div className={headerDropdownMenuClass} id="header-navbar">
                    {props.headerType === "home" ?
                        <button className="close-button" style={{
                            position: 'absolute',
                            top: '1px',
                            right: '19px',
                            padding: '2px 17px',
                            background: 'none',
                            border: 0,
                            fontSize: '18px',
                            cursor: 'pointer'
                        }}>
                            <span className="fas fa-times" aria-hidden="true"></span>
                            <span className="sr-only">Close menu</span>
                        </button> :
                        null}
                    <LevelTwoItem
                        catItem={item}
                        headerType={props.headerType}
                    />
                </div>
            </li>
        )
    }
    return (
        <nav className="navbar">
            <div className={navContainerClass}>
                <ul className="navbar-nav nav">
                    {rootCatagories?.map((item, i) => renderLevel1Item(item, i))}
                </ul>
            </div>
        </nav>
    );
}

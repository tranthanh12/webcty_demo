import React from 'react'
import Link from 'next/link'

const index = () => {

    return (
        <>
            <nav className="navbar">
                <div className="navbar__container" bis_skin_checked={1}>
                    <div className="main-content" bis_skin_checked={1}>
                        <div className="container container--full-width container--flex container--flex--space-between" bis_skin_checked={1}>
                            <div className="logo-container" bis_skin_checked={1}>
                                <Link className="logo" href="/"><img src="/images/header/Frame 14.svg" alt="NTQ SOLUTION" /></Link>
                            </div>
                            <div className="menu-container" bis_skin_checked={1}>
                                <ul className="menu">
                                    <li className="menu__item menu__item--main">
                                        <Link className="menu__item__link menu__item__expandable-link" href="/sevics" id="r-and-d-option" bis_skin_checked={1}>Services</Link>
                                    </li>
                                    <li className="menu__item menu__item--main">
                                        <Link className="menu__item__link menu__item__expandable-link" href="/industrie" id="r-and-d-option" bis_skin_checked={1}>Industries</Link>
                                    </li>
                                    <li className="menu__item menu__item--main"> 
                                        <Link href='/aboutus'><span className="menu__item__expandable-link" id="insight-option">About Us</span></Link>
                                    </li>
                                    <li className="menu__item menu__item--main"> 
                                        <Link href="/"><span className="menu__item__expandable-link" id="insight-option">Recruitment</span></Link>
                                    </li>
                                    <li className="menu__item menu__item--main"> 
                                        <Link href='/contact'><span className="menu__item__expandable-link" id="insight-option">Contact us</span></Link>
                                    </li>
                                    <li className="menu__item menu__item--language"><span className="current-language"><span className="current-language__text">EN</span><i className="material-icons current-language__icon current-language__icon--expand">expand_more</i>
                                        <i className="material-icons current-language__icon current-language__icon--collapse">expand_less</i></span>
                                        <div className="language-dropdown" bis_skin_checked={1}> <a href="https://kr.ntq.com.vn/" className="language-dropdown__option" bis_skin_checked={1}> KR </a> <a href="https://jp.ntq.com.vn/" className="language-dropdown__option" bis_skin_checked={1}> JP </a> <a href="https://ntq.com.hk/?utm_source=ntqsolution&utm_medium=language" className="language-dropdown__option" bis_skin_checked={1}> ZH </a> </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default index
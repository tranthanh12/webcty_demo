import React from 'react'
import style from './style.module.css'

const index = () => {
    return (
        <div className={style.box_introduce}>
            <div className={style.introduce_container}>
                <div className={style.introduce_title}>
                    <p>Future SF-Technologies</p>
                </div>

                <div className={style.introduce_content}>
                    <div className={style.introduce_list_item}>
                        <ul>
                            <li>
                                Be one of outstanding from Vietnam, SF-Technologies is a Development & Design expert company providing superior Software,
                                Web, Mobile and Creative Designing solutions and services globally.
                            </li>

                            <li>
                            Contributed by the industry’s highly professional and trained individuals, SF-Technologies has made it’s mark as a well-established IT consultor.
                            </li>

                            <li>
                                We always strive to build high performance teams necessary for creating and maintaining world class business solutions: Information Technology planning, Custom Software Development, Web Centric Software Solutions, ERP development and implementations, Creative Designing and Marketing with emphasis on Industry-Specific Business Analysis.
                            </li>

                            <li>
                                Our focused, sound and innovative approach is derived from the cumulative experience of our team members and as a result of their combined practical business experience with strong technology delivery capabilities.
                            </li>

                            <li>
                            We are able to comprehend the Client’s business requirements, propose IT and Creative strategies in line with the vision of the business.
                            </li>
                            <li>
                            Base on your bussiness core, we will execute the business plan by building or implementing high quality scalable solutions through the use of latest cutting edge Technologies.
                            </li>
                            <li>
                            Quality, well-managed and try to best to scope customer's needs are our Definition of Done.
                            </li>
                        </ul>
                    </div>

                    <div className={style.button_contact_us}>
                        <input type="button" value="Contac Us" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
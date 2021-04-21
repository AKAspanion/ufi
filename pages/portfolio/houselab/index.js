import cs from 'classnames';
import Head from 'next/head';
import Layout from '../../../components/layout';
import { useInView } from 'react-intersection-observer';

import styles from './../index.module.css';
import houselabstyles from './index.module.css';
import Button from '../../../components/button';

export default function HouesLab() {
    return (
        <Layout darkHeader>
            <Head>
                <title>HouseLab</title>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css"
                />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
            </Head>
            <section className={cs(houselabstyles.wraper__houselabs__hero__video)}>

                <div className={cs(houselabstyles.houselabs__hero__video)}>
                    <div className={cs("container-fluid", "px-0")}>

                        <div className={cs("row", "align-items-center")}>

                            <div className={cs([houselabstyles.houselabs__hero__video__video, 'col-xl-12', 'col-lg-12', 'col-md-12', 'col-sm-12', 'col-12'])} >
                                <div className={cs(houselabstyles.video)} >
                                    <img className={cs([houselabstyles.blur__out])} src="https://www.unifiedinfotech.net/assets/images/Houselabs-Hero-Image@2x.png" alt="" />
                                </div>
                                <div className={cs(houselabstyles.play__btn)}>

                                    <a className={cs(houselabstyles.holder)} data-fancybox="" data-ratio="2" href="https://vimeo.com/315581529?autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0" data-caption="Houselabs Video"><i className={cs(['fa', 'fa-play', styles.text__white])}></i></a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>

            <section className={cs(houselabstyles.wraper__houselabs__welcome__card)} >

                <div className={cs(houselabstyles.houselabs__welcome__card)} >
                    <div className={cs("container")} >

                        <div className={cs("row")} >
                            <div className={cs(['col-xl-9', 'col-lg-9', 'col-md-9', 'col-sm-12', 'col-12'])} >

                                <div className={cs([houselabstyles.welcome__card__box, houselabstyles.black__bg__info, houselabstyles.common_text, styles.text__white])} >
                                    <h4>Houselabs</h4>
                                    <h3>Engineered this cloud based document management platform for developers, architects, designers, agents and homeowners</h3>
                                </div>

                            </div>
                        </div >

                    </div >
                </div >

            </section >
            <section className={cs(houselabstyles.wraper__houselabs__overview)}>
                <div className={cs(houselabstyles.houselabs__overview)}>
                    <div className={cs([houselabstyles.houselabs__overview__sideimage, 'position-absolute', 'd-xl-flex', 'd-lg-flex', 'd-md-flex', 'd-sm-none', 'd-none', 'align-items-center'])}>
                        <img className={cs(houselabstyles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/Houselabs-Overview-Image@2x.png" alt="" />
                    </div>
                    <div className={cs([houselabstyles.houselabs__overview__sideimage__mobile, 'd-xl-none', 'd-lg-none', 'd-md-none', 'd-sm-block', 'd-block'])}>
                        <img className={cs(houselabstyles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/Houselabs-Overview-Image-Mobile.png" alt="" />
                    </div>
                    <div className={cs("container", houselabstyles.container)}>
                        <div className={cs(['row', 'align-items-stretch'])}>
                            <div className={cs(['col-xl-7', 'col-lg-7', 'col-md-7', 'col-sm-12', 'col-12'])}>
                                <div className={cs([houselabstyles.houselabs__overview__text, houselabstyles.common_text, styles.text__black, 'aos-init', 'aos-animate'])} data-aos="fade-up">
                                    <h3>Overview</h3>
                                    <p>HouseLab is a great new system for builders, developers, architects, designers, real estate agents and homeowners. Warranties, manuals, plans, permits, paint colours, key contact details can be uploaded to a secure, branded online hub and then handed over — elegantly, sustainably and simply. Includes systems to support defect management and periodic servicing.</p>
                                    <div className={cs(houselabstyles.features, 'row')}>
                                        <div className={cs([houselabstyles.features__item, 'col-xl-3', 'col-lg-3', 'col-md-6', 'col-sm-6', 'col-6'])}>
                                            <p><a href="https://houselab.com.au/" className={houselabstyles.a_link} target="_blank" rel="nofollow">Visit <strong>Website</strong></a></p>
                                        </div>
                                    </div>
                                    <h4>Services</h4>
                                    <ul>
                                        <li>UX/UI Design</li>
                                        <li>Web App Development</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={cs(['col-xl-5', 'col-lg-5', 'col-md-5', 'col-sm-12', 'col-12'])}></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cs(houselabstyles.sofy__portfolio__sec__2)}>
                <div className={cs(['container', 'p-0', 'p-md-3'])}>
                    <div className={cs('row', 'justify-content-center')}>
                        <div className={cs("col-sm-12 col-md-6")}>
                            <div className={cs([houselabstyles.comm__works, 'sofy-challenges', 'mr-2', 'h-100', 'aos-init', 'aos-animate'])} data-aos="fade-up" data-aos-delay="100">
                                <h3>Challenges</h3>
                                <ul>
                                    <li><p>Homeowner face trouble to manage a stack of papers and files for invoices, warranties and other property related documents</p></li>
                                    <li><p>Builders need to manage papers like blueprints, manuals, invoices and warranty cards for different properties which can be a single property or multi-property apartment. Also a challenge for them to provide these document copies to buyers while handover</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className={cs("col-sm-12", "col-md-6")}>
                            <div className={cs([houselabstyles.comm__works, houselabstyles.bg__orange, styles.text__white, 'sofy-solutions', 'ml-2', 'h-100', 'aos-init', 'aos-animate'])} data-aos="fade-up" data-aos-delay="100">
                                <h3 className={styles.text__white}>Solutions</h3>
                                <ul>
                                    <li><p>HouseLab provides a solution to manage the soft copies of the document organized properly in the application</p></li>
                                    <li><p> HouseLab provides property setup as single property and multi-property apartment for Builders to setup with documents and one-click handover to their buyers</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cs(houselabstyles.wraper__houselabs__features)} >
                <div className={cs(houselabstyles.houselabs__features__title)} >
                    <div className={cs("container", houselabstyles.container)}>

                        <div className={cs("row")}>
                            <div className={cs([houselabstyles.houselabs__features__title__text, houselabstyles.common_text, styles.text__black, 'col-xl-12', 'col-lg-12', 'col-md-12', 'col-sm-12', 'col-12', 'text-center'])}>
                                <h3>Key Features</h3>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={cs(houselabstyles.houselabs__features__screens)}>
                    <div className={cs("container-fluid", houselabstyles.container__fluid)}>

                        <div className={cs('row', 'align-items-center')}>
                            <div className={cs(['col-xl-7', 'col-lg-7', 'col-md-7', 'col-sm-12', 'col-12', 'py-0'])}>
                                <div className={cs(houselabstyles.houselabs__features__screens__pic)}>
                                    <img className={cs(houselabstyles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/Houselabs-Project-and-Property-Management@2x.png" alt="" />
                                </div>
                            </div>
                            <div className={cs(['col-xl-5', 'col-lg-5', 'col-md-5', 'col-sm-12', 'col-12', 'py-0'])}>
                                <div className={cs([houselabstyles.houselabs__features__screens__text, 'd-inline-block', houselabstyles.common_text, styles.text__black, 'aos-init', 'aos-animate'])} data-aos="fade-up" >
                                    <h3>Project and property management</h3>
                                    <p>Houselab platform allows developers and real-estate agencies to build a meaningful relationship with their customers by providing them with an efficient way to manage their new home and reducing post-occupancy costs by ensuring they have everything they need.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={cs(houselabstyles.houselabs__features__screens)}>
                    <div className={cs(houselabstyles.houselabs__features__screens__boxes)} >
                        <div className={cs([houselabstyles.houselabs__features__screens__boxes__item, houselabstyles.item__one, 'aos-init', 'aos-animate'])} data-aos="fade-down-left" ></div>
                        <div className={cs([houselabstyles.houselabs__features__screens__boxes__item, houselabstyles.item__two, 'aos-init', 'aos-animate'])} data-aos="fade-up-right" ></div>
                    </div>
                    <div className={cs("container")} >

                        <div className={cs("row")} >
                            <div className={cs(['col-xl-3', 'col-lg-3', 'col-md-3', 'col-sm-12', 'col-12'])} ></div>
                            <div className={cs(['col-xl-9', 'col-lg-9', 'col-md-9', 'col-sm-12', 'col-12'])} >
                                <div className={cs(houselabstyles.houselabs__features__screens__pic)}>
                                    <img className={cs(houselabstyles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/Houselabs-File-and-folder-storage@2x.png" alt="" />
                                </div>
                                <div className={cs([houselabstyles.houselabs__features__screens__text, 'd-inline-block', houselabstyles.common_text, styles.text__black, 'aos-init', 'aos-animate'])} data-aos="fade-up" >
                                    <h3>File and folder storage</h3>
                                    <p>Understanding the complexity and importance of the everyday activities, Houselab helps to manage everything from big projects to personal stuff by storing all the manuals, warranties, receipts and other important documents in a secure area</p>
                                </div>
                            </div>
                        </div >

                    </div >
                </div >
                <div className={cs(houselabstyles.houselabs__features__screens)}>
                    <div className={cs("container-fluid", houselabstyles.container__fluid)}>

                        <div className={cs('row', 'align-items-center')}>
                            <div className={cs(['col-xl-6', 'col-lg-6', 'col-md-6', 'col-sm-12', 'col-12'])} >
                                <div className={cs(houselabstyles.houselabs__features__screens__pic)}>
                                    <img className={cs(houselabstyles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/Houselabs-Roles-and-Permission-Management@2x.png" alt="" />
                                </div >
                                <div className={cs([houselabstyles.houselabs__features__screens__text, 'col-sm-10', 'px-0', houselabstyles.common_text, styles.text__black, 'aos-init', 'aos-animate'])} data-aos="fade-up" >
                                    <h3>Roles and Permission Management</h3>
                                    <p>Based on users’ job duties, roles and permissions provide various levels of access to users including full access to all aspects of a project, editing details of a project and viewing access. Using roles enables owners to easily define permissions for an entire group of users</p>
                                </div >
                            </div >
                            <div className={cs(['col-xl-6', 'col-lg-6', 'col-md-6', 'col-sm-12', 'col-12'])} >
                                <div className={cs(houselabstyles.houselabs__features__screens__pic)}>
                                    <img className={cs(houselabstyles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/Houselabs-Project-Collaboration@2x.png" alt="" />
                                </div >

                                <div className={cs([houselabstyles.houselabs__features__screens__text, 'col-sm-10', 'px-0', houselabstyles.common_text, styles.text__black, 'aos-init', 'aos-animate'])} data-aos="fade-up" >
                                    <h3>Project Collaboration</h3>
                                    <p>This allows users and stakeholders to collaborate effectively on project tasks or during handover. Transparent communication keeps everyone informed about the updates so that a user is anxiety free. </p>
                                </div >
                            </div >
                        </div >

                    </div >
                </div >
                <div className={cs(houselabstyles.houselabs__features__screens)}>
                    <div className={cs("container")} >

                        <div className={cs("row")} >
                            <div className={cs(['col-xl-2', 'col-lg-2', 'col-md-2', 'col-sm-12', 'col-12'])} ></div >
                            <div className={cs(['col-xl-9', 'col-lg-9', 'col-md-9', 'col-sm-12', 'col-12'])} >
                                <div className={cs(houselabstyles.houselabs__features__screens__pic)}>
                                    <img className={cs(houselabstyles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/Houselabs-Defect-Management@2x.png" alt="" />
                                </div >
                                <div className={cs([houselabstyles.houselabs__features__screens__text, 'd-inline-block', houselabstyles.common_text, styles.text__black, 'aos-init', 'aos-animate'])} data-aos="fade-up" >
                                    <h3>Defect Management</h3>
                                    <p>A defect dashboard that helps in gaining important insights and lists all defects across selected properties. The defect creator can easily group the list of defects based on the status which are open, accepted, resolved, fixed and rejected.</p>
                                </div >
                            </div >
                            <div className={cs(['col-xl-1', 'col-lg-1', 'col-md-1', 'col-sm-12', 'col-12'])} ></div >
                        </div >

                    </div >
                </div >
                <div className={cs(houselabstyles.houselabs__features__screens)}>
                    <div className={cs("container-fluid", houselabstyles.container__fluid)}>

                        <div className={cs('row', 'align-items-center')}>
                            <div className={cs(['col-xl-6', 'col-lg-6', 'col-md-6', 'col-sm-12', 'col-12'])} >
                                <div className={cs(houselabstyles.houselabs__features__screens__pic)}>
                                    <img className={cs(houselabstyles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/Houselabs-Expense-Management-and-Tracking@2x.png" alt="" />
                                </div >
                                <div className={cs([houselabstyles.houselabs__features__screens__text, 'col-sm-10', 'px-0', houselabstyles.common_text, styles.text__black, 'aos-init', 'aos-animate'])} data-aos="fade-up" >
                                    <h3>Expense Management and Tracking</h3>
                                    <p>Expense management made easy. Gain control over your expenses by getting real-time visibility into project expenses. Access all your bills, receipts and expense submissions from your Houselab dashboard and create, validate, or refuse them in just a click.</p>
                                </div >

                            </div >
                            <div className={cs(['col-xl-6', 'col-lg-6', 'col-md-6', 'col-sm-12', 'col-12'])} >
                                <div className={cs(houselabstyles.houselabs__features__screens__pic)}>
                                    <img className={cs(houselabstyles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/Houselabs-Reminders-and-Notifications@2x.png" alt="" />
                                </div >
                                <div className={cs([houselabstyles.houselabs__features__screens__text, 'col-sm-10', 'px-0', houselabstyles.common_text, styles.text__black, 'aos-init', 'aos-animate'])} data-aos="fade-up" >
                                    <h3>Reminders and Notifications</h3>
                                    <p>Email reminders and online alerts allow you to keep up with the things that you need to do. Keeping records of all your maintenance activities helps you to add value to your home when it comes time to sell.</p>
                                </div >
                            </div >
                        </div >

                    </div >
                </div >
                <div className={cs(houselabstyles.houselabs__features__screens, houselabstyles.last__item)}>
                    <div className={cs("container")} >

                        <div className={cs("row")} >
                            <div className={cs(['col-xl-2', 'col-lg-2', 'col-md-2', 'col-sm-12', 'col-12'])} ></div >
                            <div className={cs(['col-xl-9', 'col-lg-9', 'col-md-9', 'col-sm-12', 'col-12'])} >
                                <div className={cs(houselabstyles.houselabs__features__screens__pic)}>
                                    <img className={cs(houselabstyles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/Houselabs-Project-Handover@2x.png" alt="" />
                                </div >
                                <div className={cs([houselabstyles.houselabs__features__screens__text, 'd-inline-block', houselabstyles.common_text, styles.text__black, 'aos-init', 'aos-animate'])} data-aos="fade-up" >
                                    <h3>Project Handover</h3>
                                    <p>Initiate the handover process by uploading all correct details of your property. Many people at the handover of a new unit or new home do not understand or even know what the relevant industry standards are. Houselab is designed to ensure you get what you pay for. </p>
                                </div >
                            </div >
                            <div className={cs(['col-xl-1', 'col-lg-1', 'col-md-1', 'col-sm-12', 'col-12'])} ></div >
                        </div >

                    </div >
                </div >
            </section >
        </Layout >
    );
}
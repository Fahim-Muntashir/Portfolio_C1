import Header from "../components/Header/Header";
import Startup from "../components/Header/StartupLogo/Startup";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState, useRef } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import ThisCantBeReached from "../components/Home/ThisSiteCantBeReached/ThisCantBeReached";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import ScreenSizeDetector from "../components/CustomComponents/ScreenSizeDetector";
import Maintenance from "../components/Home/Maintenance/Maintenance";
export default function Home() {
  const [ShowElement, setShowElement] = useState(false);
  const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true);
  const [ShowMe, setShowMe] = useState(false);
  // context Variable to clearInterval
  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  // userData state that will be used to get usr location
  const [userData, setUserData] = useState(null);

  // check if user from Black List

  // check if NEXT_PUBLC_BLACKLIST_COUNTRIES is empty

  // this userEffect will be called to get the user location, so we can check if he is from the blackList,
  // this will only run if NEXT_PUBLIC_BLACKLIST_COUNTRIES is not empty

  // this useEffect will be called when userData is set

  useEffect(() => {
    // remove the interval Cookie timer setter when
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== "undefined") {
      // remove UserDataPuller project EventListeners
      window.removeEventListener("resize", context.sharedState.userdata.windowSizeTracker.current);
      window.removeEventListener("mousemove", context.sharedState.userdata.mousePositionTracker.current, false);
      // remove Typing project EventListeners
      window.removeEventListener("resize", context.sharedState.typing.eventInputLostFocus);
      document.removeEventListener("keydown", context.sharedState.typing.keyboardEvent);
    }
    setTimeout(() => {
      setShowElement(true);
    }, 4500);

    setTimeout(() => {
      setShowThisCantBeReached(false);
    }, 5400);
    // ? INFORMATIONAL next function will show the component after changing the state of ShowMe
    setTimeout(() => {
      setShowElement(false);
      setShowMe(true);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 10400);
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  console.log("website is rendering...");
  const meta = {
    title: "Fahim Muntashir- Software Engineer",
    description: `Welcome to the portfolio of Fahim Muntashir - a highly skilled and dedicated MERN stack web developer with over three years of hands-on experience. Specializing in the creation of large-scale projects, I am adept at solving complex problems with innovative solutions that surpass expectations. My hard-working approach and creative skills ensure the successful development of your next project. Explore my portfolio for a glimpse into my impressive track record. Let's collaborate to achieve your website's full potential."

    When writing SEO descriptions, it's important to include relevant keywords that people are likely to search for. In this case, I incorporated terms like "MERN stack web developer," "large-scale projects," and "creative skills." You should also incorporate your name, Fahim Muntashir, as well as any other key terms or phrases that are specific to your expertise or the services you offer. Remember to keep it concise and to the point!`,
    image: "/titofCercle.png",
    type: "website",
  };
  const isProd = process.env.NODE_ENV === "production";

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://fahimmuntashir.net`} />
        <link rel="canonical" href={`https://fahimmuntashir.net`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@titofabdo" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
        {context.sharedState.finishedLoading ? <></> : ShowThisCantBeReached ? <ThisCantBeReached /> : <></>}
        {context.sharedState.finishedLoading ? <></> : ShowElement ? <Startup /> : <></>}
        <Header finishedLoading={context.sharedState.finishedLoading} sectionsRef={homeRef} />
        <MyName finishedLoading={context.sharedState.finishedLoading} />
        <SocialMediaArround finishedLoading={context.sharedState.finishedLoading} />
        {context.sharedState.finishedLoading ? <AboutMe ref={aboutRef} /> : <></>}
        {context.sharedState.finishedLoading ? <WhereIHaveWorked /> : <></>}
        {context.sharedState.finishedLoading ? <SomethingIveBuilt /> : <></>}
        {context.sharedState.finishedLoading ? <GetInTouch /> : <></>}
        {context.sharedState.finishedLoading ? (
          <Footer githubUrl={"https://github.com/hktitof/my-website"} hideSocialsInDesktop={true} />
        ) : (
          <></>
        )}
        <ScreenSizeDetector />
      </div>


    </>
  );
}

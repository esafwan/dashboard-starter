import { IconBrandUnity, IconPlus } from "@tabler/icons";
import Title from "./Title";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {
  IconSchool,
  IconWand,
  Icon3dCubeSphere,
  IconCrystalBall
} from "@tabler/icons";

function Content() {
  const {t}=useTranslation();
  const outlineButtonCss="w-full max-w-sm md:w-28 md:mx-1 my-2 inline-flex justify-center rounded-md border px-4 py-2 text-sm font-medium border-slate-200 bg-white text-brand-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2";
  return (
    <main className="flex w-full flex-1 flex-col overflow-hidden">
      <div className="grid items-start gap-8">
        {/* title + button */}
        <Title title={t("title")} subtitle={t("subtitle")} />        
        {/* title + button */}
        {/* empty */}
        <div>
          <div className="flex min-h-[400px] flex-col items-center justify-center items-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50 ml-1 mr-4">
            <div className="mx-auto flex w-full flex-col items-center justify-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
                <IconBrandUnity size={40} stroke={1.5} />
              </div>
              <h2 className="mt-6 text-xl font-semibold">{t("What do you want?")}</h2>
              {/* <p className="mt-3 mb-8 text-center text-sm font-normal leading-6 text-slate-700">
                {t("content_none_description")}
              </p> */}
              {/* <button
                className="relative inline-flex h-9 items-center rounded-md border px-4 py-2 text-sm font-medium border-slate-200 bg-white text-brand-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                data-bcup-haslogintext="no"
              >
                 <IconPlus className="mr-2" size={16} strokeWidth={2} />            
               
                Imagine
              </button> */}
              <div className="w-full mt-8">
                <Link to="/write"
                className={outlineButtonCss}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wand mr-2" width="20" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6 21l15 -15l-3 -3l-15 15l3 3"></path>
                    <path d="M15 6l3 3"></path>
                    <path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
                    <path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
                  </svg>
                  <span>{t("write")}</span></Link>
                <Link to="/suggest"
                className={outlineButtonCss}>
                   <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-3d-cube-sphere mr-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6 17.6l-2 -1.1v-2.5"></path>
                    <path d="M4 10v-2.5l2 -1.1"></path>
                    <path d="M10 4.1l2 -1.1l2 1.1"></path>
                    <path d="M18 6.4l2 1.1v2.5"></path>
                    <path d="M20 14v2.5l-2 1.12"></path>
                    <path d="M14 19.9l-2 1.1l-2 -1.1"></path>
                    <path d="M12 12l2 -1.1"></path>
                    <path d="M18 8.6l2 -1.1"></path>
                    <path d="M12 12l0 2.5"></path>
                    <path d="M12 18.5l0 2.5"></path>
                    <path d="M12 12l-2 -1.12"></path>
                    <path d="M6 8.6l-2 -1.1"></path>
                  </svg>
                  <span>{t("Suggest")}</span></Link>
                <Link to="/explain"
                className={outlineButtonCss}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-school mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
                    <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path>
                  </svg>
                  <span>{t("explain")}</span></Link>
                <Link to="/imagine"
                className={outlineButtonCss}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-crystal-ball mr-2" width="20" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6.73 17.018a8 8 0 1 1 10.54 0"></path>
                    <path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0 -4h-10a2 2 0 0 0 -2 2z"></path>
                    <path d="M11 7a3 3 0 0 0 -3 3"></path>
                  </svg>
                  <span>{t("Imagine")}</span></Link>
              </div>
            </div>
          </div>
        </div>
        {/* empty */}
      </div>
    </main>
  );
}
export default Content;

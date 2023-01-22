import { IconPlus } from "@tabler/icons";

function Title(props) {
  return (
    <div className="flex justify-between px-2">
      <div className="grid gap-1">
        <h1 className="text-2xl font-bold tracking-wide text-slate-900">
          {props.title}       
        </h1>
        <p className="text-neutral-500">{props.subtitle}</p>
      </div>

       <button
          className="relative inline-flex h-9 items-center rounded-md border border-transparent bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          data-bcup-haslogintext="no"
        >
          <IconPlus className="mr-2" size={18} strokeWidth={2} />
          {props.title}   
        </button>


      {/* {props.button_text && (
        <button
          className="relative inline-flex h-9 items-center rounded-md border border-transparent bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          data-bcup-haslogintext="no"
        >
          <IconPlus className="mr-2" size={18} strokeWidth={2} />
          {props.button_text}
        </button>
      )} */}
    </div>
  );
}

export default Title;

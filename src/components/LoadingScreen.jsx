import { IconBrandUnity} from "@tabler/icons";
const LoadingScreen=({text})=>{
    return(
        <div className="flex flex-col justify-center items-center h-96">
             <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 animate-[bounce_2s_ease-in-out_infinite]">
                <IconBrandUnity size={40} stroke={1.5} />
              </div>
            <span className="mt-4 text-xl font-semibold">{text}</span>
        </div>
    );
}

export default LoadingScreen;
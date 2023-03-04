import React,{useState,useContext,useRef} from "react";
import {useTranslation} from "react-i18next";
import PersistContext from "./../../Context/PersistContext";
import InputQuery from "./components/InputQuery";
import ResultScreen from "./components/ResultScreen";
import LoadingScreen from "./../../components/LoadingScreen";
import {analytics} from "./../../firebase";
import { logEvent } from "firebase/analytics";
function Write(){
    const {t}=useTranslation();
    const {writeResponseText,setWriteResponseText}=useContext(PersistContext);
    const [loading,setLoading]=useState(false);
    let query=undefined;
    const setQuery=(text)=>query=text;
    const outputLang=useRef("en");
    const setOutputLang=(lang)=>outputLang.current=lang;
    
    const submitQuery=()=>{
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic dGVzdDE6dGVzdDFfcGFzcw==");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "https://ml-text-ai.herokuapp.com");
        const data={
            data:query,
            input_lang:"en",
            output_lang:outputLang.current
        }
        const options={
            method:"POST",
            headers:myHeaders,
            body:JSON.stringify(data),
            redirect:"follow"
        }
        fetch("https://ml-text-ai.herokuapp.com/magic",options)
        .then((res)=>res.json())
        .then((data)=>{
            logEvent(analytics,"write",{query:"test"});
            setWriteResponseText(data.txt);
            setLoading(false);
        })
        .catch((err)=>console.log(err));
        // setTimeout(()=>{
        //     logEvent(analytics,"write",{query});
        //     setWriteResponseText(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa vitae tortor condimentum lacinia quis vel eros donec. Eget mi proin sed libero enim sed faucibus. Euismod quis viverra nibh cras. Facilisis gravida neque convallis a cras. Consequat interdum varius sit amet. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Mollis aliquam ut porttitor leo a. Cras semper auctor neque vitae tempus quam. Adipiscing diam donec adipiscing tristique risus.

        //     In arcu cursus euismod quis viverra nibh. Tristique senectus et netus et malesuada fames ac. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Tincidunt ornare massa eget egestas purus. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Id cursus metus aliquam eleifend. Id eu nisl nunc mi ipsum. Neque egestas congue quisque egestas. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Convallis a cras semper auctor neque. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Pretium nibh ipsum consequat nisl.
            
        //     Ultricies lacus sed turpis tincidunt. Sodales neque sodales ut etiam sit amet. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Ornare lectus sit amet est placerat in egestas erat imperdiet. Ultrices dui sapien eget mi. Rutrum quisque non tellus orci ac auctor augue mauris. Massa tincidunt nunc pulvinar sapien et ligula. Condimentum lacinia quis vel eros donec. Hac habitasse platea dictumst quisque sagittis purus sit. Placerat in egestas erat imperdiet sed euismod nisi. Mattis rhoncus urna neque viverra justo nec ultrices dui. In hendrerit gravida rutrum quisque. Amet mauris commodo quis imperdiet massa tincidunt. Ac placerat vestibulum lectus mauris ultrices eros in cursus. At tempor commodo ullamcorper a lacus vestibulum. Tempor orci dapibus ultrices in iaculis nunc sed. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Orci dapibus ultrices in iaculis nunc sed augue. Euismod lacinia at quis risus sed. Erat nam at lectus urna duis.
            
        //     Magna etiam tempor orci eu lobortis elementum. Dolor magna eget est lorem. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Mattis pellentesque id nibh tortor id. In hac habitasse platea dictumst vestibulum rhoncus est. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Quam vulputate dignissim suspendisse in est. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Sit amet commodo nulla facilisi nullam. Tellus molestie nunc non blandit. Amet dictum sit amet justo donec. Morbi quis commodo odio aenean sed adipiscing diam. Nec dui nunc mattis enim ut tellus elementum sagittis. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Sed pulvinar proin gravida hendrerit lectus. Adipiscing at in tellus integer feugiat scelerisque. Sodales neque sodales ut etiam sit amet nisl purus.
            
        //     Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Habitant morbi tristique senectus et. Sed velit dignissim sodales ut eu. Donec adipiscing tristique risus nec. Sagittis vitae et leo duis ut diam quam nulla porttitor. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet. Ut consequat semper viverra nam libero.
            
        //     Erat velit scelerisque in dictum non consectetur a erat. Amet commodo nulla facilisi nullam vehicula. Eget nunc scelerisque viverra mauris in aliquam sem. Pellentesque habitant morbi tristique senectus et. Quisque id diam vel quam elementum. Risus sed vulputate odio ut enim. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Nibh praesent tristique magna sit amet purus gravida quis blandit. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Venenatis urna cursus eget nunc scelerisque viverra mauris. Ultrices eros in cursus turpis massa tincidunt. Lectus quam id leo in vitae turpis. Ac auctor augue mauris augue.
            
        //     Habitant morbi tristique senectus et netus et malesuada. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Nunc mattis enim ut tellus elementum sagittis. In hac habitasse platea dictumst vestibulum rhoncus est. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Turpis egestas integer eget aliquet nibh praesent tristique magna. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Lacus viverra vitae congue eu. Blandit volutpat maecenas volutpat blandit. Tristique magna sit amet purus gravida quis. Massa sapien faucibus et molestie ac feugiat sed. Vitae ultricies leo integer malesuada.
            
        //     Sed velit dignissim sodales ut eu. Ultrices in iaculis nunc sed augue lacus viverra vitae. Non diam phasellus vestibulum lorem sed. Enim ut tellus elementum sagittis vitae. Mattis aliquam faucibus purus in massa tempor nec feugiat. Pretium fusce id velit ut. Enim sit amet venenatis urna cursus eget nunc scelerisque. Non diam phasellus vestibulum lorem. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Gravida quis blandit turpis cursus in hac habitasse platea. Iaculis at erat pellentesque adipiscing commodo elit at. Diam sollicitudin tempor id eu nisl nunc mi. Sem fringilla ut morbi tincidunt augue interdum velit. Tortor at risus viverra adipiscing at in tellus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Et egestas quis ipsum suspendisse ultrices gravida dictum. Elit pellentesque habitant morbi tristique senectus et netus. Risus feugiat in ante metus dictum at tempor. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Ornare arcu dui vivamus arcu.
            
        //     Eu ultrices vitae auctor eu augue ut lectus arcu. Vitae suscipit tellus mauris a. Ac tortor vitae purus faucibus ornare suspendisse sed. Elit scelerisque mauris pellentesque pulvinar pellentesque. Enim neque volutpat ac tincidunt vitae semper quis. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Sed felis eget velit aliquet sagittis. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Porta nibh venenatis cras sed felis eget. Morbi tincidunt augue interdum velit. Eget sit amet tellus cras adipiscing enim. Purus ut faucibus pulvinar elementum integer enim neque. Consectetur adipiscing elit duis tristique sollicitudin nibh. Tristique senectus et netus et malesuada fames. Fusce ut placerat orci nulla pellentesque dignissim. Sociis natoque penatibus et magnis dis. Dui nunc mattis enim ut. Orci a scelerisque purus semper eget. Magna ac placerat vestibulum lectus mauris ultrices eros in.
            
        //     Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Feugiat nisl pretium fusce id. Convallis aenean et tortor at risus. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Tristique risus nec feugiat in fermentum posuere urna nec. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Dolor purus non enim praesent elementum. Eu sem integer vitae justo eget magna fermentum. Mi eget mauris pharetra et ultrices neque ornare aenean. Aliquam faucibus purus in massa tempor nec feugiat nisl.`);
        //     setLoading(false);
        // },5000);
    }
    if(loading)
        return <LoadingScreen text={`${t("writing")}...`}/>
    else if(writeResponseText)
        return <ResultScreen text={writeResponseText} setResponseText={setWriteResponseText} outputLang={outputLang.current}/>
    return (<div className="overflow-hidden">
        <InputQuery setQuery={setQuery} submitQuery={submitQuery} setOutputLang={setOutputLang}/>
    </div>);
}

export default Write;
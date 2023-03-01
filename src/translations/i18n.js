import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources={
    en:{
        translation:{
            "Imagine feed":"Imagine feed"
        }
    },
    ar:{
        translation:{
            "Imagine feed":"تخيل تغذية"
        }
    }
}

i18n.use(initReactI18next)
.init({
    resources,
    lng:"ar",
    interpolation:{
        escapeValue:false
    }
});

export default i18n;
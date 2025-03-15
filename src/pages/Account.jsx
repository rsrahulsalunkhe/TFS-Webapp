import LanguageToggle from "../components/LanguageToggle";
import '../i18n'
import { useTranslation } from "react-i18next"

const Account = () => {
    const { t } = useTranslation();
    
    return (
        <div>
            <h1>{t("welcome")}</h1>
            <p>{t("description")}</p>
            <LanguageToggle />
        </div>
    );
  };
  
  export default Account;
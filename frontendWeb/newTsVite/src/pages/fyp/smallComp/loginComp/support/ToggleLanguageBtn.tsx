import { ActionIcon } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { useEffect } from 'react';
import { Planet } from 'tabler-icons-react';
import { useT } from "talkr";

    
function ToggleLanguageBtn(){

    const [langToggVal, setLangToggVal] = useLocalStorage<"hk" | "en">({
        key: 'languageToggleValue',
        defaultValue: "en",
    });

    const { T, setLocale, locale } = useT();

    useEffect(() => {
        setLocale(langToggVal)
    }, []);

    function toggleLang(str:"hk" | "en"){
        setLocale(str);
        setLangToggVal(str);
    }

    return (
        <>
        <ActionIcon
            variant="outline"
            color={'blue'}
            onClick={() => langToggVal === "hk" ? toggleLang("en") : toggleLang("hk")}
            title="questionMarkBox"
        >
            <Planet size={18} />
        </ActionIcon>
        </>
    )
}
    
export default ToggleLanguageBtn

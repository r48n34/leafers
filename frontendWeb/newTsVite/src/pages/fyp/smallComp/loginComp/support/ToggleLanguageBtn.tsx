import { useEffect } from 'react';
import { ActionIcon, Menu } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { Star, Planet, Heart } from 'tabler-icons-react';
import { useT } from "talkr";

type Languages = "hk" | "en" | "jp" | "cn" | "kr"

const languagesArr: {symbo: Languages, title: string}[] = [
    { symbo : "en", title: "English" },
    { symbo : "hk", title: "繁體中文" },
    { symbo : "cn", title: "简体中文" },
    { symbo : "jp", title: "日本語" },
    { symbo : "kr", title: "한국어" },
]

function ToggleLanguageBtn(){

    const [langToggVal, setLangToggVal] = useLocalStorage<Languages>({
        key: 'languageToggleValue',
        defaultValue: "en",
    });

    const { setLocale } = useT();

    useEffect(() => {
        setLocale(langToggVal)
    }, []);

    function toggleLang(str:Languages){
        setLocale(str);
        setLangToggVal(str);
    }

    return (
        <>
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <ActionIcon
                    variant="outline"
                    color={'blue'}
                    title="questionMarkBox"
                >
                    <Planet size={18} />
                </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
                { languagesArr.map (v => (
                    <Menu.Item 
                        key={v.title}
                        icon={ langToggVal === v.symbo ? <Star size={14} /> : <Heart size={14} />} 
                        onClick={ () => toggleLang(v.symbo) }
                    >
                        {v.title}
                    </Menu.Item>
                ))}
            </Menu.Dropdown>
        </Menu>
        </>
    )
}
    
export default ToggleLanguageBtn

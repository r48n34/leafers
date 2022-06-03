import { useNavigate } from "react-router-dom";

import { SpotlightProvider } from '@mantine/spotlight';
import type { SpotlightAction } from '@mantine/spotlight';

import { Search } from 'tabler-icons-react';
import { navArr } from '../../interface/navBar/navArray';

type SpotlightLayoutProps = {
    children: any;
    data: navArr[];
}

function SpotlightLayout({ children, data }: SpotlightLayoutProps) {
    let navigate = useNavigate();

    const actions:SpotlightAction[] = data.map( v => {
        return {
            title: v.title,
            description: v.title,
            onTrigger: () => navigate(v.routeSrc),
        }
    })

    return (
        <>
        <SpotlightProvider
            actions={actions}
            searchIcon={<Search size={18} />}
            searchPlaceholder="Search..."
            shortcut={['/']}
            nothingFoundMessage="Nothing found..."
        >
            <main> {children} </main>
        </SpotlightProvider>
        </>
    )
}

export default SpotlightLayout
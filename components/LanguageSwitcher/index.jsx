import React, { useMemo } from 'react';
import Link from "next/link";
import {useRouter} from "next/router";


const LanguageSwitcher = ({ dark }) => {

    const linkData = useMemo(() => [
        {
            href: '/',
            title: 'EN',
            locale: 'en'
        },
        {
            href: '/',
            title: 'UA',
            locale: 'ua'
        },
    ], []);

    const {locale} = useRouter();

    const activeLinkStyle = 'font-bold bg-yellow-600 rounded-md';

    const renderLinks = (link, i) => (
        <div key={`${link.title}-${i}`}
             className={`p-2 inline cursor-pointer text-sm ${locale === link.locale && activeLinkStyle}`}>
            <Link href={link.href} locale={link.locale}>
                <span>{link.title}</span>
            </Link>
        </div>
    );

    return (
        <div className='flex px-8' role="languageSwitcher">
            <div className={`${!dark ? 'text-white' : 'text-yellow-900' }`}>
                {linkData.map(renderLinks)}
            </div>
        </div>
    );
}

export default LanguageSwitcher;

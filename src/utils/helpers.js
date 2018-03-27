import cn from 'classnames';

export const getPanelClass = (panel, pathname) => cn(`${panel} ${panel}_page_${pathname.split('/')[1] || 'home'}`, {
    [`${panel}_various`]: pathname === '/',
    [`${panel}_red`]: pathname === '/portfolio/lazy-az' || pathname === '/portfolio/my-portfolio',
    [`${panel}_yellow`]: pathname === '/portfolio/lazy-az-dashboard' || pathname === '/portfolio/12-saffron',
    [`${panel}_grass`]: pathname === '/portfolio/7-glyphs' || pathname === '/portfolio/service-packages',
    [`${panel}_green`]: pathname === '/about' || pathname === '/portfolio/whip-around',
    [`${panel}_blue`]: pathname === '/skills' || pathname === '/portfolio/msp',
    [`${panel}_violet`]: pathname === '/experience' || pathname === '/portfolio/fcdc-dashboard'
});

